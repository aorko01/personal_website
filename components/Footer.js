import { FaGithub, FaLinkedin, FaMedium, FaGoodreads, FaUnsplash } from 'react-icons/fa';
import { socialLinks } from '@/data/social';

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaMedium: FaMedium,
  FaGoodreads: FaGoodreads,
  FaUnsplash: FaUnsplash,
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-name">shahir_</p>
          <p>Systems engineer. Building close to the metal.</p>
        </div>
        <div className="footer-socials">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
              >
                {Icon && <Icon />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
