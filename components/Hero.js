import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">$ whoami</p>
        <h1>
          I build things
          <br />
          <span className="gradient-text">close to the metal.</span>
        </h1>
        <p className="hero-description">
          GPU kernels, distributed training infrastructure, and systems software.
          I care about what happens at the layer most engineers treat as a black box —
          how memory moves, how schedulers make decisions, how kernels actually run on hardware.
        </p>
        <div className="hero-tags">
          {['CUDA', 'Triton', 'PyTorch', 'Distributed Systems', 'OS Internals', 'C++', 'Python'].map(
            (tag) => (
              <span key={tag} className="hero-tag">
                {tag}
              </span>
            )
          )}
        </div>
        <div className="hero-cta">
          <Link href="/blog" className="btn-primary">
            Read the Blog
          </Link>
          <Link href="/about" className="btn-secondary">
            More About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
