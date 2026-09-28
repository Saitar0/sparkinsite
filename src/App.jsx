import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import MobileLandingPage from './components/mobile/MobileLandingPage'
import { useIsMobile } from './hooks/useIsMobile'
import avatar from '../imagens/banner-e-foto/channels4_profile.jpg'

// As thumbnails (imagens) continuam locais, elas são super leves
const thumbOne = new URL('../imagens/videos/gmod.webp', import.meta.url).href
const thumbTwo = new URL('../imagens/videos/valorantcomamigos.JPEG', import.meta.url).href
const thumbThree = new URL('../imagens/videos/issonaoeumaia.webp', import.meta.url).href
const thumbFour = new URL('../imagens/videos/a MELHOR e a PIOR NOTA de cada FRANQUIA [nn1uFu5I-wY].webp', import.meta.url).href
const thumbFive = new URL('../imagens/videos/A DECADÊNCIA dos jogos LEGO [ED_Xl8jK6Ho].webp', import.meta.url).href
const thumbSix = new URL('../imagens/videos/AZUN INTRO METAMORFOSE (@ZSSPARKIN) [J4eBF25OXT0].jpeg', import.meta.url).href

const videoOne = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/gmod_compressed.mp4', import.meta.url).href
const videoTwo = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/valorantcomamigos_compressed.mp4', import.meta.url).href
const videoThree = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/issonaoeumaia_compressed.mp4', import.meta.url).href
const videoFour = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/a%20MELHOR%20e%20a%20PIOR%20NOTA%20de%20cada%20FRANQUIA_compressed.mp4', import.meta.url).href
const videoFive = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/A%20DECAD%C3%8ANCIA%20dos%20jogos%20LEGO_compressed_compressed.mp4', import.meta.url).href
const videoSix = new URL('https://6zdlkwedureb9c8l.public.blob.vercel-storage.com/AZUN%20INTRO%20METAMORFOSE%20%28%40ZSSPARKIN%29_compressed.mp4', import.meta.url).href

const letters = ['S', 'P', 'A', 'R', 'K', 'I', 'N']

const socials = [
  { label: 'Twitter', href: 'https://x.com/zssparkin' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@sousparkin' },
  { label: 'Youtube', href: 'https://www.youtube.com/@osparkin' },
  { label: 'E-mail', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sparkineditor.contato@gmail.com&su=Pedido%20de%20edi%C3%A7%C3%A3o&body=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20pedir%20uma%20edi%C3%A7%C3%A3o%20sua.%20Pode%20me%20ajudar%3F' },
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

const projects = [
  {
    title: 'A LENDA CHAMADA "GARRY\'S MOD".',
    category: 'story',
    thumb: thumbOne,
    video: videoOne,
  },
  {
    title: 'VALORANT COM AMIGOS É...',
    category: 'gaming edit',
    thumb: thumbTwo,
    video: videoTwo,
  },
  {
    title: 'ISSO NÃO É SÓ UMA IA',
    category: 'gaming edit',
    thumb: thumbThree,
    video: videoThree,
  },
]

const editorProjects = [
  {
    title: 'MELHOR E PIOR NOTA DE CADA FRANQUIA (00:00 - 2:50) (7:16 - 10:50)',
    category: 'Recanto Lenhoso',
    thumb: thumbFour,
    video: videoFour,
  },
  {
    title: 'A DECADÊNCIA DOS JOGOS LEGO (00:00 - 04:15)',
    category: 'Recanto Lenhoso',
    thumb: thumbFive,
    video: videoFive,
  },
  {
    title: 'INTRO DO VÍDEO METAMORFOSE',
    category: 'Azun',
    thumb: thumbSix,
    video: videoSix,
  },
]

const tools = ['Premiere', 'After Effects', 'DaVinci Resolve']

const translations = {
  pt: {
    tag: 'editor de vídeo',
    contact: 'Contato',
    requestQuote: 'Solicitar orçamento',
    selectedWork: 'Meus vídeos',
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
    selectedWork: 'My videos',
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
    <div className="flex items-center gap-2 rounded-full border border-[#f5ff00]/70 bg-black/70 p-1.5 shadow-[0_0_0_2px_rgba(245,255,0,0.12)]">
      {['pt', 'en'].map((value) => {
        const active = language === value
        const flag = value === 'pt' ? '🇧🇷' : '🇺🇸'

        return (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            aria-label={value === 'pt' ? 'Mudar para português' : 'Switch to English'}
            className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border text-lg transition-all duration-200 hover:scale-105 ${
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function DesktopLandingPage({ language, setLanguage }) {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [hasUserInteraction, setHasUserInteraction] = useState(false)
  const videoRefs = useRef([])
  const modalVideoRef = useRef(null)

  const openSelectedProject = (project) => {
    setSelectedProject(project)
  }

  const handleProjectHover = (index) => {
    setHoveredProject(index)

    const video = videoRefs.current[index]
    if (!video) return

    video.currentTime = 0
    video.muted = !hasUserInteraction
    video.volume = hasUserInteraction ? 1 : 0
    video.setAttribute('playsinline', 'true')
    video.play().catch(() => {})
  }

  const handleProjectLeave = () => {
    setHoveredProject(null)

    videoRefs.current.forEach((video) => {
      if (!video) return
      video.pause()
      video.currentTime = 0
      video.muted = true
    })
  }

  const closeSelectedProject = () => {
    setSelectedProject(null)
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
      modalVideoRef.current.currentTime = 0
    }
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-[#09090b] text-white antialiased" onPointerDown={() => setHasUserInteraction(true)}>
      <div className="pointer-events-none fixed inset-0 opacity-60 mix-blend-screen">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(245,255,0,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />
      </div>

      <header className="relative mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="grunge-panel flex items-center justify-between gap-4 rounded-full border border-[#f5ff00]/70 bg-black/70 px-4 py-3 shadow-[0_0_0_2px_rgba(245,255,0,0.2)] backdrop-blur-sm sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              alt="Perfil do editor"
              className="h-11 w-11 rounded-full border-2 border-[#f5ff00] object-cover"
            />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f5ff00]">
                {language === 'pt' ? 'Eu o Sparkin' : 'Eu o Sparkin'}
              </p>
              <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-400">{language === 'pt' ? 'editor' : 'editor'}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.24em] text-zinc-300 transition hover:text-[#f5ff00]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle language={language} onChange={setLanguage} />
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#f5ff00] bg-[#f5ff00] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-[#f5ff00]"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section className="grid items-center gap-10 pb-16 pt-6 md:grid-cols-[1.2fr_0.8fr] md:pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-10"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-200">
              <span className="inline-block h-2 w-2 rounded-full bg-[#f5ff00]" />
              {t.tag}
            </div>

            <h1 className="mb-5 font-black uppercase leading-[0.8] tracking-[-0.08em] text-white">
              <div className="flex items-end gap-x-1 whitespace-nowrap">
                {letters.map((letter, index) => (
                  <motion.span
                    key={letter + index}
                    initial={{ opacity: 0, y: 80, rotate: index % 2 === 0 ? -12 : 12, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                    transition={{
                      delay: index * 0.08,
                      type: 'spring',
                      stiffness: 120,
                      damping: 12,
                    }}
                    className="letter-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </h1>

            <p className="max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              {t.heroTitle}
              <span className="text-[#f5ff00]"> {t.heroAccent}</span>
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.02, x: -2 }}
                whileTap={{ scale: 0.98 }}
                className="magnetic-button group inline-flex items-center justify-center rounded-none border-2 border-black bg-[#f5ff00] px-6 py-3 text-sm font-black uppercase tracking-[0.22em] text-black shadow-[8px_8px_0_#000] transition-all duration-300"
              >
                <span className="relative z-10">{t.primaryCta}</span>
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ y: -2 }}
                className="inline-flex items-center justify-center border border-zinc-700 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-100 transition hover:border-[#f5ff00] hover:text-[#f5ff00]"
              >
                {t.secondaryCta}
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="grunge-panel relative overflow-hidden rounded-[2rem] border border-zinc-700 bg-zinc-950 p-3 shadow-[0_0_0_2px_rgba(245,255,0,0.08)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,255,0,0.12),transparent_40%,rgba(255,255,255,0.05))]" />
              <img
                src={avatar}
                alt="Foto do editor com visual brutalista"
                className="relative h-[440px] w-full rounded-[1.5rem] object-cover contrast-125"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-full border border-[#f5ff00] bg-black/80 px-4 py-3 text-center backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.38em] text-[#f5ff00]">{t.available}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="portfolio"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="py-10"
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.32em] text-[#f5ff00]">
                {t.selectedWorkLabel}
              </p>
              <h2 className="text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl">
                {t.selectedWork}
              </h2>
            </div>
            <a href="#contact" className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-300 transition hover:text-[#f5ff00]">
              {t.requestQuote}
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ scale: 1.02, y: -4 }}
                onMouseEnter={() => handleProjectHover(index)}
                onMouseLeave={handleProjectLeave}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-950"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                <video
                  ref={(el) => {
                    videoRefs.current[index] = el
                  }}
                  src={project.video}
                  poster={project.thumb}
                  muted={hoveredProject !== index}
                  playsInline
                  autoPlay
                  loop
                  className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                    hoveredProject === index ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
                  }`}
                />

                <img
                  src={project.thumb}
                  alt={project.title}
                  className={`h-[330px] w-full object-cover transition duration-500 ${
                    hoveredProject === index ? 'scale-105 opacity-0 contrast-125' : 'opacity-100 contrast-125'
                  }`}
                />

                <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-4 sm:p-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#f5ff00]">{project.category}</p>
                    <h3 className="mt-2 text-xl font-black uppercase tracking-[-0.04em] text-white">{project.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation()
                      setSelectedProject(project)
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/45 text-lg text-white backdrop-blur-sm transition group-hover:border-[#f5ff00] group-hover:text-[#f5ff00]"
                    aria-label={`${t.openVideo} ${project.title}`}
                  >
                    ▶
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="editor-projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="py-8"
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.32em] text-[#f5ff00]">
                {t.partnership}
              </p>
              <h2 className="text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl">
                {t.partnershipTitle}
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {editorProjects.map((project, index) => {
              const globalIndex = projects.length + index

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  onMouseEnter={() => handleProjectHover(globalIndex)}
                  onMouseLeave={handleProjectLeave}
                  onClick={() => setSelectedProject(project)}
                  className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-950"
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                  <video
                    ref={(el) => {
                      videoRefs.current[globalIndex] = el
                    }}
                    src={project.video}
                    poster={project.thumb}
                    muted={hoveredProject !== globalIndex}
                    playsInline
                    autoPlay
                    loop
                    className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                      hoveredProject === globalIndex ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
                    }`}
                  />

                  <img
                    src={project.thumb}
                    alt={project.title}
                    className={`h-[330px] w-full object-cover transition duration-500 ${
                      hoveredProject === globalIndex ? 'scale-105 opacity-0 contrast-125' : 'opacity-100 contrast-125'
                    }`}
                  />

                  <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-4 sm:p-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#f5ff00]">{project.category}</p>
                      <h3 className="mt-2 text-xl font-black uppercase tracking-[-0.04em] text-white">{project.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        setSelectedProject(project)
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/45 text-lg text-white backdrop-blur-sm transition group-hover:border-[#f5ff00] group-hover:text-[#f5ff00]"
                      aria-label={`${t.openVideo} ${project.title}`}
                    >
                      ▶
                    </button>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid gap-8 py-14 md:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="grunge-panel rounded-[2rem] border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-[#f5ff00]">{t.about}</p>
            <h2 className="text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-4xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300">
              {t.aboutText}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {serviceOptions[language].map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center rounded-full border border-[#f5ff00]/60 bg-[#f5ff00]/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5ff00]"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="grunge-panel rounded-[2rem] border border-zinc-800 bg-[#f5ff00] p-5 text-black sm:p-6">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.32em] text-black/80">{t.pricingTitle}</p>
            <div className="space-y-3">
              {pricingOptions[language].map((item) => (
                <div key={item.label} className="border-b border-black/20 pb-3 last:border-0 last:pb-0">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-black/70">{item.label}</p>
                  <p className="mt-1 text-lg font-black uppercase tracking-[-0.05em]">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-none border-2 border-black bg-[#f5ff00] px-3 py-2 text-[9px] font-black uppercase tracking-[0.18em] shadow-[3px_3px_0_#000]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={closeSelectedProject}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-[#f5ff00]/60 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 bg-black/80 px-4 py-3 sm:px-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#f5ff00]">{t.preview}</p>
                <h3 className="mt-1 text-lg font-black uppercase tracking-[-0.04em] text-white sm:text-xl">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeSelectedProject}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-lg text-white transition hover:border-[#f5ff00] hover:text-[#f5ff00]"
                aria-label={language === 'pt' ? 'Fechar player' : 'Close player'}
              >
                ×
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              <video
                ref={modalVideoRef}
                src={selectedProject.video}
                controls
                playsInline
                webkit-playsinline="true"
                preload="metadata"
                poster={selectedProject.thumb}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      <footer id="contact" className="relative border-t border-zinc-800 bg-black/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f5ff00]">{t.contact}</p>
            <a
              href="https://x.com/zssparkin"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-xl font-black uppercase tracking-[-0.04em] text-white transition-colors duration-200 hover:text-[#f5ff00]"
            >
              @zssparkin
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 sm:justify-end">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-2 transition-all duration-200 hover:border-[#f5ff00] hover:text-[#f5ff00]"
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

export default function App() {
  const isMobile = useIsMobile()
  const [language, setLanguage] = useState('pt')

  // A lógica de desktop/mobile foi separada aqui para preservar a versão atual
  // e trocar apenas o layout em telas pequenas, sem mexer no comportamento da desktop.
  if (isMobile) {
    return <MobileLandingPage language={language} setLanguage={setLanguage} />
  }

  return <DesktopLandingPage language={language} setLanguage={setLanguage} />
}
