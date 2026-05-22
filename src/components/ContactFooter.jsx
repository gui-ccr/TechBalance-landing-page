import { useState } from 'react'
import Icon from './Icon.jsx'

const Cn  = ({ children, className = '' }) => (
  <div className={`w-full max-w-[1240px] mx-auto px-7 ${className}`}>{children}</div>
)
const Sec = ({ id, children, className = '' }) => (
  <section id={id} className={`py-[clamp(72px,9vw,130px)] relative ${className}`}>
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

// ── Field helpers ──────────────────────────────────────────────────────────────
const inputCls = (hasErr) =>
  `bg-navy-950 border text-white px-4 py-3.5 rounded-lg font-[inherit] text-[15px]
   focus:outline-none transition-colors ${hasErr ? 'border-red-500' : 'border-navy-line focus:border-gold'}`

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      <label className="text-[12px] tracking-[0.08em] uppercase text-text-muted font-semibold">
        {label}
      </label>
      {children}
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  )
}

// ── Contact ────────────────────────────────────────────────────────────────────
export function Contact() {
  const [data, setData] = useState({
    name: '', email: '', company: '', segment: 'Microempresa', message: '',
  })
  const [errors, setErrors]   = useState({})
  const [sent, setSent]       = useState(false)
  const [sending, setSending] = useState(false)

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    const errs = {}
    if (!data.name.trim()) errs.name = 'Informe seu nome.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'E-mail inválido.'
    if (!data.message.trim() || data.message.length < 10)
      errs.message = 'Conte um pouco mais (min. 10 caracteres).'
    setErrors(errs)
    if (Object.keys(errs).length) return
    setSending(true)
    await new Promise((r) => setTimeout(r, 900))
    setSending(false)
    setSent(true)
  }

  return (
    <Sec id="contato">
      <Cn className="grid grid-cols-2 gap-[60px] items-center max-md:grid-cols-1">
        {/* Left */}
        <div>
          <SectionTag>Vamos conversar</SectionTag>
          <h2 className="reveal font-display font-black tracking-[-0.01em] leading-[1.02] uppercase
            text-[clamp(30px,4vw,52px)]">
            Estamos prontos para<br />
            <span className="text-gold">equilibrar o seu futuro.</span>
          </h2>
          <p className="reveal text-text-muted text-[clamp(16px,1.3vw,19px)] leading-relaxed
            mt-[18px] max-w-[520px]">
            Conta pra gente o gargalo principal do seu negócio. Em até 1 dia útil retornamos
            com um diagnóstico inicial — sem custo.
          </p>

          <div className="reveal flex flex-col gap-3.5 mt-[30px]">
            {[
              { href: 'mailto:contato@techbalance.com.br', ico: 'mail',  lbl: 'E-mail',    val: 'contato@techbalance.com.br' },
              { href: 'https://www.techbalance.com.br',    ico: 'globe', lbl: 'Site',       val: 'www.techbalance.com.br', ext: true },
              { href: '#',                                  ico: 'phone', lbl: 'WhatsApp',   val: '(11) 9 9999-9999' },
            ].map(({ href, ico, lbl, val, ext }) => (
              <a
                key={lbl}
                href={href}
                {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="flex gap-4 items-center px-6 py-5
                  bg-navy-card border border-navy-line rounded-[14px]
                  transition-all duration-[250ms]
                  hover:bg-navy-card-hover hover:border-gold/40"
              >
                <div className="w-[46px] h-[46px] rounded-[12px] bg-gold/[0.12] text-gold
                  grid place-items-center shrink-0">
                  <Icon name={ico} size={20} />
                </div>
                <div>
                  <div className="text-[12px] text-text-muted tracking-[0.12em] uppercase">{lbl}</div>
                  <div className="font-display font-bold text-[16px] mt-0.5">{val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          className="reveal bg-navy-card border border-navy-line border-b-[4px] border-b-gold
            rounded-[22px] p-10"
          onSubmit={submit}
          noValidate
        >
          {sent ? (
            <div className="bg-green-400/[0.08] border border-green-400/40 rounded-[14px] p-[22px]
              flex gap-3.5 items-center">
              <div className="w-10 h-10 rounded-full bg-green-400 text-navy-900
                grid place-items-center shrink-0">
                <Icon name="check" size={20} stroke={3} />
              </div>
              <div>
                <h4 className="font-display font-extrabold m-0 mb-1">Recebemos sua mensagem!</h4>
                <p className="m-0 text-text-muted text-[14px]">
                  Em até 1 dia útil um especialista da Focus Team retorna com o diagnóstico inicial.
                </p>
              </div>
            </div>
          ) : (
            <>
              <h3 className="font-display font-extrabold tracking-[0.04em] uppercase text-[22px]
                m-0 mb-1.5">
                Solicitar diagnóstico
              </h3>
              <p className="text-text-muted text-[14px] m-0 mb-6">
                Preencha os campos abaixo. Levamos a sério.
              </p>

              <Field label="Nome completo" error={errors.name}>
                <input
                  id="f-name"
                  className={inputCls(errors.name)}
                  value={data.name}
                  onChange={set('name')}
                  placeholder="Como devemos te chamar?"
                />
              </Field>

              <div className="grid grid-cols-2 gap-3.5">
                <Field label="E-mail" error={errors.email}>
                  <input
                    id="f-email"
                    type="email"
                    className={inputCls(errors.email)}
                    value={data.email}
                    onChange={set('email')}
                    placeholder="voce@empresa.com"
                  />
                </Field>
                <Field label="Empresa">
                  <input
                    id="f-company"
                    className={inputCls(false)}
                    value={data.company}
                    onChange={set('company')}
                    placeholder="Nome da empresa"
                  />
                </Field>
              </div>

              <Field label="Segmento">
                <select
                  id="f-seg"
                  className={inputCls(false)}
                  value={data.segment}
                  onChange={set('segment')}
                >
                  <option>Microempresa</option>
                  <option>Comércio local</option>
                  <option>Prestador de serviços</option>
                  <option>Outro</option>
                </select>
              </Field>

              <Field label="Qual o gargalo principal?" error={errors.message}>
                <textarea
                  id="f-msg"
                  rows={4}
                  className={`${inputCls(errors.message)} resize-y min-h-[100px]`}
                  value={data.message}
                  onChange={set('message')}
                  placeholder="Ex.: gasto 4h por dia conferindo planilhas de estoque..."
                />
              </Field>

              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2.5
                  px-[26px] py-3.5 rounded-full border border-transparent
                  bg-gold text-navy-900 font-display font-bold text-sm tracking-[0.04em] uppercase
                  hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(245,197,24,0.55)]
                  transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Enviando…' : (
                  <>Solicitar diagnóstico <Icon name="arrow-right" size={16} stroke={2.4} /></>
                )}
              </button>

              <p className="text-center text-[12px] text-text-dim mt-3.5 mb-0">
                Resposta em até 1 dia útil · seus dados ficam só com a gente.
              </p>
            </>
          )}
        </form>
      </Cn>
    </Sec>
  )
}

// ── CTA ────────────────────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section className="pt-0 pb-[clamp(72px,9vw,130px)]">
      <Cn>
        <div
          className="reveal rounded-[24px] overflow-hidden border border-navy-line relative
            grid grid-cols-[1.4fr_1fr] gap-10 items-center
            p-[clamp(40px,5vw,72px)]
            max-md:grid-cols-1"
          style={{
            background: 'linear-gradient(135deg, var(--color-navy-800), var(--color-navy-700) 60%, var(--color-navy-900))',
          }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(600px 300px at 90% 30%, rgba(245,197,24,0.15), transparent 70%)' }}
          />

          <div className="relative">
            <span className="font-display font-bold tracking-[0.22em] uppercase text-[13px] text-gold">
              Pronto pra equilibrar?
            </span>
            <h2 className="font-display font-black tracking-[-0.01em] leading-[1.02] uppercase
              text-[clamp(30px,4vw,52px)] mt-3.5">
              Não entregamos só código.<br />
              <span className="text-gold">Entregamos solução configurada.</span>
            </h2>
            <p className="text-text-muted text-[clamp(16px,1.3vw,19px)] leading-relaxed mt-[18px] max-w-[560px]">
              Pare de perder horas no operacional. Vamos juntos do diagnóstico à entrega — focado
              no gargalo real, com resultado mensurável.
            </p>
          </div>

          <div className="relative flex flex-col gap-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2.5
                px-[26px] py-3.5 rounded-full border border-transparent
                bg-gold text-navy-900 font-display font-bold text-sm tracking-[0.04em] uppercase
                hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(245,197,24,0.55)]
                transition-all duration-200"
            >
              Solicitar diagnóstico <Icon name="arrow-right" size={16} stroke={2.4} />
            </a>
            <a
              href="mailto:contato@techbalance.com.br"
              className="inline-flex items-center justify-center gap-2.5
                px-[26px] py-3.5 rounded-full
                border border-navy-line text-white font-display font-bold text-sm tracking-[0.04em] uppercase
                hover:border-gold hover:text-gold transition-all duration-200"
            >
              <Icon name="mail" size={16} /> Falar por e-mail
            </a>
          </div>
        </div>
      </Cn>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-line pt-[70px] pb-[30px]">
      <Cn>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-[50px]
          max-md:grid-cols-[1fr_1fr] max-sm:grid-cols-1">

          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3.5 mb-2.5">
              <img src="/assets/logo-mark.png" alt="TechBalance" className="w-20 h-20 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-[26px] tracking-[0.01em]">
                  Tech<b className="text-gold font-black">Balance</b>
                </span>
                <span className="text-[10px] tracking-[0.32em] text-text-dim mt-1 uppercase">
                  Solutions · Focus Team
                </span>
              </div>
            </a>
            <p className="text-text-muted text-[14px] leading-relaxed mt-[18px] max-w-[320px]">
              Inovação em software para gestão e automação. Transformando desafios complexos em
              soluções digitais que equilibram e impulsionam o seu negócio.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: 'Empresa',
              links: [
                { href: '#solucao',    label: 'A solução'           },
                { href: '#operacao',   label: 'Frentes de operação' },
                { href: '#essencia',   label: 'Missão e valores'    },
                { href: '#publico',    label: 'Público-alvo'        },
              ],
            },
            {
              title: 'Soluções',
              links: [
                { href: '#operacao',    label: 'Automação'             },
                { href: '#operacao',    label: 'Controle financeiro'   },
                { href: '#operacao',    label: 'Gestão de serviços'    },
                { href: '#comparativo', label: 'Por que TechBalance'   },
              ],
            },
            {
              title: 'Contato',
              links: [
                { href: 'mailto:contato@techbalance.com.br', label: 'contato@techbalance.com.br' },
                { href: 'https://www.techbalance.com.br',    label: 'www.techbalance.com.br'     },
                { href: '#contato',                          label: 'Solicitar diagnóstico'       },
              ],
              social: true,
            },
          ].map(({ title, links, social }) => (
            <div key={title}>
              <h5 className="font-display font-extrabold tracking-[0.14em] uppercase text-[12px]
                text-gold m-0 mb-[18px]">
                {title}
              </h5>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-text-muted text-[14px] hover:text-gold transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              {social && (
                <div className="flex gap-2.5 mt-[18px]">
                  {[
                    { name: 'linkedin',  label: 'LinkedIn'  },
                    { name: 'instagram', label: 'Instagram' },
                  ].map(({ name, label }) => (
                    <a
                      key={name}
                      href="#"
                      aria-label={label}
                      className="w-[38px] h-[38px] rounded-[10px] bg-navy-card border border-navy-line
                        grid place-items-center text-text-muted hover:text-gold hover:border-gold
                        transition-colors duration-200"
                    >
                      <Icon name={name} size={16} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center flex-wrap gap-4
          pt-6 border-t border-navy-line text-[13px] text-text-dim">
          <div>© 2026 TechBalance Solutions · Focus Team. Todos os direitos reservados.</div>
          <div className="flex gap-[18px]">
            <a href="#" className="hover:text-gold transition-colors">Política de privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Termos de uso</a>
          </div>
        </div>
      </Cn>
    </footer>
  )
}
