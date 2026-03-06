'use client'
import Image from "next/image"
import './style.css'
import { useEffect, useState, useRef } from 'react'

export default function Card({ nome, detalhes, cor, imageUrl, techs = [] }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  return (
    <div 
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        '--cor': `${cor}`
      }} 
      ref={cardRef}
      className={`hover-custom not-dark:bg-background bg-[#5c5c5c75] h-96 flex flex-col justify-between w-xs p-5 rounded-2xl relative`}
    >
      <h2 className="z-10 font-inter text-foreground text-lg">{ nome }</h2>
      
      <div className="relative w-70 h-42 mx-auto">
        <Image 
          className="w-full z-10 object-contain m-auto"
          src={imageUrl}
          alt="Teste"
          fill
          priority
        />
      </div>

      <p className="dark:text-gray-300 z-10 font-inter text-sm">{ detalhes }</p>

      {/* Container das Techs - Carrossel Horizontal */}
      <div className={`z-10 pt-2 overflow-hidden`}>
        <div className={`flex gap-2 ${techs.length > 3 ? 'animate-infinite-scroll' : ''}`}>

        {techs.map((tech, index) => (
          <div 
            key={index}
            style={{ 
              borderColor: `${tech.cor}66`,
              background: `${tech.cor}44`, // Cor com transparência para o "neon escuro"
              color: tech.cor,
            }}
            className="shrink-0 flex items-center justify-center  px-3 py-0.5 border rounded-full bg-black/20"
            >
            <span className="text-[10px] font-mono text-center font-bold whitespace-nowrap tracking-tight">
              {tech.nome}
            </span>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}