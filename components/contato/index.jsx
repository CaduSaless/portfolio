import RevealItem from '@/components/reveal/'
import Link from 'next/link'
import Image from 'next/image'

export default function Contato() {
  return(
    <div id="contato" className=" flex flex-col gap-5 h-dvh w-full max-w-full items-center snap-start  justify-center bg-second-bg overflow-hidden">
      <RevealItem yOffset={-50}>
        <h1 className='text-3xl uppercase font-bold font-inter text-foreground z-50 mt-10'>Vamos conversar</h1>
      </RevealItem>

      <section className='flex flex-row not-md:flex-col gap-5 items-center justify-center w-full not-md:h-8/12 h-80'>
        <RevealItem delay={.2} yOffset={0} xOffset={-50}>
        <aside className='w-lg h-full flex flex-col not-md:border-b not-md:py-4 not-md:w-sm gap-4 justify-center items-center px-2'>
          <p className='text-xl font-medium font-inter mx-2'>Tem um projeto <span className='text-azul uppercase'>incrível</span> em mente? Vamos criar juntos.</p>

          <nav >
            <ul className='flex flex-col gap-1 font-inter '>
              <li className='w-fit'>
                <Link                    
                href={"https://www.linkedin.com/in/carlos-eduardo-saless/"}
                target='_blank'
                className="flex gap-2 underline text-azul hover:text-cyan-300">
                <Image 
                  src='/linkedin-icon.svg'
                  alt='Linkedin'
                  width={30}
                  height={30}
                  className='dark:block hidden'
                  />
                  <Image 
                  src='/linkedin-icon-black.svg'
                  alt='Linkedin'
                  width={30}
                  height={30}
                  className='dark:hidden'
                  />
                  https://www.linkedin.com/in/carlos-eduardo-saless/</Link>
              </li>
              <li className='w-fit'>
                <Link                    
                href={"https://github.com/CaduSaless"}
                target='_blank'
                className="flex gap-2 underline text-azul hover:text-cyan-300">
                  <Image
                    src='/github-icon.svg'
                    alt='Linkedin'
                    width={30}
                    height={30}
                    className='dark:block hidden'
                    />
                    <Image
                    src='/github-icon-black.svg'
                    alt='Linkedin'
                    width={30}
                    height={30}
                    className='dark:hidden'
                    />
                  https://github.com/CaduSaless</Link>
              </li>
              <li className='w-fit'>
                <Link                    
                href={"mailto:carlos.salesdev@gmail.com"}
                className="flex gap-2 underline text-azul hover:text-cyan-300">
                <Image 
                  src='/email-icon.svg'
                  alt='Linkedin'
                  width={30}
                  height={30}
                  className='dark:block hidden'
                  />
                  <Image 
                  src='/email-icon-black.svg'
                  alt='Linkedin'
                  width={30}
                  height={30}
                  className='dark:hidden'
                  />
                carlos.salesdev@gmail.com</Link>
              </li>
            </ul>
          </nav>
        </aside>
        </RevealItem>
        <RevealItem delay={.2} yOffset={0} xOffset={50}>
        <aside className=' md:border-l not-md:py-2 not-md:w-md font-inter text-xl font-medium w-lg h-full flex flex-col gap-4 justify-center items-center px-10'>
          <p className='text-center'>Para conversas diretas e orçamentos rápidos, o <span className='text-green-400 uppercase'>WhatsApp</span> é a melhor escolha.</p>
          <p className='text-lg'>Clique abaixo para iniciar.</p>
          <Link         
          target='_blank'
          className='text-white flex gap-2 items-center bg-green-500 hover:bg-green-400 hover:scale-105 transition-all duration-300 p-3 px-5 rounded-xl'
          href={"https://wa.me/5567993354035?text=Olá%20Carlos,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"}>
            <Image 
                  src='/whatsapp-icon.svg'
                  alt='Whatsapp'
                  width={30}
                  height={30}
                  />
            Chamar no WhatsApp
          </Link>
          
        </aside>
        </RevealItem>
      </section>
    </div>
  )
}