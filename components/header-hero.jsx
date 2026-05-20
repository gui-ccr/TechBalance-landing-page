const { useState, useEffect, useRef } = React;

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav">
        <a href="#top" className="brand brand-lg" onClick={close}>
          <img src="assets/logo-mark.png" alt="TechBalance" className="" />
          <div className="brand-text">
            <div className="top">Tech<b>Balance</b></div>
            <div className="sub">Solutions · Focus Team</div>
          </div>
        </a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#solucao" onClick={close}>Solução</a>
          <a href="#operacao" onClick={close}>Operação</a>
          <a href="#comparativo" onClick={close}>Comparativo</a>
          <a href="#publico" onClick={close}>Público-alvo</a>
          <a href="#equipe" onClick={close}>Equipe</a>
          <a href="#contato" className="btn btn-primary" onClick={close} style={{padding: "10px 20px", fontSize: 12}}>
            Falar com a equipe <Icon name="arrow-right" size={14} stroke={2.4} />
          </a>
        </nav>
        <button className="mobile-toggle" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <Icon name={open ? "x" : "menu"} size={22} />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero hero-solo">
      <div className="container">
        <div className="hero-content">
          <div className="hero-pill reveal">
            <span className="dot"></span> Inovação em Software para Gestão e Automação
          </div>
          <h1 className="h-display reveal">
            Transformamos o <span className="accent">caos manual</span><br/>
            em decisões inteligentes.
          </h1>
          <p className="lead reveal">
            Softwares <b style={{color:"var(--text)"}}>100% personalizados</b> para microempresas,
            comércios locais e prestadores de serviços. Implantação ativa,
            código limpo e foco no gargalo real do seu negócio.
          </p>
          <div className="hero-cta reveal">
            <a href="#contato" className="btn btn-primary">
              Solicitar diagnóstico <Icon name="arrow-right" size={16} stroke={2.4} className="btn-arrow" />
            </a>
            <a href="#solucao" className="btn btn-ghost">
              <Icon name="play" size={14} /> Ver a solução
            </a>
          </div>
          <div className="hero-stats reveal">
            <div className="hero-stat">
              <div className="num">95<span style={{fontSize:18}}>%</span></div>
              <div className="lbl">Eficiência operacional</div>
            </div>
            <div className="hero-stat">
              <div className="num">100<span style={{fontSize:18}}>%</span></div>
              <div className="lbl">Configuração sob medida</div>
            </div>
            <div className="hero-stat">
              <div className="num">+3</div>
              <div className="lbl">Frentes de operação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Header = Header;
window.Hero = Hero;
window.useReveal = useReveal;
