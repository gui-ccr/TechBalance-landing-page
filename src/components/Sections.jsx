import { useEffect, useRef } from 'react'
import Icon from './Icon.jsx'

// ── shared primitives ──────────────────────────────────────────────────────────
const Cn  = ({ children, className = '' }) => (
  <div className={`w-full max-w-[1240px] mx-auto px-7 ${className}`}>{children}</div>
)
const Sec = ({ id, dark, children, className = '' }) => (
  <section
    id={id}
    className={`py-[clamp(72px,9vw,130px)] relative ${dark ? 'bg-navy-950' : ''} ${className}`}
  >
    {children}
  </section>
)
function SectionTag({ children }) {
  return (
    <div className="reveal inline-flex items-center gap-3.5 mb-[22px]
      before:content-[''] before:block before:w-[38px] before:h-[3px] before:bg-gold before:shrink-0">
      <span className="font-display font-bold tracking-[0.22em] uppercase text-[13px] text-gold">
        {children}
      </span>
    </div>
  )
}

// ── Problem ────────────────────────────────────────────────────────────────────
export function Problem() {
  const items = [
    { t: 'Trabalho manual lento',     d: 'Tarefas repetitivas que consomem horas todos os dias da sua equipe.' },
    { t: 'Planilhas descentralizadas', d: 'Informação espalhada, sem controle e com versões duplicadas.' },
    { t: 'Erros humanos custosos',     d: 'Pequenos enganos viram grandes prejuízos no fim do mês.' },
    { t: 'Decisão sem dados',          d: 'Sem visibilidade real do negócio, decisões viram aposta.' },
  ]
  return (
    <Sec id="problema" dark>
      <Cn>
        <SectionTag>O Problema</SectionTag>
        <h2 className="reveal font-display font-black tracking-[-0.01em] leading-[1.02] uppercase
          text-[clamp(30px,4vw,52px)]">
          O caos dos<br />processos manuais.
        </h2>
        <p className="reveal text-text-muted text-[clamp(16px,1.3vw,19px)] leading-relaxed
          max-w-[680px] mt-[18px]">
          Muitas empresas ainda travam o próprio crescimento gastando energia com o operacional
          que deveria estar resolvido. Reconhece algum?
        </p>
        <div className="grid grid-cols-4 gap-[18px] mt-12 max-md:grid-cols-2 max-sm:grid-cols-1">
          {items.map((it, i) => (
            <div
              key={i}
              className="reveal bg-navy-card border border-navy-line rounded-[14px] p-[26px]
                hover:-translate-y-1.5 hover:bg-navy-card-hover transition-all duration-300"
              style={{ transitionDelay: i * 60 + 'ms' }}
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-red-500/[0.12] text-red-500
                grid place-items-center mb-[18px]">
                <Icon name="x" size={20} stroke={2.6} />
              </div>
              <h4 className="font-display font-bold text-[16px] leading-[1.25] mb-2">{it.t}</h4>
              <p className="text-[14px] text-text-muted leading-[1.55] m-0">{it.d}</p>
            </div>
          ))}
        </div>
      </Cn>
    </Sec>
  )
}

// ── Solution ───────────────────────────────────────────────────────────────────
function SolutionFlow() {
  const steps = [
    { ico: 'eye',      t: 'Diagnóstico',       d: 'Mapeamos o caos atual: planilhas, retrabalho, erros recorrentes.' },
    { ico: 'code',     t: 'Desenvolvimento',   d: 'Código sob medida para resolver exatamente o seu gargalo.' },
    { ico: 'rocket',   t: 'Implantação ativa', d: 'Configuramos, treinamos e acompanhamos a equipe na transição.' },
    { ico: 'trending', t: 'Ganho mensurável',  d: 'Resultados imediatos, com indicadores claros desde o sprint 1.' },
  ]
  return (
    <div className="solution-card p-7 bg-gradient-to-br from-navy-800 to-navy-950
      border border-navy-line rounded-[22px] flex flex-col gap-3.5">
      <div className="flex justify-between items-center mb-1">
        <span className="font-display font-extrabold tracking-[0.1em] uppercase text-[13px]">
          Método TechBalance
        </span>
        <span className="text-[11px] text-text-dim tracking-[0.16em] uppercase">
          4 etapas · sprints
        </span>
      </div>
      {steps.map((s, i) => (
        <div
          key={s.t}
          className="flex gap-4 items-start p-[16px_14px] bg-white/[0.025] border border-navy-line rounded-[12px]"
        >
          <div className="w-[42px] h-[42px] rounded-[12px] bg-gold text-navy-900
            grid place-items-center shrink-0">
            <Icon name={s.ico} size={20} stroke={2.4} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-1">
              <span className="font-display font-extrabold text-[15px] tracking-[0.02em]">{s.t}</span>
              <span className="text-[10px] text-text-dim tracking-[0.18em] uppercase">0{i + 1}</span>
            </div>
            <p className="text-[13px] text-text-muted leading-[1.5] m-0">{s.d}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function Solution() {
  return (
    <Sec id="solucao">
      <Cn className="grid grid-cols-2 gap-[70px] items-center max-md:grid-cols-1">
        <div>
          <SectionTag>A Solução</SectionTag>
          <h2 className="reveal font-display font-black tracking-[-0.01em] leading-[1.02] uppercase
            text-[clamp(30px,4vw,52px)]">
            Configuração <span className="text-gold">100% personalizada</span> para a dor real do seu negócio.
          </h2>
          <p className="reveal text-text-muted text-[clamp(16px,1.3vw,19px)] leading-relaxed mt-5">
            Diferente de softwares genéricos, fazemos{' '}
            <b className="text-white">implantação ativa</b>: entendemos seu gargalo principal e
            entregamos uma solução configurada especificamente para o seu modelo de operação.
          </p>
          <div className="reveal flex flex-col gap-4 mt-7">
            {[
              ['Diagnóstico do gargalo', 'Mapeamos o ponto que mais trava o seu negócio.'],
              ['Software sob medida',    'Código limpo, seguro e alinhado às melhores práticas globais.'],
              ['Implantação dedicada',   'Não te deixamos sozinho com um manual — vamos junto.'],
              ['Resultado imediato',     'Sprints curtas com entregas que já viram impacto na operação.'],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3.5 items-start">
                <div className="shrink-0 w-[26px] h-[26px] rounded-[7px] bg-gold text-navy-900 grid place-items-center">
                  <Icon name="check" size={14} stroke={3} />
                </div>
                <span className="text-text-muted leading-[1.5]">
                  <b className="text-white font-bold">{t} ·</b> {d}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal">
          <SolutionFlow />
        </div>
      </Cn>
    </Sec>
  )
}

// ── Features ───────────────────────────────────────────────────────────────────
export function Features() {
  const items = [
    {
      ico: 'cpu', t: 'Automação',
      d: 'Substituição de processos manuais por sistemas de poucos cliques. Sua equipe foca no que importa.',
      list: ['Notas fiscais em lote', 'Integração com fornecedores', 'Disparos automáticos', 'Workflows configuráveis'],
    },
    {
      ico: 'trending', t: 'Controle Financeiro',
      d: 'Gestão de caixa, estoque, emissão de notas e relatórios de lucro num só painel.',
      list: ['Fluxo de caixa em tempo real', 'Conciliação bancária', 'Relatórios de margem', 'Projeções e DRE simplificada'],
    },
    {
      ico: 'bell', t: 'Gestão de Serviços',
      d: 'Controle de ordens de serviço, cadastros e agendamentos inteligentes integrados.',
      list: ['Ordens de serviço (OS)', 'Agenda com confirmação', 'Cadastro de clientes', 'Histórico e SLA'],
    },
  ]
  return (
    <Sec id="operacao" dark>
      <Cn>
        <SectionTag>Frentes de Operação</SectionTag>
        <h2 className="reveal font-display font-black tracking-[-0.01em] leading-[1.02] uppercase
          text-[clamp(30px,4vw,52px)]">
          Três frentes,<br />um único painel.
        </h2>
        <p className="reveal text-text-muted text-[clamp(16px,1.3vw,19px)] leading-relaxed
          max-w-[680px] mt-[18px]">
          O software TechBalance é modular: contratamos só o que você precisa hoje e crescemos
          junto com o seu negócio.
        </p>
        <div className="grid grid-cols-3 gap-[22px] mt-14 max-md:grid-cols-1">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="reveal bg-navy-card border border-navy-line rounded-[14px] p-[36px_30px]
                relative overflow-hidden transition-all duration-300
                hover:-translate-y-2 hover:bg-navy-card-hover
                after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px]
                after:bg-gold after:scale-x-0 after:origin-left hover:after:scale-x-100
                after:transition-transform after:duration-[350ms]"
              style={{ transitionDelay: i * 80 + 'ms' }}
            >
              <div className="w-[54px] h-[54px] rounded-[14px] bg-gold/[0.12] text-gold
                grid place-items-center mb-[22px]">
                <Icon name={it.ico} size={26} />
              </div>
              <h3 className="font-display font-extrabold text-[20px] mb-3">{it.t}</h3>
              <p className="text-text-muted leading-relaxed text-[15px] mb-5">{it.d}</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {it.list.map((l) => (
                  <li
                    key={l}
                    className="text-[13px] text-text-muted pl-[22px] relative
                      before:content-[''] before:absolute before:left-0 before:top-[7px]
                      before:w-[12px] before:h-[2px] before:bg-gold"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Cn>
    </Sec>
  )
}

// ── Comparison ─────────────────────────────────────────────────────────────────
function EfficiencyBars() {
  const rowsRef = useRef(null)
  useEffect(() => {
    const node = rowsRef.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            node.querySelectorAll('.fill-bar').forEach((el) => {
              el.style.width = el.dataset.w + '%'
            })
            io.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  const rows = [
    { lbl: 'Processos manuais',    v: 30,  us: false },
    { lbl: 'Software genérico',    v: 65,  us: false },
    { lbl: 'TechBalance Solutions', v: 95, us: true  },
  ]
  return (
    <div ref={rowsRef} className="mt-20">
      <h3 className="reveal font-display font-extrabold tracking-[0.02em] uppercase text-[22px] mb-2">
        Eficiência operacional comparada
      </h3>
      <p className="reveal text-text-muted max-w-[560px] text-[15px]">
        Otimização máxima através da configuração personalizada focada no gargalo principal.
      </p>
      <div className="mt-14 flex flex-col gap-[26px]">
        {rows.map((r) => (
          <div
            key={r.lbl}
            className={`reveal grid gap-6 items-center
              grid-cols-[220px_1fr_60px] max-md:grid-cols-[120px_1fr_50px]`}
          >
            <div className={`font-display font-bold text-[14px] tracking-[0.04em] uppercase
              ${r.us ? 'text-gold' : ''}`}>
              {r.lbl}
            </div>
            <div className="h-[22px] bg-navy-card rounded-full overflow-hidden border border-navy-line">
              <div className="fill-bar" data-w={r.v} />
            </div>
            <div className={`font-display font-black text-[20px] text-right
              ${r.us ? 'text-gold' : ''}`}>
              {r.v}%
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Comparison() {
  const rows = [
    ['Agilidade',        'Processos manuais lentos',  'Automação em "poucos cliques"'      ],
    ['Segurança de dados','Planilhas vulneráveis',    'Criptografia e confidencialidade'    ],
    ['Precisão',         'Alta margem de erro',        'Eliminação de erros de negócio'     ],
    ['Suporte',          'Autônomo / genérico',        'Implantação ativa e dedicada'        ],
    ['Escalabilidade',   'Trava no crescimento',       'Modular, cresce com a empresa'       ],
  ]
  return (
    <Sec id="comparativo">
      <Cn>
        <SectionTag>Tradicional vs. TechBalance</SectionTag>
        <h2 className="reveal font-display font-black tracking-[-0.01em] leading-[1.02] uppercase
          text-[clamp(30px,4vw,52px)]">
          O que muda<br />no dia seguinte?
        </h2>

        {/* Table */}
        <div className="reveal mt-[50px] rounded-[22px] overflow-hidden
          bg-navy-card border border-navy-line">
          {/* Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-gradient-to-r from-navy-800 to-navy-700
            border-b-2 border-gold max-sm:grid-cols-1">
            {['Característica', 'Método tradicional', 'TechBalance Solutions'].map((h, i) => (
              <div
                key={h}
                className={`px-[26px] py-[22px] font-display font-extrabold tracking-[0.08em]
                  uppercase text-[13px] max-sm:border-t max-sm:first:border-t-0 max-sm:border-navy-line
                  ${i === 2 ? 'text-gold' : ''}`}
              >
                {h}
              </div>
            ))}
          </div>
          {/* Rows */}
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-[1.2fr_1fr_1fr] border-t border-navy-line max-sm:grid-cols-1"
            >
              <div className="px-[26px] py-[22px] font-bold text-[15px] flex items-center gap-2.5
                max-sm:border-t max-sm:first:border-t-0 max-sm:border-navy-line">
                {r[0]}
              </div>
              <div className="px-[26px] py-[22px] text-text-muted text-[15px] flex items-center gap-2.5">
                <span className="w-[22px] h-[22px] rounded-full bg-red-500/[0.18] text-red-500
                  grid place-items-center shrink-0">
                  <Icon name="x" size={12} stroke={3} />
                </span>
                {r[1]}
              </div>
              <div className="px-[26px] py-[22px] text-white font-semibold text-[15px] flex items-center gap-2.5">
                <span className="w-[22px] h-[22px] rounded-full bg-gold text-navy-900
                  grid place-items-center shrink-0">
                  <Icon name="check" size={12} stroke={3} />
                </span>
                {r[2]}
              </div>
            </div>
          ))}
        </div>

        <EfficiencyBars />
      </Cn>
    </Sec>
  )
}

// ── Audience ───────────────────────────────────────────────────────────────────
export function Audience() {
  const segs = [
    { label: 'Microempresas',           value: 45, color: '#F5C518', desc: 'MEIs e pequenas equipes buscando profissionalizar a gestão.' },
    { label: 'Comércios Locais',        value: 35, color: '#3B82F6', desc: 'Lojas físicas e e-commerces precisando integrar estoque, caixa e vendas.' },
    { label: 'Prestadores de Serviços', value: 20, color: '#22D3EE', desc: 'Profissionais autônomos e clínicas que vivem de agenda e OS.' },
  ]
  const total = 100, R = 70, C = 2 * Math.PI * R
  let acc = 0

  return (
    <Sec id="publico" dark>
      <Cn>
        <SectionTag>Público-alvo</SectionTag>
        <h2 className="reveal font-display font-black tracking-[-0.01em] leading-[1.02] uppercase
          text-[clamp(30px,4vw,52px)]">
          Pra quem<br />a gente entrega.
        </h2>
        <div className="grid grid-cols-2 gap-[70px] items-center mt-[50px] max-md:grid-cols-1">
          {/* Donut */}
          <div className="reveal flex justify-center">
            <div className="relative w-[360px] h-[360px] max-md:w-[260px] max-md:h-[260px]">
              <svg viewBox="0 0 200 200" className="w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="100" cy="100" r={R} fill="none" stroke="var(--color-navy-line)" strokeWidth="22" />
                {segs.map((s, i) => {
                  const dash   = (s.value / total) * C
                  const offset = (acc / total) * C
                  acc += s.value
                  return (
                    <circle
                      key={i} cx="100" cy="100" r={R}
                      fill="none" stroke={s.color} strokeWidth="22"
                      strokeDasharray={`${dash} ${C - dash}`}
                      strokeDashoffset={-offset}
                      style={{ transition: 'stroke-dasharray 1.2s ease' }}
                    />
                  )
                })}
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="font-display font-black text-[56px] text-gold leading-none
                    max-md:text-[40px]">
                    100%
                  </div>
                  <div className="text-[12px] tracking-[0.18em] uppercase text-text-muted mt-1.5">
                    SMBs Brasil
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Legend */}
          <div className="flex flex-col gap-[22px]">
            {segs.map((s) => (
              <div
                key={s.label}
                className="reveal bg-navy-card border border-navy-line rounded-[14px] p-[22px_24px]
                  flex gap-[18px] items-center transition-all duration-[250ms]
                  hover:translate-x-1.5 hover:bg-navy-card-hover"
              >
                <div className="w-4 h-14 rounded-[5px] shrink-0" style={{ background: s.color }} />
                <div className="flex-1">
                  <h5 className="font-display font-extrabold text-[16px] mb-1">{s.label}</h5>
                  <p className="text-[13px] text-text-muted m-0 leading-[1.5]">{s.desc}</p>
                </div>
                <div className="font-display font-black text-[32px] text-gold ml-auto shrink-0">
                  {s.value}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </Cn>
    </Sec>
  )
}

// ── MissionVision ──────────────────────────────────────────────────────────────
export function MissionVision() {
  return (
    <Sec id="essencia">
      <Cn>
        <SectionTag>Nossa essência</SectionTag>
        <h2 className="reveal font-display font-black tracking-[-0.01em] leading-[1.02] uppercase
          text-[clamp(30px,4vw,52px)]">
          Transformando desafios complexos<br />
          em <span className="text-gold">soluções digitais.</span>
        </h2>

        {/* Mission + Vision */}
        <div className="reveal grid grid-cols-2 gap-[22px] mt-[50px] max-md:grid-cols-1">
          {[
            {
              ico: 'rocket', t: 'Missão',
              body: <>Traduzir desafios de negócios complexos em <b className="text-gold">códigos eficientes</b>, desenvolvendo softwares sob medida que impulsionam a produtividade e a segurança dos nossos parceiros.</>,
            },
            {
              ico: 'eye', t: 'Visão',
              body: <>Estar entre as <b className="text-gold">5 principais referências</b> em desenvolvimento sob medida do estado, atendendo grandes projetos nacionais e internacionais com excelência técnica.</>,
            },
          ].map((c) => (
            <div
              key={c.t}
              className="bg-navy-card border border-navy-line border-b-[3px] border-b-gold
                rounded-[14px] p-[38px_34px] relative overflow-hidden
                transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="w-14 h-14 rounded-[14px] bg-gold/[0.12] text-gold
                grid place-items-center mb-[22px]">
                <Icon name={c.ico} size={26} />
              </div>
              <h3 className="font-display font-extrabold tracking-[0.08em] uppercase text-[18px] mb-3.5">
                {c.t}
              </h3>
              <p className="text-text-muted leading-relaxed text-[15px] m-0">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="reveal mt-[60px]">
          <h3 className="font-display font-extrabold tracking-[0.14em] uppercase text-[18px]
            text-gold mb-[18px]">
            Valores inegociáveis
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-[22px] mt-[22px] max-md:grid-cols-1">
          {[
            { ico: 'code',   t: 'Excelência técnica',  d: 'Código limpo, seguro e alinhado às melhores práticas globais de desenvolvimento.' },
            { ico: 'shield', t: 'Confidencialidade',    d: 'Proteção total aos dados e segredos de negócio dos nossos clientes.' },
            { ico: 'clock',  t: 'Pontualidade',         d: 'Cumprimento rigoroso dos prazos de entrega em cada módulo (sprints).' },
          ].map((v, i) => (
            <div
              key={v.t}
              className="reveal bg-navy-card border border-navy-line border-b-[3px] border-b-gold
                rounded-[14px] p-8 transition-all duration-300
                hover:-translate-y-1.5 hover:bg-navy-card-hover"
              style={{ transitionDelay: i * 80 + 'ms' }}
            >
              <div className="w-[50px] h-[50px] rounded-[12px] bg-gold/[0.12] text-gold
                grid place-items-center mb-[18px]">
                <Icon name={v.ico} size={24} />
              </div>
              <h4 className="font-display font-extrabold tracking-[0.06em] uppercase text-[16px] mb-2.5">
                {v.t}
              </h4>
              <p className="text-text-muted leading-relaxed text-[14px] m-0">{v.d}</p>
            </div>
          ))}
        </div>
      </Cn>
    </Sec>
  )
}

// ── Team ───────────────────────────────────────────────────────────────────────
export function Team() {
  const groups = [
    {
      role: 'Tech Lead', sub: 'Liderança técnica & fullstack', ico: 'rocket',
      desc: 'Define a stack tecnológica, realiza code reviews e desenvolve os módulos críticos: motor de autenticação, lógica de balanceamento contábil e resolução de bloqueios técnicos (bugs complexos).',
      members: ['Guilherme de Carvalho Cardoso Rodrigues'],
    },
    {
      role: 'Product Owner & Analista de Negócio Contábil', sub: 'Tradução de regras contábeis para requisitos técnicos', ico: 'eye',
      desc: 'Traduz as normas contábeis para requisitos técnicos, prototipa as interfaces (Figma/Wireframes), redige a documentação acadêmica e valida se os cálculos do sistema estão corretos.',
      members: ['Igor Gomes Quaresma', 'Wellington Junior Moreira Da Cruz'],
    },
    {
      role: 'DBA · Database Admin', sub: 'Banco de dados & segurança', ico: 'stack',
      desc: 'Gerencia a instância no Supabase. Responsável pela criação de tabelas, relacionamentos, Views para relatórios financeiros, Procedures e políticas de segurança de linha (RLS).',
      members: ['Thalys Georgys Fernandes Souza'],
    },
    {
      role: 'Desenvolvedores Back-end', sub: 'API, integração e fluxo de dados', ico: 'cpu',
      desc: 'Desenvolve as rotas da API, integra o servidor com o Supabase e garante que o fluxo de dados entre o banco e o cliente seja performático e seguro.',
      members: ['João Pedro Matos Tameirão', 'Bruna Mossen Rios', 'Wesley Gonçalves Pereira'],
    },
    {
      role: 'Desenvolvedores Front-end', sub: 'Interface, responsividade & consumo de API', ico: 'code',
      desc: 'Transforma os protótipos do PO em código (HTML/CSS/React/etc), garante a responsividade e consome a API do Back-end para exibir os dados contábeis de forma clara.',
      members: ['Davi Pereira Dutra', 'João Antonio Vieira Baldow', 'Júlio Cézar Oliveira de Souza'],
    },
    {
      role: 'QA, Documentação & Apresentação', sub: 'Testes, manuais e banca', ico: 'shield',
      desc: 'Executa testes unitários e de integração, redige manuais de uso, organiza a documentação técnica do projeto e estrutura a apresentação final para a banca/professora.',
      members: ['Milena Ferreira da Silva', 'Igor Silva Mendes'],
    },
  ]

  const initials = (n) => {
    const parts = n.split(' ').filter((w) => w.length > 2 && !['da','de','do','das','dos'].includes(w.toLowerCase()))
    return ((parts[0]?.[0] || '') + (parts[parts.length - 1]?.[0] || '')).toUpperCase()
  }

  const totalMembers = groups.reduce((s, g) => s + g.members.length, 0)

  return (
    <Sec id="equipe" dark>
      <Cn>
        <SectionTag>Equipe acadêmica</SectionTag>
        <h2 className="reveal font-display font-black tracking-[-0.01em] leading-[1.02] uppercase
          text-[clamp(30px,4vw,52px)]">
          Conheça o<br />time <span className="text-gold">Focus.</span>
        </h2>
        <p className="reveal text-text-muted text-[clamp(16px,1.3vw,19px)] leading-relaxed
          max-w-[680px] mt-[18px]">
          A TechBalance Solutions é um projeto desenvolvido para a disciplina de Contabilidade.
          Conheça os {totalMembers} integrantes do time Focus e suas responsabilidades.
        </p>

        <div className="flex flex-col gap-5 mt-14">
          {groups.map((g, gi) => (
            <div
              key={g.role}
              className="reveal bg-navy-card border border-navy-line border-l-[3px] border-l-gold
                rounded-[14px] p-[26px_28px]"
              style={{ transitionDelay: gi * 60 + 'ms' }}
            >
              {/* Group header */}
              <div className="flex items-center gap-4 pb-[18px] mb-[18px] border-b border-navy-line
                max-sm:flex-wrap">
                <div className="w-11 h-11 rounded-[12px] bg-gold text-navy-900
                  grid place-items-center shrink-0">
                  <Icon name={g.ico} size={20} stroke={2.2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-extrabold text-[18px] tracking-[0.06em] uppercase text-white">
                    {g.role}
                  </div>
                  <div className="text-[13px] text-text-muted mt-0.5">{g.sub}</div>
                </div>
                <div className="shrink-0 font-display font-extrabold text-[12px] tracking-[0.18em]
                  text-gold px-3 py-1.5 border border-gold/30 rounded-full bg-gold/[0.06]">
                  {String(g.members.length).padStart(2, '0')}
                </div>
              </div>

              {/* Description */}
              <p className="text-text-muted text-[15px] leading-relaxed mb-[22px] max-w-[880px] m-0 mb-[22px]">
                {g.desc}
              </p>

              {/* Members grid */}
              <div
                className="grid gap-3.5 max-sm:grid-cols-1"
                style={{ gridTemplateColumns: `repeat(${Math.min(g.members.length, 3)}, minmax(0,1fr))` }}
              >
                {g.members.map((m) => (
                  <div
                    key={m}
                    className="team-member-glow bg-white/[0.025] border border-navy-line rounded-[12px]
                      p-[22px_20px] flex flex-col items-start gap-3.5
                      transition-all duration-[250ms] hover:bg-gold/[0.05] hover:border-gold/40 hover:-translate-y-0.5"
                  >
                    <div className="w-14 h-14 rounded-full shrink-0 grid place-items-center
                      bg-gradient-to-br from-gold to-gold-deep text-navy-900
                      font-display font-extrabold text-[18px] tracking-[0.02em]
                      shadow-[0_6px_16px_-6px_rgba(245,197,24,0.5)]">
                      {initials(m)}
                    </div>
                    <div className="font-display font-bold text-[15px] leading-[1.25] text-white">{m}</div>
                    <div className="text-[11px] tracking-[0.16em] uppercase text-text-dim font-semibold">
                      {g.role.split('·')[0].split('&')[0].trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Cn>
    </Sec>
  )
}
