---
title: "Why I'm Building Flash Attention from Scratch"
date: "2026-03-01"
excerpt: "Most engineers use Flash Attention as a black box. I wanted to understand every memory access, every tile, every SRAM trick — so I built it from scratch in Triton."
tags: ["GPU", "Triton", "Attention", "ML Systems"]
---

## The Black Box Problem

Flash Attention changed the game for transformer training. It made attention O(N) in memory instead of O(N²) — a massive win. But most engineers drop it in via a library call and move on.

I wanted to understand **why** it works. What happens at the hardware level. How tiles are loaded into SRAM. Why the tiling pattern matters for HBM bandwidth.

## The SRAM Trick

The core idea is deceptively simple: instead of materializing the full N×N attention matrix in HBM (slow, expensive global memory), Flash Attention computes attention in tiles that fit in SRAM (fast, on-chip memory).

Here's the key insight:

```
Standard Attention:
Q, K, V → compute S = QK^T (N×N in HBM!) → softmax → output

Flash Attention:
For each tile of Q:
  For each tile of K, V:
    Load to SRAM → compute partial attention → accumulate
    Never materialize full N×N matrix
```

## Why Triton?

CUDA gives you maximum control, but Triton sits at a sweet spot: you think in terms of tile-level operations, and the compiler handles register allocation, memory coalescing, and warp scheduling.

```python
@triton.jit
def flash_attention_kernel(
    Q, K, V, O,
    stride_qz, stride_qh, stride_qm, stride_qk,
    # ... more strides
    BLOCK_M: tl.constexpr, BLOCK_N: tl.constexpr,
):
    # Load Q tile into SRAM
    q = tl.load(Q_block_ptr)
    
    # Iterate over K, V tiles
    for start_n in range(0, actual_seqlen_k, BLOCK_N):
        k = tl.load(K_block_ptr)
        # Compute QK^T for this tile
        qk = tl.dot(q, tl.trans(k))
        # Online softmax trick
        m_new = tl.maximum(m, tl.max(qk, 1))
        # ... accumulate
```

## What I Learned

1. **Memory bandwidth is everything.** The algorithm isn't doing less compute — it's doing less memory movement. HBM bandwidth is the bottleneck, not FLOPs.

2. **Online softmax is beautiful.** You can compute softmax incrementally without seeing all the values first. This is what makes tiled attention possible.

3. **Triton's abstractions leak.** When you need maximum performance, you still need to think about memory access patterns, tile sizes relative to SRAM capacity, and how the compiler maps your code to warps.

## Next Steps

I'm now training GPT-2 end-to-end with my Flash Attention kernel to verify gradient correctness. If the loss curves match PyTorch's native attention, I'll know the backward pass is correct too.

The code is on my GitHub — PRs welcome if you spot any optimization opportunities.
