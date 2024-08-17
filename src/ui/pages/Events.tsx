import { NextEventCard } from "@ui/components/NextEventCard"


export default function Events() {
  // TODO: Add to a Mock file
  const swordplay2023Photos = [
    {
      src: '/img/swordplay-fotos-1.jpg',
      alt: 'Dois jogadores se encarando antes da batalha no Swordplay na Comic-Sul 2023',
    },
    {
      src: '/img/swordplay-fotos-2.jpg',
      alt: 'Dois jogadores iniciando a batalha no evento de Swordplay na Comic-Sul 2023',
    },
    {
      src: '/img/swordplay-fotos-3.jpg',
      alt: 'Dois cosplayers no evento de Swordplay na Comic-Sul 2023',
    },
    {
      src: '/img/swordplay-fotos-4.jpg',
      alt: 'Duas crianças duelando no Swordplay na Comic-Sul 2023',
    },
    {
      src: '/img/swordplay-fotos-5.jpg',
      alt: 'Duas crianças duelando no Swordplay na Comic-Sul 2023',
    },
  ]

  // TODO: Add Animations
  // TODO: Ensure that the scroll in on top of the screen when enter this page through link button on Home Page
  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-white mt-[140px] lg:mt-[200px] px-5 py-6">
      <h1 className="font-medieval font-bold text-2xl text-center">
        <span className="text-4xl">E</span>ventos de Swordplay
      </h1>
      <div className="w-full mt-10 flex flex-col justify-center items-center">
        <h2 className="w-fit font-medieval font-semibold text-xl text-center border-b border-gray-500 py-1">Próximo Evento de Swordplay:</h2>
        <NextEventCard />
      </div>
      <div className="w-full mt-16 flex flex-col justify-center items-center mb-24">
        <h2 className="font-medieval font-semibold text-xl text-center border-b border-gray-500 py-1">
          Swordplay na Comic-Sul 2023
        </h2>
        <ul className="w-full flex flex-col justify-center items-center gap-4 lg:gap-x-8 lg:flex-row lg:flex-wrap xl:gap-x-32">
          {
            swordplay2023Photos.map((photo, index) => (
              <li key={index} className="mt-10">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-[350px] xl:w-[400px] object-cover rounded-lg shadow-md hover:scale-110 transition-transform"
                />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
