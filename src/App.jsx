import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import avatar from '../imagens/banner-e-foto/channels4_profile.jpg'

// As thumbnails (imagens) continuam locais, elas são super leves
const thumbOne = new URL('../imagens/videos/gmod.webp', import.meta.url).href
const thumbTwo = new URL('../imagens/videos/valorantcomamigos.JPEG', import.meta.url).href
const thumbThree = new URL('../imagens/videos/issonaoeumaia.webp', import.meta.url).href
const thumbFour = new URL('../imagens/videos/a MELHOR e a PIOR NOTA de cada FRANQUIA [nn1uFu5I-wY].webp', import.meta.url).href
const thumbFive = new URL('../imagens/videos/A DECADÊNCIA dos jogos LEGO [ED_Xl8jK6Ho].webp', import.meta.url).href
const thumbSix = new URL('../imagens/videos/AZUN INTRO METAMORFOSE (@ZSSPARKIN) [J4eBF25OXT0].jpeg', import.meta.url).href

// 🚀 Aqui entram os links diretos gerados pelo painel do Vercel Blob:
const videoOne = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/gmod.mkv'
const videoTwo = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/valorantcomamigos.mkv'
const videoThree = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/issonaoeumaia.mkv'
const videoFour = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/a%20MELHOR%20e%20a%20PIOR%20NOTA%20de%20cada%20FRANQUIA.mkv'
const videoFive = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/A%20DECAD%C3%8ANCIA%20dos%20jogos%20LEGO.mkv'
const videoSix = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/AZUN%20INTRO%20METAMORFOSE%20%28%40ZSSPARKIN%29.mkv'

// ... O restante do seu código (projects, handleProjectHover, refs, etc.) continua IGUAL!


const letters = ['S', 'P', 'A', 'R', 'K', 'I', 'N']

const socials = [
  { label: 'Twitter', href: 'https://x.com/osparkin' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@sousparkin' },
  { label: 'E-mail', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sparkineditor.contato@gmail.com&su=Pedido%20de%20edi%C3%A7%C3%A3o&body=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20pedir%20uma%20edi%C3%A7%C3%A3o%20sua.%20Pode%20me%20ajudar%3F' },
]

const services = [
  'Edição de vídeo',
  'Criador de conteúdo',
  'Long-form',
]

const pricing = [
  { label: 'Vídeos 10 min', value: 'R$ 200 / R$ 150' },
  { label: 'Partes menores', value: 'R$ 90 / R$ 75' },
  { label: 'Projetos maiores', value: 'Preço negociável' },
]

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function App() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [hasUserInteraction, setHasUserInteraction] = useState(false)
  const videoRefs = useRef([])
  const modalVideoRef = useRef(null)

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
                Eu o Sparkin
              </p>
              <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-400">editor</p>
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

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[#f5ff00] bg-[#f5ff00] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-[#f5ff00]"
          >
            Contato
          </a>
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
              editor de vídeo
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
              sou Sparkin, editor de vídeo e criador de conteúdo. Tenho experiência em DaVinci, After Effects e Premiere,
              <span className="text-[#f5ff00]"> e crio video com a energia, ritmo e identidade visual de sua preferencia!</span>
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.02, x: -2 }}
                whileTap={{ scale: 0.98 }}
                className="magnetic-button group inline-flex items-center justify-center rounded-none border-2 border-black bg-[#f5ff00] px-6 py-3 text-sm font-black uppercase tracking-[0.22em] text-black shadow-[8px_8px_0_#000] transition-all duration-300"
              >
                <span className="relative z-10">Ver Portfólio</span>
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ y: -2 }}
                className="inline-flex items-center justify-center border border-zinc-700 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-100 transition hover:border-[#f5ff00] hover:text-[#f5ff00]"
              >
                Sobre
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
                <p className="text-[10px] uppercase tracking-[0.38em] text-[#f5ff00]">Disponível para projetos</p>
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
                selected work
              </p>
              <h2 className="text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl">
                meus videos
              </h2>
            </div>
            <a href="#contact" className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-300 transition hover:text-[#f5ff00]">
              Solicitar orçamento
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
                    aria-label={`Abrir vídeo de ${project.title}`}
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
                para outros youtubers
              </p>
              <h2 className="text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl">
                trabalhos em parceria
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
                      aria-label={`Abrir vídeo de ${project.title}`}
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
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-[#f5ff00]">Sobre</p>
            <h2 className="text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-4xl">
              editor de vídeo e criador de conteúdo.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300">
              Sou o Sparkin, editor de vídeo e criador de conteúdo. Para criar videos no seu estilo de preferencia, meu foco é entregar edições com o maximo de qualidade que minha habilidade permite, e sem contar, com a comunicação de trabalho, aonde em minha opinião, é minha segunda ferramenta mais forte de trabalho!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {services.map((service) => (
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
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.32em] text-black/80">Preços base</p>
            <div className="space-y-3">
              {pricing.map((item) => (
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
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#f5ff00]">preview</p>
                <h3 className="mt-1 text-lg font-black uppercase tracking-[-0.04em] text-white sm:text-xl">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeSelectedProject}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-lg text-white transition hover:border-[#f5ff00] hover:text-[#f5ff00]"
                aria-label="Fechar player"
              >
                ×
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              <video
                ref={modalVideoRef}
                src={selectedProject.video}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      <footer id="contact" className="relative border-t border-zinc-800 bg-black/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f5ff00]">Contato</p>
            <a
              href="https://x.com/osparkin"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-xl font-black uppercase tracking-[-0.04em] text-white transition-colors duration-200 hover:text-[#f5ff00]"
            >
              @osparkin
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-400 sm:justify-end">
            {socials.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-[#f5ff00]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
