---
title: "GPU Bin-Packing: Fitting More Jobs on Fewer GPUs"
date: "2026-02-15"
excerpt: "How I designed a VRAM-aware bin-packing scheduler that maximizes GPU utilization by safely co-locating multiple training jobs on the same device."
tags: ["Systems", "Scheduling", "GPU", "Infrastructure"]
---

## The Problem

GPUs are expensive. A single A100 costs ~$2/hour in the cloud. And most training jobs don't use all 80GB of VRAM — a fine-tuning run might use 12GB, a small experiment 4GB. The rest sits idle.

The naive approach: one job per GPU. Simple, safe, wasteful.

## The Idea

What if we could safely run multiple jobs on the same GPU, as long as their combined VRAM usage fits?

This is bin-packing — a classic CS problem, but with real-time constraints and the added fun of GPU memory being less predictable than CPU memory.

## VRAM Estimation

Before we can pack jobs, we need to know how much VRAM they'll use. This is harder than it sounds:

- **Model parameters**: straightforward, count params × bytes per param
- **Optimizer state**: Adam stores 2 extra copies per param
- **Activations**: depends on batch size, sequence length, and whether you're using gradient checkpointing
- **CUDA overhead**: fragmentation, CUDA context, cuBLAS workspace

We built a profiler that runs a quick calibration with a small batch, measures peak VRAM, then extrapolates.

## The Scheduler

The scheduler uses a first-fit decreasing approach, but with a safety margin:

1. Sort pending jobs by estimated VRAM (descending)
2. For each job, find a GPU with enough headroom (estimated + 15% safety margin)
3. If no GPU has room, queue the job until one frees up
4. Monitor actual VRAM usage — if a job exceeds estimate, migrate something

## Lessons

Building this taught me that the gap between "theoretically possible" and "production-ready" is enormous. Memory fragmentation alone can make a 20GB-free GPU unable to allocate a 15GB contiguous block.

Real systems are messy. That's what makes them interesting.
