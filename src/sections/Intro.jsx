import ScrollReveal from '../components/ScrollReveal';

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <ScrollReveal>
        <h2 className="intro-headline">
          FROM IDEA<br />
          <span className="outline-text">TO APP STORE.</span>
        </h2>
      </ScrollReveal>

      <div className="intro-body">
        <ScrollReveal delay={100}>
          <p className="intro-text">
            I build mobile experiences <span className="intro-highlight">from concept to production</span> — combining thoughtful UI, reliable architecture, smooth interactions and modern technologies to create apps that{' '}
            <span className="intro-highlight">work beautifully on both Android and iOS.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="intro-text">
            Every app starts with understanding the problem deeply. Then comes architecture that scales, interfaces that feel right, and code that your future self won't regret.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
