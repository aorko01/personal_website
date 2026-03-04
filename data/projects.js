export const projects = [
  {
    title: "Distributed ML Task Scheduler",
    status: "In Progress",
    description:
      "A cluster-level job scheduler for heterogeneous GPU environments. Users submit training scripts via a web UI — the system handles VRAM estimation, bin-packing across GPUs, checkpoint-based fault recovery, and real-time job feedback.",
    highlights: [
      "VRAM & runtime estimation across different GPU models",
      "Bin-packing: multiple jobs share a single GPU when headroom allows",
      "Checkpoint-based fault recovery on node failure",
      "Real-time stdout/stderr feedback to users",
    ],
    tech: ["Python", "Ray", "Docker", "Kubernetes", "Prometheus"],
    icon: "🔧",
  },
  {
    title: "Flash Attention in Triton",
    status: "In Progress",
    description:
      "Implementing Flash Attention from scratch using Triton GPU kernels, then training GPT-2 on top to validate correctness and benchmark real-world throughput.",
    highlights: [
      "Tiled SRAM-based attention to avoid HBM round-trips",
      "Benchmarking against standard PyTorch attention",
      "End-to-end GPT-2 training to verify gradient correctness",
    ],
    tech: ["Triton", "CUDA", "PyTorch", "Python"],
    icon: "⚡",
  },
];
