import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

function PlatformPhone({ type }) {
  const isAndroid = type === 'android';
  return (
    <div className="platform-device">
      <div className="platform-label">{isAndroid ? 'Android' : 'iOS'}</div>
      <motion.div
        className={`phone-frame-lg ${isAndroid ? '' : ''}`}
        style={{ borderColor: isAndroid ? 'rgba(200,245,66,0.12)' : 'rgba(255,255,255,0.08)' }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: isAndroid ? 4.5 : 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: isAndroid ? 0 : 1,
        }}
      >
        <div className={`phone-screen-lg ${isAndroid ? 'android-screen' : 'ios-screen'}`}>
          {/* Top nav bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ height: 5, width: 60, borderRadius: 2, background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ height: 20, width: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
          </div>
          {/* Content bars */}
          <div className="pbar a" />
          <div className="pbar b" />
          <div className="pblock" style={{ flex: 0, height: 120 }} />
          <div style={{ display: 'flex', gap: 8 }}>
            <div className="pblock" style={{ flex: 1, height: 56 }} />
            <div className="pblock" style={{ flex: 1, height: 56 }} />
          </div>
          <div className="pblock accent-p" style={isAndroid ? {} : { borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }} />
          <div className="pbar" style={{ width: '40%' }} />
        </div>
      </motion.div>
    </div>
  );
}

export default function Platforms() {
  return (
    <section id="platforms" className="platforms">
      <ScrollReveal>
        <p className="section-label" style={{ justifyContent: 'center' }}>
          Cross-Platform
        </p>
        <h2 className="platforms-title">
          ONE PRODUCT.<br />
          <span className="outline">TWO PLATFORMS.</span>
        </h2>
        <p className="platforms-sub">
          React Native lets me build one polished experience that runs natively on both Android and iOS — without compromise.
        </p>
      </ScrollReveal>

      <div className="platforms-devices">
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -4 }}
          whileInView={{ opacity: 1, x: 0, rotate: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <PlatformPhone type="android" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ zIndex: 2 }}
        >
          <PlatformPhone type="ios" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 4 }}
          whileInView={{ opacity: 1, x: 0, rotate: 4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <PlatformPhone type="android" />
        </motion.div>
      </div>
    </section>
  );
}
