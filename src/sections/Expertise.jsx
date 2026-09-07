import { Smartphone, Layers, Database, Cpu } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const items = [
  {
    num: '01',
    icon: Smartphone,
    title: 'Mobile App Development',
    text: 'Android and iOS applications built with React Native — one codebase, two polished platforms.',
    more: 'From authentication flows to complex state management, offline support, push notifications, and native API integration.',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Product Experiences',
    text: 'Clean, thoughtful and polished mobile interfaces that feel native and perform fast.',
    more: 'Pixel-perfect layouts, smooth transitions, gesture handling, and interaction design that feels right on both platforms.',
  },
  {
    num: '03',
    icon: Database,
    title: 'Backend & Cloud',
    text: 'Firebase, Supabase, Node.js and MongoDB — scalable backends built for real mobile workloads.',
    more: 'REST APIs, real-time subscriptions, auth systems, cloud storage, and serverless functions.',
  },
  {
    num: '04',
    icon: Cpu,
    title: 'AI-Powered Apps',
    text: 'Integrating AI capabilities into useful, practical mobile products.',
    more: 'LLM integrations, intelligent recommendations, natural language interfaces, and computer vision — built into the mobile experience.',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="expertise">
      <div className="expertise-header">
        <ScrollReveal>
          <div className="section-label">What I Build</div>
          <h2 className="section-title">
            Specialisations.
          </h2>
        </ScrollReveal>
      </div>

      <div className="expertise-grid">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.num} delay={i * 80}>
              <div className="expertise-item">
                <div className="expertise-number">{item.num}</div>
                <div className="expertise-icon">
                  <Icon size={18} />
                </div>
                <h3 className="expertise-title">{item.title}</h3>
                <p className="expertise-text">{item.text}</p>
                <p className="expertise-more">{item.more}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
