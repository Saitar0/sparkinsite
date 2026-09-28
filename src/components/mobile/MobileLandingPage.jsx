import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import avatar from '../../../imagens/banner-e-foto/channels4_profile.jpg'

const mobileThumbOne = new URL('../../../imagens/videos/gmod.webp', import.meta.url).href
const mobileThumbTwo = new URL('../../../imagens/videos/valorantcomamigos.JPEG', import.meta.url).href
const mobileThumbThree = new URL('../../../imagens/videos/issonaoeumaia.webp', import.meta.url).href
const mobileThumbFour = new URL('../../../imagens/videos/a MELHOR e a PIOR NOTA de cada FRANQUIA [nn1uFu5I-wY].webp', import.meta.url).href
const mobileThumbFive = new URL('../../../imagens/videos/A DECADÊNCIA dos jogos LEGO [ED_Xl8jK6Ho].webp', import.meta.url).href
const mobileThumbSix = new URL('../../../imagens/videos/AZUN INTRO METAMORFOSE (@ZSSPARKIN) [J4eBF25OXT0].jpeg', import.meta.url).href

const videoOne = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/gmod_compressed.mp4', import.meta.url).href
const videoTwo = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/valorantcomamigos_compressed.mp4', import.meta.url).href
const videoThree = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/issonaoeumaia_compressed.mp4', import.meta.url).href
const videoFour = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/a%20MELHOR%20e%20a%20PIOR%20NOTA%20de%20cada%20FRANQUIA_compressed.mp4', import.meta.url).href
const videoFive = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/A%20DECAD%C3%8ANCIA%20dos%20jogos%20LEGO_compressed_compressed.mp4', import.meta.url).href
const videoSix = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/AZUN%20INTRO%20METAMORFOSE%20%28%40ZSSPARKIN%29_compressed.mp4', import.meta.url).href

const socials = [
  { label: 'Twitter', href: 'https://x.com/zssparkin' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@sousparkin' },
  { label: 'E-mail', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sparkineditor.contato@gmail.com&su=Pedido%20de%20edi%C3%A7%C3%A3o&body=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20pedir%20uma%20edi%C3%A7%C3%A3o%20sua.%20Pode%20me%20ajudar%3F' },
  { label: 'Youtube', href: 'https://www.youtube.com/@osparkin' },
  { label: 'Instagram', href: 'https://www.instagram.com/sousparkin/' },
]

const serviceOptions = {
  pt: ['Edição de vídeo', 'Criador de conteúdo', 'Long-form'],
  en: ['Video editing', 'Content creator', 'Long-form'],
}

const pricingOptions = {
  pt: [
    { label: 'Vídeos 10 min', value: 'R$ 200 / R$ 150' },
    { label: 'Partes menores', value: 'R$ 90 / R$ 75' },
    { label: 'Projetos maiores', value: 'Preço negociável' },
  ],
  en: [
    { label: '10 min videos', value: 'R$ 200 / R$ 150' },
    { label: 'Shorter parts', value: 'R$ 90 / R$ 75' },
    { label: 'Larger projects', value: 'Negotiable price' },
  ],
}

const mobileProjects = [
  {
    title: 'A LENDA CHAMADA "GARRY\'S MOD".',
    category: 'story',
    thumb: mobileThumbOne,
    video: videoOne,
  },
  {
    title: 'VALORANT COM AMIGOS É...',
    category: 'gaming edit',
    thumb: mobileThumbTwo,
    video: videoTwo,
  },
  {
    title: 'ISSO NÃO É SÓ UMA IA',
    category: 'gaming edit',
    thumb: mobileThumbThree,
    video: videoThree,
  },
]

const collabProjects = [
  {
    title: 'MELHOR E PIOR NOTA DE CADA FRANQUIA',
    category: 'Recanto Lenhoso',
    thumb: mobileThumbFour,
    video: videoFour,
  },
  {
    title: 'A DECADÊNCIA DOS JOGOS LEGO',
    category: 'Recanto Lenhoso',
    thumb: mobileThumbFive,
    video: videoFive,
  },
  {
    title: 'INTRO DO VÍDEO METAMORFOSE',
    category: 'Azun',
    thumb: mobileThumbSix,
    video: videoSix,
  },
]

const tools = ['Premiere', 'After Effects', 'DaVinci Resolve']

const translations = {
  pt: {
    tag: 'editor de vídeo',
    contact: 'Contato',
    requestQuote: 'Solicitar orçamento',
    selectedWork: 'meus videos',
    selectedWorkLabel: 'trabalhos selecionados',
    partnership: 'para outros youtubers',
    partnershipTitle: 'trabalhos em parceria',
    about: 'Sobre',
    aboutTitle: 'editor de vídeo e criador de conteúdo.',
    aboutText:
      'Crio videos desde os 10 anos de idade, e ao longo do tempo adquiri cada vez mais habilidade na edição de video com muito treino e videos próprios para os meus canais no Youtube. Mas agora optei por fazer disso meu trabalho, e além de projetos pessoais, trabalhei para pessoas como "Recanto Lenhoso", "Azun" e obviamente, meu canal, "Eu o Sparkin". Estou em busca de mais pessoas interessadas em meu serviço!',
    pricingTitle: 'Preços base',
    heroTitle: 'Sou o Sparkin, editor de vídeo e criador de conteúdo. Tenho experiência em DaVinci, After Effects e Premiere.',
    heroAccent: 'E crio video com a energia, ritmo e identidade visual de sua preferência!',
    primaryCta: 'Ver Portfólio',
    secondaryCta: 'Sobre',
    available: 'Disponível para projetos',
    preview: 'preview',
    openVideo: 'Abrir vídeo de',
  },
  en: {
    tag: 'video editor',
    contact: 'Contact',
    requestQuote: 'Request quote',
    selectedWork: 'my videos',
    selectedWorkLabel: 'selected work',
    partnership: 'for other creators',
    partnershipTitle: 'partnership projects',
    about: 'About',
    aboutTitle: 'video editor and content creator.',
    aboutText:
      'I have been creating videos since I was 10 years old, and over time I developed a strong editing skill through constant practice and my own YouTube content. I eventually chose to turn it into my profession, and in addition to personal projects, I have worked with creators such as "Recanto Lenhoso", "Azun" and my own channel, "Eu o Sparkin". I am looking for more people interested in my work!',
    pricingTitle: 'Base prices',
    heroTitle: 'I am Sparkin, a video editor and content creator. I have experience in DaVinci, After Effects and Premiere.',
    heroAccent: 'I create videos with the energy, rhythm and visual identity you want!',
    primaryCta: 'View Portfolio',
    secondaryCta: 'About',
    available: 'Available for projects',
    preview: 'preview',
    openVideo: 'Open video of',
  },
}

function LanguageToggle({ language, onChange }) {
  const isPt = language === 'pt'

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-[#f5ff00]/70 bg-black/70 p-1.5 shadow-[0_0_0_2px_rgba(245,255,0,0.12)]">
      {['pt', 'en'].map((value) => {
        const active = language === value
        const flag = value === 'pt' ? '🇧🇷' : '🇺🇸'

        return (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            aria-label={value === 'pt' ? 'Mudar para português' : 'Switch to English'}
            className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border text-[14px] transition-all duration-200 hover:scale-105 ${
              active
                ? 'border-black bg-[#f5ff00] shadow-[2px_2px_0_#000]'
                : 'border-zinc-700 bg-zinc-900 text-zinc-500 hover:border-[#f5ff00] hover:text-[#f5ff00]'
            }`}
          >
            <span aria-hidden="true">{flag}</span>
          </button>
        )
      })}
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: 'easeOut' },
  },
}

export default function MobileLandingPage({ language, setLanguage }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const modalVideoRef = useRef(null)
  const t = translations[language]

  useEffect(() => {
    if (!selectedProject || !modalVideoRef.current) return

    const video = modalVideoRef.current
    video.load()
    video.muted = true
  }, [selectedProject])

  return (
    <div className="min-h-screen bg-[#09090b] text-white antialiased">
      <div className="pointer-events-none fixed inset-0 opacity-60 mix-blend-screen">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(245,255,0,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />
      </div>

      <header className="relative px-4 pt-4">
        <div className="grunge-panel flex items-center justify-between rounded-full border border-[#f5ff00]/70 bg-black/70 px-3 py-2.5 shadow-[0_0_0_2px_rgba(245,255,0,0.15)] backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <img src={avatar} alt="Perfil do editor" className="h-10 w-10 rounded-full border-2 border-[#f5ff00] object-cover" loading="lazy" />
            <div className="leading-none">
              <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#f5ff00]">{language === 'pt' ? 'Eu o Sparkin' : 'Eu o Sparkin'}</p>
              <p className="mt-1 text-[7px] uppercase tracking-[0.25em] text-zinc-400">{language === 'pt' ? 'editor' : 'editor'}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle language={language} onChange={setLanguage} />
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#f5ff00] bg-[#f5ff00] px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-black"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-md px-4 pb-14 pt-5">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.26em] text-zinc-200">
            <span className="inline-block h-2 w-2 rounded-full bg-[#f5ff00]" />
            {t.tag}
          </div>

          <h1 className="mb-4 flex justify-center gap-1 font-black uppercase leading-[0.8] tracking-[-0.08em] text-white">
            {['S', 'P', 'A', 'R', 'K', 'I', 'N'].map((letter, index) => (
              <span
                key={letter + index}
                className={`letter-block mobile-letter-block ${index % 2 === 0 ? 'bg-[#f5ff00]' : 'bg-zinc-100'}`}
              >
                {letter}
              </span>
            ))}
          </h1>

          <p className="max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              {t.heroTitle}
              <span className="text-[#f5ff00]"> {t.heroAccent}</span>
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#portfolio"
              className="inline-flex min-h-[48px] items-center justify-center rounded-none border-2 border-black bg-[#f5ff00] px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-black shadow-[6px_6px_0_#000]"
            >
              {t.primaryCta}
            </a>

            <a
              href="#about"
              className="inline-flex min-h-[48px] items-center justify-center border border-zinc-700 bg-transparent px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-100"
            >
              {t.secondaryCta}
            </a>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-7"
        >
          <div className="grunge-panel overflow-hidden rounded-[1.7rem] border border-zinc-700 bg-zinc-950 p-3 shadow-[0_0_0_2px_rgba(245,255,0,0.08)]">
            <img src={avatar} alt="Foto do editor" className="h-[360px] w-full rounded-[1.2rem] object-cover contrast-125" loading="lazy" />
            <div className="mt-3 rounded-full border border-[#f5ff00] bg-black/80 px-3 py-2 text-center">
              <p className="text-[8px] uppercase tracking-[0.32em] text-[#f5ff00]">{t.available}</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="portfolio"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-10"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.28em] text-[#f5ff00]">{t.selectedWorkLabel}</p>
              <h2 className="text-2xl font-black uppercase tracking-[-0.06em] text-white">{t.selectedWork}</h2>
            </div>
          </div>

          <div className="mobile-scrollbar-none flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
            {mobileProjects.map((project) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group relative block w-[82%] shrink-0 snap-center overflow-hidden rounded-[1.4rem] border border-zinc-800 bg-zinc-950 text-left"
              >
                <img src={project.thumb} alt={project.title} className="h-[260px] w-full object-cover contrast-125" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.24em] text-[#f5ff00]">{project.category}</p>
                    <h3 className="mt-1 text-lg font-black uppercase leading-tight tracking-[-0.04em] text-white">{project.title}</h3>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/45 text-base text-white">
                    ▶
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="editor-projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-10"
        >
          <div className="mb-4">
            <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.28em] text-[#f5ff00]">{t.partnership}</p>
            <h2 className="text-2xl font-black uppercase tracking-[-0.06em] text-white">{t.partnershipTitle}</h2>
          </div>

          <div className="mobile-scrollbar-none flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
            {collabProjects.map((project) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group relative block w-[82%] shrink-0 snap-center overflow-hidden rounded-[1.4rem] border border-zinc-800 bg-zinc-950 text-left"
              >
                <img src={project.thumb} alt={project.title} className="h-[240px] w-full object-cover contrast-125" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[8px] uppercase tracking-[0.24em] text-[#f5ff00]">{project.category}</p>
                  <h3 className="mt-1 text-base font-black uppercase leading-tight tracking-[-0.04em] text-white">{project.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-10 space-y-4"
        >
          <div className="grunge-panel rounded-[1.5rem] border border-zinc-800 bg-zinc-950 p-5">
            <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.28em] text-[#f5ff00]">{t.about}</p>
            <h2 className="text-2xl font-black uppercase tracking-[-0.06em] text-white">{t.aboutTitle}</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300">
              {t.aboutText}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {serviceOptions[language].map((service) => (
                <span key={service} className="inline-flex items-center rounded-full border border-[#f5ff00]/60 bg-[#f5ff00]/5 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#f5ff00]">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="grunge-panel rounded-[1.5rem] border border-zinc-800 bg-[#f5ff00] p-4 text-black">
            <p className="mb-3 text-[8px] font-black uppercase tracking-[0.32em] text-black/80">{t.pricingTitle}</p>
            <div className="space-y-3">
              {pricingOptions[language].map((item) => (
                <div key={item.label} className="border-b border-black/20 pb-2 last:border-0 last:pb-0">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-black/70">{item.label}</p>
                  <p className="mt-1 text-lg font-black uppercase tracking-[-0.05em]">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="inline-flex items-center rounded-none border-2 border-black bg-[#f5ff00] px-2.5 py-2 text-[8px] font-black uppercase tracking-[0.18em] shadow-[3px_3px_0_#000]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative h-full w-full bg-black" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-zinc-800 bg-black/85 px-4 py-3">
              <div>
                <p className="text-[8px] uppercase tracking-[0.28em] text-[#f5ff00]">{t.preview}</p>
                <h3 className="mt-1 text-base font-black uppercase tracking-[-0.04em] text-white">{selectedProject.title}</h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-lg text-white"
                aria-label={language === 'pt' ? 'Fechar player' : 'Close player'}
              >
                ×
              </button>
            </div>

            <div className="flex h-[calc(100vh-68px)] w-full items-center justify-center bg-black px-2 py-3">
              <video
                ref={modalVideoRef}
                src={selectedProject.video}
                controls
                playsInline
                webkit-playsinline="true"
                preload="metadata"
                poster={selectedProject.thumb}
                className="max-h-[calc(100vh-100px)] w-full max-w-full rounded-sm bg-black object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <footer id="contact" className="relative border-t border-zinc-800 bg-black/70">
        <div className="mx-auto flex max-w-md flex-col gap-5 px-4 py-6 text-center">
          <div>
            <p className="text-[8px] uppercase tracking-[0.32em] text-[#f5ff00]">{t.contact}</p>
            <a href="https://x.com/osparkin" target="_blank" rel="noreferrer" className="mt-2 block text-xl font-black uppercase tracking-[-0.04em] text-white">
              @osparkin
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
