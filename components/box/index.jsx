import Image from "next/image"

export default function Box({ nome = 'Nome', badges = [{URL: "/C++_Logo.svg", alt: "C++"},
    {URL: "/next-icon.svg", alt: "Next"},] }) {
  return(
    <div className="w-full h-full flex flex-col gap-1">
      <p className="font-mono">{ nome }</p>
      <div className="w-full h-full bg-background shadow-inset-deep grid grid-rows-1 items-center justify-items-center grid-cols-5 rounded-lg">
        {badges.map((item) => (
          <div className="w-full h-full relative group flex justify-center items-center transition-all duration-300 hover:bg-escura-2 not-dark:hover:bg-clara-2 rounded-lg" key={item.alt}>
            <span className="absolute scale-0 not-md:scale-100 bottom-0.5  group-hover:scale-100 transition-all duration-300">{item.alt}</span>
            <Image 
              className="group-hover:scale-115 transition-all duration-300 dark:block hidden"
              src={item.URL}
              alt={item.alt}
              width={30}
              height={30}
              title={item.alt}
            />
            <Image 
              className="group-hover:scale-115 transition-all duration-300 dark:hidden"
              src={item.URL_black}
              alt={item.alt}
              width={30}
              height={30}
              title={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}