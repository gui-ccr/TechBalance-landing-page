// src/App.jsx
import { useEffect } from 'react'
import { Header, Hero, useReveal } from './components/Header.jsx'
import { Problem, Solution, Features, Comparison, Audience, MissionVision, Team } from './components/Sections.jsx'
import { Contact, CTA, Footer } from './components/ContactFooter.jsx'

export default function App() {
  useReveal()

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      if (!id) return
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        const top = el.getBoundingClientRect().top + window.scrollY - 70
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Comparison />
        <Audience />
        <MissionVision />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
