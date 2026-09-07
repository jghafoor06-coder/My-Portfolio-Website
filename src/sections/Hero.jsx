import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import { useMousePosition } from '../hooks/useMousePosition';

const words = ['I', 'BUILD', 'MOBILE', 'PRODUCTS', 'PEOPLE', 'REMEMBER.'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (d) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: d, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Hero() {
  const mouse = useMousePosition();
  const heroRef = useRef(null);

  const parallaxX = (mouse.x / window.innerWidth - 0.5) * 20;
  const parallaxY = (mouse.y / window.innerHeight - 0.5) * 12;

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Floating decorative phone elements */}
      <motion.div
        className="desktop-only"
        style={{
          position: 'absolute',
          top: '18%',
          right: '6%',
          x: parallaxX * 1.5,
          y: parallaxY * 1.2,
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{
          width: 120,
          height: 240,
          borderRadius: 22,
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'var(--surface)',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 10px 10px',
          gap: 7,
          boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
        }}>
          <div style={{ height: 5, width: 50, borderRadius: 3, background: 'rgba(255,255,255,0.06)', margin: '0 auto 4px' }} />
          <div style={{ height: 7, width: '80%', borderRadius: 3, background: 'rgba(200,245,66,0.15)', border: '1px solid rgba(200,245,66,0.2)' }} />
          <div style={{ height: 5, width: '60%', borderRadius: 3, background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ flex: 1, borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }} />
          <div style={{ height: 36, borderRadius: 8, background: 'rgba(200,245,66,0.08)', border: '1px solid rgba(200,245,66,0.15)' }} />
        </div>
      </motion.div>

      <motion.div
        className="desktop-only"
        style={{
          position: 'absolute',
          top: '28%',
          right: '14%',
          x: parallaxX * 0.8,
          y: parallaxY * 0.9,
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{
          padding: '12px 18px',
          borderRadius: 12,
          border: '1px solid rgba(200,245,66,0.2)',
          background: 'rgba(200,245,66,0.06)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.08em' }}>
            React Native
          </span>
        </div>
      </motion.div>

      <motion.div
        className="desktop-only"
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '8%',
          x: parallaxX * 1.2,
          y: parallaxY * 0.7,
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{
          padding: '10px 16px',
          borderRadius: 10,
          border: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.03)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>
            Android • iOS
          </span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <motion.div
          className="scroll-indicator-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.7 }}
        >
          Scroll
        </motion.div>
        <motion.div
          className="scroll-indicator-line"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      {/* Pill */}
      <motion.div
        className="hero-pill"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="hero-pill-dot" />
        Mobile Apps &nbsp;•&nbsp; Android &nbsp;•&nbsp; iOS &nbsp;•&nbsp; React Native
      </motion.div>

      {/* Title */}
      <motion.h1
        className="hero-title"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, i) => (
          <span key={i} className="hero-title-word">
            <motion.span
              variants={wordVariants}
              className={word === 'MOBILE' || word === 'PRODUCTS' ? 'accent-word' : ''}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      {/* Bottom row */}
      <div className="hero-bottom">
        <motion.p
          className="hero-subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
        >
          Android & iOS mobile app developer focused on building polished, scalable products with React Native, modern backend technologies, and AI-powered experiences.
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.1}
        >
          <MagneticButton
            className="btn-secondary"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Build <ArrowUpRight size={14} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
