import { useState } from 'react'
import { motion } from 'framer-motion'
import avatar from '../../../imagens/banner-e-foto/channels4_profile.jpg'

const mobileThumbOne = new URL('../../../imagens/videos/gmod.webp', import.meta.url).href
const mobileThumbTwo = new URL('../../../imagens/videos/valorantcomamigos.JPEG', import.meta.url).href
const mobileThumbThree = new URL('../../../imagens/videos/issonaoeumaia.webp', import.meta.url).href
const mobileThumbFour = new URL('../../../imagens/videos/a MELHOR e a PIOR NOTA de cada FRANQUIA [nn1uFu5I-wY].webp', import.meta.url).href
const mobileThumbFive = new URL('../../../imagens/videos/A DECADÊNCIA dos jogos LEGO [ED_Xl8jK6Ho].webp', import.meta.url).href
const mobileThumbSix = new URL('../../../imagens/videos/AZUN INTRO METAMORFOSE (@ZSSPARKIN) [J4eBF25OXT0].jpeg', import.meta.url).href

const videoOne = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/gmod.mkv'
const videoTwo = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/valorantcomamigos.mkv'
const videoThree = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/issonaoeumaia.mkv'
const videoFour = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/a%20MELHOR%20e%20a%20PIOR%20NOTA%20de%20cada%20FRANQUIA.mkv'
const videoFive = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/A%20DECAD%C3%8ANCIA%20dos%20jogos%20LEGO.mkv'
const videoSix = 'https://lacolrwipmkx0s1j.public.blob.vercel-storage.com/AZUN%20INTRO%20METAMORFOSE%20%28%40ZSSPARKIN%29.mkv'

const socials = [
  { label: 'Twitter', href: 'https://x.com/osparkin' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@sousparkin' },
  { label: 'E-mail', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sparkineditor.contato@gmail.com&su=Pedido%20de%20edi%C3%A7%C3%A3o&body=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20pedir%20uma%20edi%C3%A7%C3%A3o%20sua.%20Pode%20me%20ajudar%3F' },
]

const services = ['Edição de vídeo', 'Criador de conteúdo', 'Long-form']

const pricing = [
  { label: 'Vídeos 10 min', value: 'R$ 200 / R$ 150' },
  { label: 'Partes menores', value: 'R$ 90 / R$ 75' },
  { label: 'Projetos maiores', value: 'Preço negociável' },
]

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

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: 'easeOut' },
  },
}

export default function MobileLandingPage() {
  const [selectedProject, setSelectedProject] = useState(null)

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
              <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#f5ff00]">Eu o Sparkin</p>
              <p className="mt-1 text-[7px] uppercase tracking-[0.25em] text-zinc-400">editor</p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#f5ff00] bg-[#f5ff00] px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-black"
          >
            Contato
          </a>
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
            editor de vídeo
          </div>

          <h1 className="mb-4 text-5xl font-black uppercase leading-[0.8] tracking-[-0.08em] text-white">
            <span className="block">SPARK</span>
            <span className="block text-[#f5ff00]">IN</span>
          </h1>

          <p className="mx-auto max-w-sm text-sm leading-6 text-zinc-300">
            sou Sparkin, editor de vídeo e criador de conteúdo. Crio edições com energia, ritmo e identidade visual que fazem o conteúdo se destacar.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#portfolio"
              className="inline-flex min-h-[48px] items-center justify-center rounded-none border-2 border-black bg-[#f5ff00] px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-black shadow-[6px_6px_0_#000]"
            >
              Ver Portfólio
            </a>

            <a
              href="#about"
              className="inline-flex min-h-[48px] items-center justify-center border border-zinc-700 bg-transparent px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-100"
            >
              Sobre
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
              <p className="text-[8px] uppercase tracking-[0.32em] text-[#f5ff00]">Disponível para projetos</p>
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
              <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.28em] text-[#f5ff00]">selected work</p>
              <h2 className="text-2xl font-black uppercase tracking-[-0.06em] text-white">meus videos</h2>
            </div>
          </div>

          <div className="space-y-4">
            {mobileProjects.map((project) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group relative block w-full overflow-hidden rounded-[1.4rem] border border-zinc-800 bg-zinc-950 text-left"
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
            <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.28em] text-[#f5ff00]">para outros youtubers</p>
            <h2 className="text-2xl font-black uppercase tracking-[-0.06em] text-white">trabalhos em parceria</h2>
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
            <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.28em] text-[#f5ff00]">Sobre</p>
            <h2 className="text-2xl font-black uppercase tracking-[-0.06em] text-white">editor de vídeo e criador de conteúdo.</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-300">
              Sou o Sparkin, editor de vídeo e criador de conteúdo. Meu foco é entregar edições com qualidade, ritmo e comunicação clara, criando vídeos que se conectam com o público e fortalecem a identidade do canal.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => (
                <span key={service} className="inline-flex items-center rounded-full border border-[#f5ff00]/60 bg-[#f5ff00]/5 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#f5ff00]">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="grunge-panel rounded-[1.5rem] border border-zinc-800 bg-[#f5ff00] p-4 text-black">
            <p className="mb-3 text-[8px] font-black uppercase tracking-[0.32em] text-black/80">Preços base</p>
            <div className="space-y-3">
              {pricing.map((item) => (
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
                <p className="text-[8px] uppercase tracking-[0.28em] text-[#f5ff00]">preview</p>
                <h3 className="mt-1 text-base font-black uppercase tracking-[-0.04em] text-white">{selectedProject.title}</h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-lg text-white"
                aria-label="Fechar player"
              >
                ×
              </button>
            </div>

            <div className="h-[calc(100vh-68px)] w-full bg-black">
              <video
                src={selectedProject.video}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      <footer id="contact" className="relative border-t border-zinc-800 bg-black/70">
        <div className="mx-auto flex max-w-md flex-col gap-5 px-4 py-6 text-center">
          <div>
            <p className="text-[8px] uppercase tracking-[0.32em] text-[#f5ff00]">Contato</p>
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
