import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">$ whoami</p>
          <h1>
            I build things
            <br />
            <span className="gradient-text">close to the metal.</span>
          </h1>
          <p className="hero-description">
            GPU kernels, distributed training infrastructure, and systems
            software. I care about what happens at the layer most engineers
            treat as a black box — how memory moves, how schedulers make
            decisions, how kernels actually run on hardware.
          </p>
          <p className="hero-beyond">
            When I’m not staring at the screen my doctor asked me not to  — I’m
            chasing light with a camera, practicing the same solo for the nth
            time, getting lost in nature, traveling wherever the road leads, or
            winding down with a good book.
          </p>
          <div className="hero-tags">
            {[
              "CUDA",
              "Triton",
              "PyTorch",
              "Distributed Systems",
              "OS Internals",
              "C++",
              "Python",
            ].map((tag) => (
              <span key={tag} className="hero-tag">
                {tag}
              </span>
            ))}
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
        <div className="hero-image">
          <img src="/profile.jpg" alt="Zulfiker" />
        </div>
      </div>
    </section>
  );
}
