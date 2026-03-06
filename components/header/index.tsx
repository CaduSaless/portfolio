'use client'; // Importante se estiver usando a App Router do Next.js

import { useActiveSection } from '@/hooks/useActiveSection';
import { useState } from 'react';
import Link from 'next/link';
import RevealItem from '@/components/reveal/'
import Image from 'next/image';


export default function Header() {

  const activeSection = useActiveSection(['hero', 'sobre', 'projetos', 'techs', 'contato']);
  const [activeMenu, setActiveMenu] = useState(false)

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Projetos', id: 'projetos' },
    { name: 'Habilidades', id: 'techs' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Contato', id: 'contato' },
  ];

  return (

    <header className="fixed flex justify-between p-10 px-20 top-0 left-0 z-50 w-full">
      <RevealItem duration={1.1} yOffset={0} delay={.1}> 
      <Link href={"https://wa.me/5567993354035?text=Olá%20Carlos,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"} 
      className='hover:scale-105 not-md:absolute not-md:top-8 not-md:left-8  flex justify-center items-center hover:bg-white/10 duration-150 z-40 border hover:shadow md:mt-4 border-foreground dark:border-white/20 backdrop-blur-[1px] rounded-4xl bg-white/5'>
        <p className='uppercase rounded-4xl p-2 px-4 text-center not-md:text-xs block bg-transparent text-md '>Contatar-me &#9997;</p>
      </Link>
      </RevealItem>
      <button 
        className="md:hidden fixed top-8 right-8 z-50 p-2 bg-white/5 rounded-lg border not-dark:bg-black/5 not-dark:border-black/10 border-white/10" 
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <Image
          src={activeMenu ? '/close-icon-white.svg' : '/menu-icon-white.svg'}
          alt='menu toggle'
          width={24}
          height={24}
          className='dark:block hidden'
        />
        <Image
          src={activeMenu ? '/close-icon.svg' : '/menu-icon.svg'}
          alt='menu toggle'
          width={24}
          height={24}
          className='dark:hidden'
        />
      </button>
      <nav className={`flex gap-8 justify-center not-md:hidden`}>
        {/* O 'flex-1' faz o li ocupar o máximo de espaço igual aos outros */}
          {navItems.map((item) => (
              <RevealItem duration={1.1} key={item.id} delay={.1}>
                <Link 
                   
                  href={`#${item.id}`}
                  className={`relative flex h-16 items-center justify-center font-semibold transition-colors duration-300  ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white not-dark:hover:text-gray-900'
                  }`}
                  >
                  {item.name}
                  
                  {/* O Sublinhado Animado */}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-0.5 left-0 w-full -translate-y-2 h-0.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee] duration-300 transition-all" />
                  )}
                </Link>
              </RevealItem>
          ))}
      </nav>

      {/* Mobile menu */}

      <nav className={`transition-all duration-300 absolute top-0 right-0 w-64 bg-background h-dvh flex flex-col gap-2 justify-center z-40 ${activeMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* O 'flex-1' faz o li ocupar o máximo de espaço igual aos outros */}
          {navItems.map((item) => (
            <RevealItem duration={1.1} key={item.id} delay={.1}>
                <Link 
                   
                   href={`#${item.id}`}
                   className={`relative flex h-16 items-center justify-center font-semibold transition-colors duration-300  ${
                     activeSection === item.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white not-dark:hover:text-gray-900'
                    }`}
                    >
                  {item.name}
                </Link>
              </RevealItem>
          ))}
      </nav>
    </header>

  );
}