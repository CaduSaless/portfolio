import Box from '@/components/box/'
import RevealItem from '@/components/reveal/'

export default function Techs() {
  const frameWorks = [
    {URL: "/next-icon.svg", alt: "Next", URL_black: "/next-icon-black.svg"},
    {URL: "/React-icon.svg", alt: "React", URL_black: "/React-icon.svg"},
    {URL: "/Vue-icon.svg", alt: "Vue", URL_black: "/Vue-icon.svg"},
    {URL: "/node-icon.svg", alt: "Node", URL_black: "/node-icon-black.svg"},
    {URL: "/flask-icon.svg", alt: "Flask", URL_black: "/flask-icon-black.svg"},
    
  ]

   const Infra = [
    {URL: "/Docker-icon.svg", alt: "Docker", URL_black: "/Docker-icon.svg"},
    {URL: "/Vercel.svg", alt: "Vercel", URL_black: "/vercel-icon-black.svg"},
    {URL: "/git-icon.svg", alt: "Git", URL_black: "/git-icon.svg"},
    {URL: "/github-icon.svg", alt: "GitHub", URL_black: "/github-icon-black.svg"},
    {URL: "/Cloudflare-icon.svg", alt: "Cloudflare", URL_black: "/Cloudflare-icon.svg"},
  ]

  const Linguagens = [
    {URL: "/C++-icon.svg", alt: "C++", URL_black: "/C++-icon.svg"},
    {URL: "/C-icon.svg", alt: "C", URL_black: "/C-icon.svg"},
    {URL: "/python-icon.svg", alt: "Python", URL_black: "/python-icon.svg"},
    {URL: "/javascript-icon.svg", alt: "Javascript", URL_black: "/javascript-icon.svg"},
    {URL: "/java-icon.svg", alt: "Java", URL_black: "/java-icon.svg"},
    
  ]
  const BancoDeDados = [
    {URL: "/postgres-icon.svg", alt: "Postgres", URL_black: "/postgres-icon.svg"},
    {URL: "/supabase-icon.svg", alt: "Supabase", URL_black: "/supabase-icon.svg"},
    {URL: "/sqlite-icon.svg", alt: "SQLite", URL_black: "/sqlite-icon.svg"},
  ]
  return ( 
    <div className="h-dvh flex flex-col gap-5 items-center justify-center bg-linear-to-b from-background to-second-bg to-85% snap-start" id="techs">
      <RevealItem yOffset={-50}>
        <h1 className='text-3xl uppercase font-bold text-azul mt-10'>Habilidades</h1>
      </RevealItem>
      <div className='grid grid-cols-2 w-full max-w-7xl not-md:grid-cols-1 not-md:grid-rows-4 h-full max-h-80 not-md:max-h-dvh gap-7.5 grid-rows-2 p-4 mb-10'>
        <RevealItem delay={.2} xOffset={-50}>
          <Box nome='Linguagens de Programação' badges={Linguagens}/>
        </RevealItem>
        <RevealItem delay={.2} xOffset={-50}>
          <Box nome='Frameworks e Bibliotecas' badges={frameWorks}/>
        </RevealItem>
        <RevealItem delay={.4} xOffset={-50}>
          <Box nome='Banco de Dados' badges={BancoDeDados}/>
        </RevealItem>
        <RevealItem delay={.4} xOffset={-50}>
          <Box nome='Ferramentas e infraestrutura' badges={Infra}/> {/*Docker, Git e GitHub */}
        </RevealItem>
      </div>
    </div>
  )
}