import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const linkVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function MobileMenu({ links, onClose, onNavigate }) {
  return (
    <motion.div
      className="mobile-menu"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="mobile-menu-header">
        <span className="mobile-menu-logo">Jahanzaib</span>
        <motion.button
          className="mobile-menu-close"
          onClick={onClose}
          whileTap={{ scale: 0.9 }}
        >
          <X size={18} />
        </motion.button>
      </div>

      <motion.div
        className="mobile-menu-links"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {links.map((link) => (
          <motion.button
            key={link.label}
            className="mobile-menu-link"
            variants={linkVariants}
            onClick={() => onNavigate(link.href)}
            whileHover={{ x: 8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {link.label}
          </motion.button>
        ))}
      </motion.div>

      <div className="mobile-menu-footer">
        <motion.a
          href="#contact"
          className="mobile-menu-cta"
          onClick={(e) => { e.preventDefault(); onNavigate('#contact'); }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Let's Build ↗
        </motion.a>
      </div>
    </motion.div>
  );
}
