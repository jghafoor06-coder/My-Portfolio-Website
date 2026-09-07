import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { projects } from '../data/projects';

function PhoneMockup({ color = '#c8f542', screenType = 'a' }) {
  const bars = screenType === 'a'
    ? ['accent', 'short', 'medium', 'medium', 'short']
    : ['short', 'accent', 'medium', 'short', 'medium'];

  return (
    <div className="phone-frame" style={{ borderColor: `${color}18` }}>
      <div className="phone-screen">
        {bars.map((b, i) => (
          <div key={i} className={`phone-ui-bar ${b}`} style={b === 'accent' ? { background: `${color}18`, borderColor: `${color}30` } : {}} />
        ))}
        <div className="phone-ui-block" />
        <div className="phone-ui-block accent-block" style={{ background: `${color}10`, borderColor: `${color}25` }} />
      </div>
    </div>
  );
}

export default function Work() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="work" className="work">
      <div className="work-header">
        <ScrollReveal>
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">
            Products<br />I've Built.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="work-subtitle">
            A look at the mobile products I've built — each one crafted to solve a real problem with real care.
          </p>
        </ScrollReveal>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-item"
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId(null)}
            data-cursor="view"
          >
            <div className="project-item-left">
              <div>
                <ScrollReveal delay={index * 60}>
                  <div className="project-num">Project {project.id} — {project.category}</div>
                </ScrollReveal>
                <ScrollReveal delay={index * 60 + 60}>
                  <h3 className="project-name">{project.name}</h3>
                </ScrollReveal>
                <ScrollReveal delay={index * 60 + 100}>
                  <p className="project-desc">{project.description}</p>
                </ScrollReveal>
                <ScrollReveal delay={index * 60 + 130}>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={index * 60 + 160}>
                <button className="project-link" data-cursor="button">
                  View Case Study
                  <ArrowUpRight size={14} />
                </button>
              </ScrollReveal>
            </div>

            <div className="project-item-right">
              <motion.div
                className="phone-mockup-wrap"
                animate={{
                  y: hoveredId === project.id ? -8 : 0,
                  rotate: hoveredId === project.id ? 2 : 0,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <PhoneMockup color={project.color} screenType={index % 2 === 0 ? 'a' : 'b'} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
