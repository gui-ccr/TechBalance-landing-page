function Contact() {
  const [data, setData] = useState({ name:"", email:"", company:"", segment:"Microempresa", message:"" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setData(d => ({...d, [k]: e.target.value}));

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!data.name.trim()) errs.name = "Informe seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "E-mail inválido.";
    if (!data.message.trim() || data.message.length < 10) errs.message = "Conte um pouco mais (min. 10 caracteres).";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 900));
    setSending(false);
    setSent(true);
  };

  return (
    <section className="section" id="contato">
      <div className="container contact-grid">
        <div>
          <div className="section-tag reveal"><span className="eyebrow">Vamos conversar</span></div>
          <h2 className="h-section reveal">Estamos prontos para<br/><span className="gold">equilibrar o seu futuro.</span></h2>
          <p className="lead reveal" style={{marginTop:18,maxWidth:520}}>
            Conta pra gente o gargalo principal do seu negócio. Em até 1 dia útil
            retornamos com um diagnóstico inicial — sem custo.
          </p>
          <div className="contact-cards reveal">
            <a className="contact-card" href="mailto:contato@techbalance.com.br">
              <div className="ico"><Icon name="mail" size={20}/></div>
              <div>
                <div className="lbl">E-mail</div>
                <div className="val">contato@techbalance.com.br</div>
              </div>
            </a>
            <a className="contact-card" href="https://www.techbalance.com.br" target="_blank" rel="noreferrer">
              <div className="ico"><Icon name="globe" size={20}/></div>
              <div>
                <div className="lbl">Site</div>
                <div className="val">www.techbalance.com.br</div>
              </div>
            </a>
            <a className="contact-card" href="#">
              <div className="ico"><Icon name="phone" size={20}/></div>
              <div>
                <div className="lbl">WhatsApp</div>
                <div className="val">(11) 9 9999-9999</div>
              </div>
            </a>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={submit} noValidate>
          {sent ? (
            <div className="form-success">
              <div className="ico"><Icon name="check" size={20} stroke={3}/></div>
              <div>
                <h4>Recebemos sua mensagem!</h4>
                <p>Em até 1 dia útil um especialista da Focus Team retorna com o diagnóstico inicial.</p>
              </div>
            </div>
          ) : (
            <>
              <h3>Solicitar diagnóstico</h3>
              <p>Preencha os campos abaixo. Levamos a sério.</p>

              <div className={`field ${errors.name?"error":""}`}>
                <label htmlFor="f-name">Nome completo</label>
                <input id="f-name" value={data.name} onChange={set("name")} placeholder="Como devemos te chamar?" />
                {errors.name && <span className="err">{errors.name}</span>}
              </div>

              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                <div className={`field ${errors.email?"error":""}`}>
                  <label htmlFor="f-email">E-mail</label>
                  <input id="f-email" type="email" value={data.email} onChange={set("email")} placeholder="voce@empresa.com" />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="f-company">Empresa</label>
                  <input id="f-company" value={data.company} onChange={set("company")} placeholder="Nome da empresa" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="f-seg">Segmento</label>
                <select id="f-seg" value={data.segment} onChange={set("segment")}>
                  <option>Microempresa</option>
                  <option>Comércio local</option>
                  <option>Prestador de serviços</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className={`field ${errors.message?"error":""}`}>
                <label htmlFor="f-msg">Qual o gargalo principal?</label>
                <textarea id="f-msg" rows="4" value={data.message} onChange={set("message")} placeholder="Ex.: gasto 4h por dia conferindo planilhas de estoque..."/>
                {errors.message && <span className="err">{errors.message}</span>}
              </div>

              <button className="btn btn-primary" type="submit" disabled={sending} style={{width:"100%",justifyContent:"center"}}>
                {sending ? "Enviando…" : <>Solicitar diagnóstico <Icon name="arrow-right" size={16} stroke={2.4} className="btn-arrow"/></>}
              </button>
              <div style={{textAlign:"center",fontSize:12,color:"var(--text-dim)",marginTop:14}}>
                Resposta em até 1 dia útil · seus dados ficam só com a gente.
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section" style={{paddingTop:0}}>
      <div className="container">
        <div style={{
          background:"linear-gradient(135deg, var(--navy-800), var(--navy-700) 60%, var(--navy-900))",
          border:"1px solid var(--navy-line)",
          borderRadius:24,
          padding:"clamp(40px,5vw,72px)",
          display:"grid",
          gridTemplateColumns:"1.4fr 1fr",
          gap:40, alignItems:"center",
          position:"relative", overflow:"hidden"
        }} className="reveal">
          <div style={{position:"absolute",inset:0,background:"radial-gradient(600px 300px at 90% 30%, rgba(245,197,24,0.15), transparent 70%)",pointerEvents:"none"}}/>
          <div style={{position:"relative"}}>
            <span className="eyebrow">Pronto pra equilibrar?</span>
            <h2 className="h-section" style={{marginTop:14}}>
              Não entregamos só código.<br/>
              <span className="gold">Entregamos solução configurada.</span>
            </h2>
            <p className="lead" style={{marginTop:18,maxWidth:560}}>
              Pare de perder horas no operacional. Vamos juntos do diagnóstico
              à entrega — focado no gargalo real, com resultado mensurável.
            </p>
          </div>
          <div style={{position:"relative",display:"flex",flexDirection:"column",gap:12}}>
            <a href="#contato" className="btn btn-primary" style={{justifyContent:"center"}}>
              Solicitar diagnóstico <Icon name="arrow-right" size={16} stroke={2.4} className="btn-arrow"/>
            </a>
            <a href="mailto:contato@techbalance.com.br" className="btn btn-ghost" style={{justifyContent:"center"}}>
              <Icon name="mail" size={16}/> Falar por e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand brand-xl" style={{marginBottom:10}}>
              <img src="assets/logo-mark.png" alt="TechBalance"/>
              <div className="brand-text">
                <div className="top">Tech<b>Balance</b></div>
                <div className="sub">Solutions · Focus Team</div>
              </div>
            </a>
            <p>Inovação em software para gestão e automação. Transformando desafios complexos em soluções digitais que equilibram e impulsionam o seu negócio.</p>
          </div>
          <div className="footer-col">
            <h5>Empresa</h5>
            <ul>
              <li><a href="#solucao">A solução</a></li>
              <li><a href="#operacao">Frentes de operação</a></li>
              <li><a href="#essencia">Missão e valores</a></li>
              <li><a href="#publico">Público-alvo</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Soluções</h5>
            <ul>
              <li><a href="#operacao">Automação</a></li>
              <li><a href="#operacao">Controle financeiro</a></li>
              <li><a href="#operacao">Gestão de serviços</a></li>
              <li><a href="#comparativo">Por que TechBalance</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contato</h5>
            <ul>
              <li><a href="mailto:contato@techbalance.com.br">contato@techbalance.com.br</a></li>
              <li><a href="https://www.techbalance.com.br">www.techbalance.com.br</a></li>
              <li><a href="#contato">Solicitar diagnóstico</a></li>
            </ul>
            <div style={{display:"flex",gap:10,marginTop:18}}>
              <a href="#" aria-label="LinkedIn" style={{width:38,height:38,borderRadius:10,background:"var(--navy-card)",border:"1px solid var(--navy-line)",display:"grid",placeItems:"center",color:"var(--text-muted)"}}><Icon name="linkedin" size={16}/></a>
              <a href="#" aria-label="Instagram" style={{width:38,height:38,borderRadius:10,background:"var(--navy-card)",border:"1px solid var(--navy-line)",display:"grid",placeItems:"center",color:"var(--text-muted)"}}><Icon name="instagram" size={16}/></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 TechBalance Solutions · Focus Team. Todos os direitos reservados.</div>
          <div style={{display:"flex",gap:18}}>
            <a href="#">Política de privacidade</a>
            <a href="#">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Contact = Contact;
window.CTA = CTA;
window.Footer = Footer;
