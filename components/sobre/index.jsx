'use client'
import RevealItem from '@/components/reveal/'
import Image from 'next/image'
import './style.css'
import { useEffect, useState, useRef } from 'react';

export default function Sobre() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);


  useEffect(() => {
      const handleGlobalMouseMove = (e) => {
        if (!imageRef.current) return;

        const rect = imageRef.current.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        //console.log(centerX, " asdad ", centerY);
        setMousePos({
          x: ((e.clientX - centerX)/1000) * 45,
          y: ((e.clientY - centerY)/500) * 45,
        });
      };
      // Dentro do return do useEffect, você pode adicionar:
      
      const handleMouseOut = () => setMousePos({ x: 0, y: 0 });

      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseout', handleMouseOut);

      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove);
        window.removeEventListener('mouseout', handleMouseOut);
      };
    }, [])

  return(
    <div onMouseLeave={() => setMousePos({ x: 0, y: 0 })} className='h-dvh flex flex-col  items-center justify-center text-xl bg-second-bg snap-start' id='sobre'>
      <RevealItem yOffset={-50}>
       <h1 className='text-3xl uppercase font-bold text-azul mt-10'>Sobre MIM</h1>
      </RevealItem>
      <section className='flex not-md:flex-col'>
        <div className='w-full flex flex-col gap-8 justify-center items-center not-md:p-4 p-20'>
        <RevealItem xOffset={-50} yOffset={0}>
          <p>
            Sou um <span className='uppercase font-bold text-azul'>desenvolvedor Full Stack</span> apaixonado por transformar <span className='text-[#ffb238] uppercase font-bold'>ideias</span> complexas em <span className='text-azul uppercase font-bold'>interfaces</span> intuitivas e <span className='text-azul uppercase font-bold'>sistemas</span> robustos. Com foco no ecossistema Next.js e Node.js, busco sempre o equilíbrio entre performance e design.
          </p>
        </RevealItem>
        <RevealItem xOffset={50} yOffset={0}>
        <p>
          Cursando o 5º semestre de <span className='uppercase font-bold text-azul'>Engenharia da Computação</span>, sigo em constante evolução para dominar o ciclo completo de desenvolvimento de software. Sou um desenvolvedor proativo, focado em transformar desafios lógicos em sistemas eficientes e escaláveis. Meu objetivo é aplicar meu conhecimento técnico para construir <span className='uppercase font-bold text-azul'>soluções</span> que gerem <span className='text-[#ffb238] uppercase font-bold'>impacto</span> real e ajudem você a alcançar seus objetivos.
        </p>
        </RevealItem>
        </div>
        <div className='not-md:hidden w-full h-125 relative flex justify-center items-center'>
          {/* O Wrapper do Brilho: drop-shadow segue os pixels visíveis da máscara */}
          <div className="drop-shadow-neon transition-transform duration-300 hover:scale-105"
              style={{
                '--mouse-x': `${mousePos.x}`,
                '--mouse-y': `${mousePos.y}`,
              }}>
            
            <div 
              ref={imageRef}
              className="mask-image relative w-80 h-80 md:w-110 md:h-110"
              style={{
                transform: `perspective(1000px) rotateX(${-mousePos.y}dedg) rotateY(${mousePos.x}deg)`
              }}>
              <Image 
                className="z-10 object-cover"
                src='/selfieJPG.jpeg'
                alt="Minha Selfie"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}