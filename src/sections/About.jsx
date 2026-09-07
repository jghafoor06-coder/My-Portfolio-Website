import ScrollReveal from '../components/ScrollReveal';

const values = [
  'Clean, maintainable architecture',
  'Performance-first development',
  'Smooth animations and interactions',
  'Thoughtful user experience',
  'Scalable backend integration',
  'Continuous refinement and polish',
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div>
          <ScrollReveal>
            <div className="section-label">About Me</div>
            <h2 className="about-statement">
              I don't just<br />build screens.<br />
              I build products.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="about-values">
              {values.map((v, i) => (
                <div key={i} className="about-value">
                  <div className="about-value-dot" />
                  {v}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div>
          <ScrollReveal delay={150}>
            <p className="about-text">
              I care about how an app feels, performs and behaves — from the first interaction to the smallest detail. Every decision I make is guided by asking: <em>does this make the product better?</em>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="about-text">
              My focus is mobile-first. I build for Android and iOS using React Native, backed by Firebase, Supabase, Node.js or MongoDB depending on what the product actually needs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="about-text">
              I'm not interested in shipping something that barely works. I care about architecture that holds up, UIs that feel native, and code that's easy to maintain and extend as the product grows.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="about-text" style={{ marginTop: 40 }}>
              When I'm not building, I'm learning — keeping up with React Native improvements, new AI APIs, and whatever makes mobile products better.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
