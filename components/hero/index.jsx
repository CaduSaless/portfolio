import './style.css'
import { BackgroundRippleEffect } from '@/components/ui/backgroun-ripple-effect'
import RevealItem from '@/components/reveal/'
import Link from 'next/link'

export default function Hero() {
  return(
    
    <div id='hero' className=" flex flex-col h-dvh w-full max-w-full items-center content-center snap-start  justify-center bg-linear-to-t from-background  to-transparent overflow-hidden">
      <BackgroundRippleEffect className="h-screen" rows={13}/>
      <div className='w-fit mx-5'>
      <RevealItem yOffset={-50} duration={1}>
      <h1 className="relative text-7xl font-bold custom-animated-text bg-clip-text text-transparent font-inter z-40 ">Carlos Sales Dev</h1>
      </RevealItem>
      <RevealItem yOffset={-30} duration={1} delay={.1}>
      <p className='relative z-40 ml-2 text-xl text-foreground font-mono aparecer-custom'>Soluções Full Stack escaláveis com Next.js e Node.js</p>
      </RevealItem>
      </div>
      <RevealItem yOffset={0} duration={.7} delay={.2}>
        <div className='flex gap-4 justify-center items-center'>
        <div className='relative text-background hover:scale-105 hover:bg-azul not-dark:hover:bg-[#bf9aca] hover:text-foreground duration-300 z-40 border hover:shadow   mt-4 border-foreground not-dark:border-0 dark:border-white/20 backdrop-blur-[1px] rounded-2xl bg-white not-dark:bg-escura-2'>
          <button className='uppercase rounded-2xl p-2 px-4 block bg-transparent text-xs '>Baixar CV</button>
        </div>
        <Link href={"https://wa.me/5567993354035?text=Olá%20Carlos,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"} className='relative hover:scale-105 hover:bg-white/10 duration-150 z-40 border hover:shadow mt-4 border-foreground dark:border-white/20 backdrop-blur-[1px] rounded-2xl bg-white/5'>
          <p className='uppercase rounded-2xl p-2 block bg-transparent text-xs '>Contatar-me &#9997;</p>
        </Link>
        </div> 
      </RevealItem>

    </div>
  )
}