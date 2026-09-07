import { ArrowUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <ScrollReveal>
          <div>
            <div className="footer-wordmark">JAHANZAIB</div>
            <div className="footer-pos">Android & iOS Mobile App Developer</div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <nav className="footer-nav">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="footer-nav-link"
                onClick={() => handleNav(link.href)}
                data-cursor="button"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={150}>
        <div className="footer-bottom">
          <div className="footer-social">
            <a
              href="https://github.com/jghafoor06-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              data-cursor="button"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jahanzaibghafoor"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              data-cursor="button"
            >
              LinkedIn
            </a>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Jahanzaib Ghafoor
          </div>

          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-cursor="button"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </ScrollReveal>
    </footer>
  );
}
