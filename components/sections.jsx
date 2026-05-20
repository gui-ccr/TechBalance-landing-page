// ===== Problem section =====
function Problem() {
  const items = [
    { t: "Trabalho manual lento", d: "Tarefas repetitivas que consomem horas todos os dias da sua equipe." },
    { t: "Planilhas descentralizadas", d: "Informação espalhada, sem controle e com versões duplicadas." },
    { t: "Erros humanos custosos", d: "Pequenos enganos viram grandes prejuízos no fim do mês." },
    { t: "Decisão sem dados", d: "Sem visibilidade real do negócio, decisões viram aposta." },
  ];
  return (
    <section className="section" id="problema" style={{background:"var(--navy-950)"}}>
      <div className="container">
        <div className="section-tag reveal"><span className="eyebrow">O Problema</span></div>
        <h2 className="h-section reveal">O caos dos<br/>processos manuais.</h2>
        <p className="lead reveal" style={{maxWidth:680, marginTop:18}}>
          Muitas empresas ainda travam o próprio crescimento gastando energia com o operacional
          que deveria estar resolvido. Reconhece algum?
        </p>
        <div className="problem-grid">
          {items.map((it,i) => (
            <div className="problem-card reveal" key={i} style={{transitionDelay: (i*60)+"ms"}}>
              <div className="x"><Icon name="x" size={20} stroke={2.6}/></div>
              <h4>{it.t}</h4>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Solution split =====
function Solution() {
  return (
    <section className="section" id="solucao">
      <div className="container split">
        <div>
          <div className="section-tag reveal"><span className="eyebrow">A Solução</span></div>
          <h2 className="h-section reveal">
            Configuração <span className="gold">100% personalizada</span> para a dor real do seu negócio.
          </h2>
          <p className="lead reveal" style={{marginTop:20}}>
            Diferente de softwares genéricos, fazemos <b style={{color:"var(--text)"}}>implantação ativa</b>:
            entendemos seu gargalo principal e entregamos uma solução configurada
            especificamente para o seu modelo de operação.
          </p>
          <div className="checks reveal">
            {[
              ["Diagnóstico do gargalo","Mapeamos o ponto que mais trava o seu negócio."],
              ["Software sob medida","Código limpo, seguro e alinhado às melhores práticas globais."],
              ["Implantação dedicada","Não te deixamos sozinho com um manual — vamos junto."],
              ["Resultado imediato","Sprints curtas com entregas que já viram impacto na operação."],
            ].map(([t,d]) => (
              <div className="check" key={t}>
                <div className="ico"><Icon name="check" size={14} stroke={3} /></div>
                <span><b>{t} ·</b> {d}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="split-visual reveal">
          <SolutionFlow />
        </div>
      </div>
    </section>
  );
}

function SolutionFlow() {
  const steps = [
    { ico:"eye", t:"Diagnóstico", d:"Mapeamos o caos atual: planilhas, retrabalho, erros recorrentes." },
    { ico:"code", t:"Desenvolvimento", d:"Código sob medida para resolver exatamente o seu gargalo." },
    { ico:"rocket", t:"Implantação ativa", d:"Configuramos, treinamos e acompanhamos a equipe na transição." },
    { ico:"trending", t:"Ganho mensurável", d:"Resultados imediatos, com indicadores claros desde o sprint 1." },
  ];
  return (
    <div style={{display:"flex", flexDirection:"column", gap:14}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
        <span style={{fontFamily:"Montserrat",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",fontSize:13}}>
          Método TechBalance
        </span>
        <span style={{fontSize:11,color:"var(--text-dim)",letterSpacing:"0.16em",textTransform:"uppercase"}}>4 etapas · sprints</span>
      </div>
      {steps.map((s,i) => (
        <div key={s.t} style={{display:"flex",gap:16,alignItems:"flex-start",padding:"16px 14px",background:"rgba(255,255,255,0.025)",border:"1px solid var(--navy-line)",borderRadius:12,position:"relative"}}>
          <div style={{width:42,height:42,borderRadius:12,background:"var(--gold)",color:"var(--navy-900)",display:"grid",placeItems:"center",flex:"none"}}>
            <Icon name={s.ico} size={20} stroke={2.4}/>
          </div>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4}}>
              <span style={{fontFamily:"Montserrat",fontWeight:800,fontSize:15,letterSpacing:"0.02em"}}>{s.t}</span>
              <span style={{fontSize:10,color:"var(--text-dim)",letterSpacing:"0.18em",textTransform:"uppercase"}}>0{i+1}</span>
            </div>
            <div style={{fontSize:13,color:"var(--text-muted)",lineHeight:1.5}}>{s.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ===== Features =====
function Features() {
  const items = [
    {
      ico:"cpu",
      t:"Automação",
      d:"Substituição de processos manuais por sistemas de poucos cliques. Sua equipe foca no que importa.",
      list:["Notas fiscais em lote","Integração com fornecedores","Disparos automáticos","Workflows configuráveis"]
    },
    {
      ico:"trending",
      t:"Controle Financeiro",
      d:"Gestão de caixa, estoque, emissão de notas e relatórios de lucro num só painel.",
      list:["Fluxo de caixa em tempo real","Conciliação bancária","Relatórios de margem","Projeções e DRE simplificada"]
    },
    {
      ico:"bell",
      t:"Gestão de Serviços",
      d:"Controle de ordens de serviço, cadastros e agendamentos inteligentes integrados.",
      list:["Ordens de serviço (OS)","Agenda com confirmação","Cadastro de clientes","Histórico e SLA"]
    },
  ];
  return (
    <section className="section" id="operacao" style={{background:"var(--navy-950)"}}>
      <div className="container">
        <div className="section-tag reveal"><span className="eyebrow">Frentes de Operação</span></div>
        <h2 className="h-section reveal">Três frentes,<br/>um único painel.</h2>
        <p className="lead reveal" style={{maxWidth:680,marginTop:18}}>
          O software TechBalance é modular: contratamos só o que você precisa hoje
          e crescemos junto com o seu negócio.
        </p>
        <div className="features-grid">
          {items.map((it,i) => (
            <div className="feature reveal" key={it.t} style={{transitionDelay:(i*80)+"ms"}}>
              <div className="ico"><Icon name={it.ico} size={26}/></div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
              <ul className="list">{it.list.map(l => <li key={l}>{l}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Comparison =====
function Comparison() {
  const rows = [
    ["Agilidade","Processos manuais lentos","Automação em \"poucos cliques\""],
    ["Segurança de dados","Planilhas vulneráveis","Criptografia e confidencialidade"],
    ["Precisão","Alta margem de erro","Eliminação de erros de negócio"],
    ["Suporte","Autônomo / genérico","Implantação ativa e dedicada"],
    ["Escalabilidade","Trava no crescimento","Modular, cresce com a empresa"],
  ];
  return (
    <section className="section" id="comparativo">
      <div className="container">
        <div className="section-tag reveal"><span className="eyebrow">Tradicional vs. TechBalance</span></div>
        <h2 className="h-section reveal">O que muda<br/>no dia seguinte?</h2>
        <div className="compare reveal">
          <div className="compare-head">
            <div>Característica</div>
            <div>Método tradicional</div>
            <div className="gold">TechBalance Solutions</div>
          </div>
          {rows.map((r,i) => (
            <div className="compare-row" key={i}>
              <div className="cat">{r[0]}</div>
              <div className="trad"><span className="ico"><Icon name="x" size={12} stroke={3}/></span>{r[1]}</div>
              <div className="ours"><span className="ico"><Icon name="check" size={12} stroke={3}/></span>{r[2]}</div>
            </div>
          ))}
        </div>
        <EfficiencyBars />
      </div>
    </section>
  );
}

function EfficiencyBars() {
  const rowsRef = useRef(null);
  useEffect(() => {
    const node = rowsRef.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          node.querySelectorAll(".fill").forEach(el => {
            el.style.width = el.dataset.w + "%";
          });
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  const rows = [
    { lbl:"Processos manuais", v:30, us:false },
    { lbl:"Software genérico", v:65, us:false },
    { lbl:"TechBalance Solutions", v:95, us:true },
  ];
  return (
    <div ref={rowsRef} style={{marginTop:80}}>
      <h3 className="h-card reveal" style={{fontSize:22,marginBottom:8}}>Eficiência operacional comparada</h3>
      <p className="muted reveal" style={{maxWidth:560,marginBottom:0,fontSize:15}}>
        Otimização máxima através da configuração personalizada focada no gargalo principal.
      </p>
      <div className="eff-wrap">
        {rows.map(r => (
          <div className={`eff-row ${r.us ? "us":""} reveal`} key={r.lbl}>
            <div className="lbl">{r.lbl}</div>
            <div className="track"><div className="fill" data-w={r.v}/></div>
            <div className="pct">{r.v}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== Audience donut =====
function Audience() {
  const segs = [
    { label:"Microempresas", value:45, color:"#F5C518", desc:"MEIs e pequenas equipes buscando profissionalizar a gestão." },
    { label:"Comércios Locais", value:35, color:"#3B82F6", desc:"Lojas físicas e e-commerces precisando integrar estoque, caixa e vendas." },
    { label:"Prestadores de Serviços", value:20, color:"#22D3EE", desc:"Profissionais autônomos e clínicas que vivem de agenda e OS." },
  ];
  const total = 100, R = 70, C = 2*Math.PI*R;
  let acc = 0;
  return (
    <section className="section" id="publico" style={{background:"var(--navy-950)"}}>
      <div className="container">
        <div className="section-tag reveal"><span className="eyebrow">Público-alvo</span></div>
        <h2 className="h-section reveal">Pra quem<br/>a gente entrega.</h2>
        <div className="audience-grid">
          <div className="donut-wrap reveal">
            <div className="donut">
              <svg viewBox="0 0 200 200" style={{transform:"rotate(-90deg)"}}>
                <circle cx="100" cy="100" r={R} fill="none" stroke="var(--navy-line)" strokeWidth="22"/>
                {segs.map((s,i) => {
                  const dash = (s.value/total) * C;
                  const offset = (acc/total) * C;
                  acc += s.value;
                  return (
                    <circle key={i} cx="100" cy="100" r={R} fill="none"
                      stroke={s.color} strokeWidth="22"
                      strokeDasharray={`${dash} ${C-dash}`}
                      strokeDashoffset={-offset}
                      style={{transition:"stroke-dasharray 1.2s ease"}}
                    />
                  );
                })}
              </svg>
              <div className="center">
                <div>
                  <div className="num">100%</div>
                  <div className="lbl">SMBs Brasil</div>
                </div>
              </div>
            </div>
          </div>
          <div className="legend">
            {segs.map(s => (
              <div className="legend-item reveal" key={s.label}>
                <div className="swatch" style={{background:s.color}}/>
                <div className="info">
                  <h5>{s.label}</h5>
                  <p>{s.desc}</p>
                </div>
                <div className="pct">{s.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Mission, Vision, Values =====
function MissionVision() {
  return (
    <section className="section" id="essencia">
      <div className="container">
        <div className="section-tag reveal"><span className="eyebrow">Nossa essência</span></div>
        <h2 className="h-section reveal">Transformando desafios complexos<br/>em <span className="gold">soluções digitais.</span></h2>
        <div className="mv-grid reveal" style={{marginTop:50}}>
          <div className="mv-card">
            <div className="ico"><Icon name="rocket" size={26}/></div>
            <h3>Missão</h3>
            <p>Traduzir desafios de negócios complexos em <b>códigos eficientes</b>, desenvolvendo softwares sob medida que impulsionam a produtividade e a segurança dos nossos parceiros.</p>
          </div>
          <div className="mv-card">
            <div className="ico"><Icon name="eye" size={26}/></div>
            <h3>Visão</h3>
            <p>Estar entre as <b>5 principais referências</b> em desenvolvimento sob medida do estado, atendendo grandes projetos nacionais e internacionais com excelência técnica.</p>
          </div>
        </div>

        <div style={{marginTop:60}} className="reveal">
          <h3 className="h-card" style={{fontSize:18,letterSpacing:"0.14em",color:"var(--gold)",marginBottom:18}}>Valores inegociáveis</h3>
        </div>
        <div className="values-grid">
          {[
            { ico:"code", t:"Excelência técnica", d:"Código limpo, seguro e alinhado às melhores práticas globais de desenvolvimento." },
            { ico:"shield", t:"Confidencialidade", d:"Proteção total aos dados e segredos de negócio dos nossos clientes." },
            { ico:"clock", t:"Pontualidade", d:"Cumprimento rigoroso dos prazos de entrega em cada módulo (sprints)." },
          ].map((v,i) => (
            <div className="value-card reveal" key={v.t} style={{transitionDelay:(i*80)+"ms"}}>
              <div className="ico"><Icon name={v.ico} size={24}/></div>
              <h4>{v.t}</h4>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Team (academic) =====
function Team() {
  const groups = [
    {
      role: "Tech Lead",
      sub: "Liderança técnica & fullstack",
      ico: "rocket",
      desc: "Define a stack tecnológica, realiza code reviews e desenvolve os módulos críticos: motor de autenticação, lógica de balanceamento contábil e resolução de bloqueios técnicos (bugs complexos).",
      members: ["Guilherme de Carvalho Cardoso Rodrigues"],
    },
    {
      role: "Product Owner & Analista de Negócio Contábil",
      sub: "Tradução de regras contábeis para requisitos técnicos",
      ico: "eye",
      desc: "Traduz as normas contábeis para requisitos técnicos, prototipa as interfaces (Figma/Wireframes), redige a documentação acadêmica e valida se os cálculos do sistema estão corretos.",
      members: ["Igor Gomes Quaresma", "Wellington Junior Moreira Da Cruz"],
    },
    {
      role: "DBA · Database Admin",
      sub: "Banco de dados & segurança",
      ico: "stack",
      desc: "Gerencia a instância no Supabase. Responsável pela criação de tabelas, relacionamentos, Views para relatórios financeiros, Procedures e políticas de segurança de linha (RLS).",
      members: ["Thalys Georgys Fernandes Souza"],
    },
    {
      role: "Desenvolvedores Back-end",
      sub: "API, integração e fluxo de dados",
      ico: "cpu",
      desc: "Desenvolve as rotas da API, integra o servidor com o Supabase e garante que o fluxo de dados entre o banco e o cliente seja performático e seguro.",
      members: ["João Pedro Matos Tameirão", "Bruna Mossen Rios", "Wesley Gonçalves Pereira"],
    },
    {
      role: "Desenvolvedores Front-end",
      sub: "Interface, responsividade & consumo de API",
      ico: "code",
      desc: "Transforma os protótipos do PO em código (HTML/CSS/React/etc), garante a responsividade e consome a API do Back-end para exibir os dados contábeis de forma clara.",
      members: ["Davi Pereira Dutra", "João Antonio Vieira Baldow", "Júlio Cézar Oliveira de Souza"],
    },
    {
      role: "QA, Documentação & Apresentação",
      sub: "Testes, manuais e banca",
      ico: "shield",
      desc: "Executa testes unitários e de integração, redige manuais de uso, organiza a documentação técnica do projeto e estrutura a apresentação final para a banca/professora.",
      members: ["Milena Ferreira da Silva", "Igor Silva Mendes"],
    },
  ];
  const initials = (n) => {
    const parts = n.split(" ").filter(w => w.length > 2 && !["da","de","do","das","dos"].includes(w.toLowerCase()));
    return ((parts[0]?.[0] || "") + (parts[parts.length-1]?.[0] || "")).toUpperCase();
  };
  const totalMembers = groups.reduce((s,g) => s + g.members.length, 0);
  return (
    <section className="section" id="equipe" style={{background:"var(--navy-950)"}}>
      <div className="container">
        <div className="section-tag reveal"><span className="eyebrow">Equipe acadêmica</span></div>
        <h2 className="h-section reveal">Conheça o<br/>time <span className="gold">Focus.</span></h2>
        <p className="lead reveal" style={{maxWidth:680,marginTop:18}}>
          A TechBalance Solutions é um projeto desenvolvido para a disciplina de
          Contabilidade. Conheça os {totalMembers} integrantes do time Focus e suas responsabilidades.
        </p>

        <div className="team-section">
          {groups.map((g, gi) => (
            <div className="team-group reveal" key={g.role} data-count={g.members.length} style={{transitionDelay:(gi*60)+"ms"}}>
              <div className="team-group-head">
                <div className="team-group-ico"><Icon name={g.ico} size={20} stroke={2.2}/></div>
                <div className="team-group-titles">
                  <div className="team-group-name">{g.role}</div>
                  <div className="team-group-sub">{g.sub}</div>
                </div>
                <div className="team-group-count">{String(g.members.length).padStart(2,"0")}</div>
              </div>
              <p className="team-group-desc">{g.desc}</p>
              <div className="team-members-grid" style={{gridTemplateColumns: `repeat(${Math.min(g.members.length, 3)}, minmax(0,1fr))`}}>
                {g.members.map(m => (
                  <div className="team-member" key={m}>
                    <div className="team-avatar">{initials(m)}</div>
                    <div className="team-member-name">{m}</div>
                    <div className="team-member-role">{g.role.split("·")[0].split("&")[0].trim()}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Problem = Problem;
window.Solution = Solution;
window.Features = Features;
window.Comparison = Comparison;
window.Audience = Audience;
window.MissionVision = MissionVision;
window.Team = Team;
