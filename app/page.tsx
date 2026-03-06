import Hero from '@/components/hero'
import Projetos from '@/components/projetos/'
import Contato from '@/components/contato/'
import Techs from '@/components/techs/'
import Sobre from '@/components/sobre/'
import './style.css'

export default function Home() {
  return (
    <div className="h-dvh relative interface scroll-smooth snap-mandatory snap-y overflow-y-scroll bg-background">
      <Hero/>
      <Projetos/>
      <Techs/>
      <Sobre/>
      <Contato/>
    </div>
  );
}
