import ScrollReveal from '../components/ScrollReveal';

const steps = [
  {
    num: '01',
    title: 'UNDERSTAND',
    text: 'Understand the idea, the users and the problem being solved. No assumptions.',
  },
  {
    num: '02',
    title: 'PLAN',
    text: 'Define the product flow, information architecture and technical direction.',
  },
  {
    num: '03',
    title: 'DESIGN',
    text: 'Create a clear, polished mobile experience — intentional, not decorative.',
  },
  {
    num: '04',
    title: 'BUILD',
    text: 'Develop the Android and iOS application with clean, maintainable code.',
  },
  {
    num: '05',
    title: 'REFINE',
    text: 'Performance tuning, animations, edge cases and the kind of polish that matters.',
  },
  {
    num: '06',
    title: 'SHIP',
    text: 'Prepare the product for real users — app store submission, monitoring and handoff.',
  },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="process-header">
        <ScrollReveal>
          <div className="section-label">How I Work</div>
          <h2 className="section-title">The Process.</h2>
        </ScrollReveal>
      </div>

      <div className="process-list">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 60}>
            <div className="process-step">
              <div className="process-num">{step.num}</div>
              <div>
                <div className="process-step-title">{step.title}</div>
                <p className="process-step-text">{step.text}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
