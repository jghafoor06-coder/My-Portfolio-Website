import { motion } from 'framer-motion';

export default function Brand() {
  return (
    <section id="brand" className="brand-statement">
      {/* Subtle background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(200,245,66,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.h2
        className="brand-statement-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        GOOD APPS <span className="dim">WORK.</span><br />
        GREAT APPS <span style={{ color: 'var(--accent)' }}>FEEL RIGHT.</span>
      </motion.h2>

      <motion.p
        className="brand-statement-sub"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        The difference is in the details — the transitions, the feedback, the micro-moments that make an app feel alive.
      </motion.p>
    </section>
  );
}
