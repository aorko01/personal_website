import { FaGithub, FaLinkedin, FaMedium, FaGoodreads, FaUnsplash } from 'react-icons/fa';
import { socialLinks } from '@/data/social';

export const metadata = {
  title: 'About | Zulfiker',
  description: 'Systems engineer building close to the metal — GPU kernels, distributed training, and systems software.',
};

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaMedium: FaMedium,
  FaGoodreads: FaGoodreads,
  FaUnsplash: FaUnsplash,
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About</h1>
        <p>The person behind the terminal.</p>
        <div className="accent-line"></div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Hey, I&apos;m Zulfiker 👋</h2>
          <p>
            I build things close to the metal — GPU kernels, distributed training
            infrastructure, and systems software. I care about what happens at the
            layer most engineers treat as a black box: how memory moves, how
            schedulers make decisions, how kernels actually run on hardware.
          </p>
          <p>
            Currently going deep on ML systems, GPU programming (CUDA &amp; Triton),
            and low-level systems — OS internals, networking, memory management.
            Previously built full-stack web apps with React and Django, but now I
            live in the backend, as far from CSS as possible (ironic given this
            website).
          </p>
          <p>
            When I&apos;m not writing kernels or debugging distributed systems, you can
            find me grinding LeetCode, solving GPU puzzles on LeetGPU, or
            picking up my camera. I&apos;m also into music — two
            outlets that don&apos;t require a debugger.
          </p>

          <div className="about-focus">
            <h3>Current Focus</h3>
            <div className="focus-list">
              <div className="focus-item">
                <span className="focus-icon">⚡</span>
                <span>Flash Attention in Triton — from scratch</span>
              </div>
              <div className="focus-item">
                <span className="focus-icon">🔧</span>
                <span>Distributed ML Task Scheduler with GPU bin-packing</span>
              </div>
              <div className="focus-item">
                <span className="focus-icon">🧠</span>
                <span>OS Internals &amp; Memory Management deep-dive</span>
              </div>
              <div className="focus-item">
                <span className="focus-icon">🌐</span>
                <span>Computer Networking from the ground up</span>
              </div>
              <div className="focus-item">
                <span className="focus-icon">🦀</span>
                <span>Learning Rust &amp; Go for systems programming</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-sidebar">
          <h3>Connect</h3>
          <div className="connect-links">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-link"
                >
                  <span className="connect-link-icon">
                    {Icon && <Icon />}
                  </span>
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
