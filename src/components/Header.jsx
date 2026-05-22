import { useState, useEffect } from 'react'
import Icon from './Icon.jsx'

export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const NAV_LINKS = [
  { href: '#solucao',     label: 'Solução'      },
  { href: '#operacao',    label: 'Operação'     },
  { href: '#comparativo', label: 'Comparativo'  },
  { href: '#publico',     label: 'Público-alvo' },
  { href: '#equipe',      label: 'Equipe'       },
]

export function Header() {
  const scrolled = useScrolled(20)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-[14px] border-b border-navy-line py-3'
          : 'py-[18px]'
      }`}
    >
      <div className="w-full max-w-[1240px] mx-auto px-7 flex items-center justify-between gap-6">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3.5 shrink-0" onClick={close}>
          <img src="/assets/logo-mark.png" alt="TechBalance" className="w-16 h-16 object-contain" />
          <div className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-[22px] tracking-[0.01em]">
              Tech<b className="text-gold font-black">Balance</b>
            </span>
            <span className="text-[10px] tracking-[0.32em] text-text-dim mt-1 uppercase">
              Solutions · Focus Team
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="relative text-sm font-medium text-text-muted hover:text-white transition-colors
                after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-6px]
                after:h-[2px] after:bg-gold after:scale-x-0 after:origin-left
                hover:after:scale-x-100 after:transition-transform after:duration-[250ms]"
            >
              {label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={close}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
              bg-gold text-navy-900 font-display font-bold text-[12px] tracking-[0.04em] uppercase
              hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(245,197,24,0.55)]
              transition-all duration-200"
          >
            Falar com a equipe <Icon name="arrow-right" size={14} stroke={2.4} />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden grid place-items-center w-11 h-11 rounded-xl bg-navy-card border border-navy-line text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <Icon name={open ? 'x' : 'menu'} size={22} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-1 bg-navy-800 border border-navy-line rounded-2xl p-[22px] flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="text-sm font-medium text-text-muted hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={close}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full
              bg-gold text-navy-900 font-display font-bold text-[12px] tracking-[0.04em] uppercase"
          >
            Falar com a equipe <Icon name="arrow-right" size={14} stroke={2.4} />
          </a>
        </div>
      )}
    </header>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="pt-[210px] pb-[150px] relative overflow-hidden max-sm:pt-[130px]"
      style={{
        background: `
          radial-gradient(900px 600px at 85% 10%, rgba(245,197,24,0.10), transparent 60%),
          radial-gradient(700px 500px at 10% 60%, rgba(31,53,102,0.55), transparent 60%),
          var(--color-navy-900)
        `,
      }}
    >
      <div className="w-full max-w-[1240px] mx-auto px-7">
        <div className="max-w-[920px] mx-auto text-center flex flex-col items-center">

          {/* Pill */}
          <div className="reveal inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6
            bg-[rgba(245,197,24,0.08)] border border-[rgba(245,197,24,0.25)]
            text-[12px] font-semibold tracking-[0.16em] uppercase text-gold">
            <span className="w-[7px] h-[7px] bg-gold rounded-full pulse-dot shrink-0" />
            Inovação em Software para Gestão e Automação
          </div>

          {/* Heading */}
          <h1 className="reveal font-display font-black tracking-[-0.01em] leading-[1.02] uppercase
            text-[clamp(40px,6.4vw,84px)] mt-3.5 mb-[22px]">
            Transformamos o <span className="text-gold">caos manual</span>
            <br />
            em decisões inteligentes.
          </h1>

          {/* Lead */}
          <p className="reveal text-text-muted text-[clamp(16px,1.3vw,19px)] leading-relaxed max-w-[560px] mb-9">
            Softwares <b className="text-white">100% personalizados</b> para microempresas,
            comércios locais e prestadores de serviços. Implantação ativa, código limpo e foco
            no gargalo real do seu negócio.
          </p>

          {/* CTAs */}
          <div className="reveal flex gap-3.5 flex-wrap justify-center mb-12">
            <a
              href="#contato"
              className="inline-flex items-center gap-2.5 px-[26px] py-3.5 rounded-full border border-transparent
                bg-gold text-navy-900 font-display font-bold text-sm tracking-[0.04em] uppercase
                hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(245,197,24,0.55)]
                transition-all duration-200"
            >
              Solicitar diagnóstico <Icon name="arrow-right" size={16} stroke={2.4} />
            </a>
            <a
              href="#solucao"
              className="inline-flex items-center gap-2.5 px-[26px] py-3.5 rounded-full
                border border-navy-line text-white font-display font-bold text-sm tracking-[0.04em] uppercase
                hover:border-gold hover:text-gold transition-all duration-200"
            >
              <Icon name="play" size={14} /> Ver a solução
            </a>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-3 gap-7 max-w-[560px] pt-8 border-t border-navy-line
            max-sm:grid-cols-1 max-sm:gap-[18px]">
            {[
              { num: '95',  unit: '%', lbl: 'Eficiência operacional' },
              { num: '100', unit: '%', lbl: 'Configuração sob medida' },
              { num: '+3',  unit: '',  lbl: 'Frentes de operação'     },
            ].map(({ num, unit, lbl }) => (
              <div key={lbl}>
                <div className="font-display font-black text-[32px] text-gold leading-none">
                  {num}<span className="text-[18px]">{unit}</span>
                </div>
                <div className="text-xs text-text-muted mt-2 tracking-[0.04em]">{lbl}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
