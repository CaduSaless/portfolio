'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '@/components/card/'
import RevealItem from '@/components/reveal/'

export default function Projetos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [exit, setExit] = useState(-50)

  const nextCard = () => {
    setExit(-50)
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevCard = () => {
    setExit(50)
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  
  const minhasTechs = [
    { nome: 'Next.js', cor: '#00f2ff' },
    { nome: 'Tailwind', cor: '#38bdf8' },
    { nome: 'Node.js', cor: '#4ade80' },
    { nome: 'PostgreSQL', cor: '#bf9aca' },
    { nome: 'React.js', cor: '#e71d36' },
  ];
  const front = [{ nome: 'Next.js', cor: '#00f2ff' },
    { nome: 'Tailwind', cor: '#38bdf8' },
    { nome: 'React.js', cor: '#e71d36' }
  ]
  const pythonWEB = [
    { nome: 'Flask', cor: '#72705b' },
    { nome: 'SQLite', cor: '#ffb238' },
  ]

  const cards = [
    {nome:"Cadastro APP", imageUrl:'/cadastro_screenshot.png', detalhes:"Primeiro contato com desenvolvimento WEB, aplicação intuitiva CRUD feito em projeto da faculdade. login:projetofacfan@gmail.com, senha:projeto123", cor:"#ff00ff", techs: pythonWEB},
    {nome:"Finance CONTROL", imageUrl:'/financeAPP_screenshot.png', detalhes:"Projeto pessoal em desenvolvimento. Ecossistema de gestão financeira focado em atrito zero para o usuário. Performance, foco em UX, escalabilidade", cor:"#00ffff", techs: minhasTechs},
    {nome:"Portfólio", imageUrl:'/portfolio_screenshot.png', detalhes:"Mais recentemente desenvolvido, este site vem mostrar minhas habilidades como programador frontend como modo Manipulação do Scroll", cor:"#9d00ff", techs: front}
  ]

  return(
    <div id='projetos' className="h-dvh bg-background w-full flex flex-col flex-wrap snap-start justify-center content-center gap-5 items-center" >
        
        <RevealItem yOffset={-50}>
        <h1 className='text-3xl uppercase font-bold text-azul mt-10'>Projetos</h1>
        </RevealItem>

        <div className='not-md:hidden flex justify-center content-center gap-4 items-center'>
        <RevealItem delay={0}>
          <Card nome="Cadastro APP" imageUrl={'/cadastro_screenshot.png'} detalhes="Primeiro contato com desenvolvimento WEB, aplicação intuitiva CRUD feito em projeto da faculdade. login:projetofacfan@gmail.com, senha:projeto123" cor="#ff00ff" techs={pythonWEB}/>
        </RevealItem>
        <RevealItem delay={.2}>
          <Card nome="Finance CONTROL" imageUrl={'/financeAPP_screenshot.png'} detalhes="Projeto pessoal em desenvolvimento. Ecossistema de gestão financeira focado em atrito zero para o usuário. Performance, foco em UX, escalabilidade" cor="#00ffff" techs={minhasTechs}/>
        </RevealItem>
        <RevealItem delay={.4}>
          <Card nome="Portfólio" detalhes="Mais recentemente desenvolvido, este site vem mostrar minhas habilidades como programador frontend como modo
          Manipulação do Scroll" cor="#9d00ff" imageUrl={'/portfolio_screenshot.png'} techs={front}/>
        </RevealItem>
        </div>

        {/* LAYOUT MOBILE: Carrossel de 1 card */}
        <div className="md:hidden flex flex-col items-center gap-6 relative">
          <div className="w-full flex justify-center min-h-100">
            <AnimatePresence mode="wait">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x < -100) nextCard()
                  else if (offset.x > 100) prevCard()
                }}

                key={currentIndex}
                initial={{ opacity: 0, x: (exit*(-1)) }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: exit}}
                transition={{ duration: 0.3 }}
                className="w-full flex justify-center"
              >
                <Card nome={cards[currentIndex].nome} imageUrl={cards[currentIndex].imageUrl} detalhes={cards[currentIndex].detalhes} cor={cards[currentIndex].cor} techs={cards[currentIndex].techs}/>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles do Carrossel */}
          <div className="flex gap-10 items-center mt-4">
            <button 
              onClick={prevCard}
              className="p-3 rounded-full border border-cyan-400/30 text-cyan-400 bg-white/5 active:scale-90 transition-all shadow-[0_0_10px_rgba(34,211,238,0.2)]"
            >
              &#10094; {/* Seta Esquerda */}
            </button>
            
            <span className="font-mono text-gray-400 text-sm">
              {currentIndex + 1} / {cards.length}
            </span>

            <button 
              onClick={nextCard}
              className="p-3 rounded-full border border-cyan-400/30 text-cyan-400 bg-white/5 active:scale-90 transition-all shadow-[0_0_10px_rgba(34,211,238,0.2)]"
            >
              &#10095; {/* Seta Direita */}
            </button>
          </div>
        </div>
      </div>
  )
}