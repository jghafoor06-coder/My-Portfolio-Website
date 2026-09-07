import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { technologies } from '../data/technologies';
import { useMousePosition } from '../hooks/useMousePosition';

export default function Toolkit() {
  const [hoveredId, setHoveredId] = useState(null);
  const mouse = useMousePosition();

  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 768;

  return (
    <section id="toolkit" className="toolkit">
      <div className="toolkit-header">
        <ScrollReveal>
          <div className="section-label">Technologies</div>
          <h2 className="section-title">My Toolkit.</h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'var(--text-secondary)',
            maxWidth: 280,
            lineHeight: 1.7,
            textAlign: 'right',
          }}>
            The tools I reach for when building serious mobile products.
          </p>
        </ScrollReveal>
      </div>

      <div className="toolkit-stage">
        {technologies.map((tech, i) => {
          const isHovered = hoveredId === tech.id;

          // Calculate mouse-based parallax for desktop
          const px = isDesktop
            ? ((mouse.x / window.innerWidth) - 0.5) * 28 * tech.offsetX
            : 0;
          const py = isDesktop
            ? ((mouse.y / window.innerHeight) - 0.5) * 18 * tech.offsetY
            : 0;

          return (
            <motion.div
              key={tech.id}
              className="tech-item"
              style={{
                left: tech.x,
                top: tech.y,
                transform: `translate(-50%, -50%)`,
                position: isDesktop ? 'absolute' : 'relative',
                x: px,
                y: py,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              onHoverStart={() => setHoveredId(tech.id)}
              onHoverEnd={() => setHoveredId(null)}
              data-cursor="button"
            >
              <span className="tech-item-icon">{tech.icon}</span>
              <span className="tech-item-name">{tech.name}</span>

              {isHovered && (
                <motion.div
                  className="tech-tooltip"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech.description}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
