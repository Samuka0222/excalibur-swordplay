import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@ui/components/Card";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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
        <Card className="w-full md:w-[90%] lg:w-[700px] bg-primary text-white mt-4">
          <CardHeader>
            <CardTitle className="text-center font-medieval">Swordplay na Comic-Sul 2024</CardTitle>
          </CardHeader>
          <CardContent className="w-full flex-col justify-center items-center">
            <div className="w-full flex gap-8 justify-center items-center">
              <img src="/img/logo-excalibur-swordplay-md.png" alt="logo do Excalibur Swordplay" className="w-32 h-32" />
              <div className="w-32 h-32 border border-white text-center">
                Logo da Comic-Sul 2024
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center font-semibold text-xl mt-6 gap-2">
              <h3>23 de Novembro de 2024</h3>
              <h4 className="text-lg flex gap-2 items-center"><MapPin /> Shopping Santa Cruz</h4>
            </div>
          </CardContent>
          <CardFooter className="text-center flex flex-col justify-center items-center">
            <span className="text-lg mb-2">Para mais informações</span>
            <motion.div
              whileHover={{
                scale: 1.05,
                color: "#9ca3af",
              }}
            >
              <a href="/eventos" className="text-primary bg-secondary font-medium text-base w-full rounded-lg p-3 transition-colors hover:text-primary hover:bg-secondary flex justify-center items-center">
                Entre no nosso grupo
                <img
                  src="/img/whatsapp.svg"
                  alt="botão para grupo do whatsapp"
                  className="w-6 h-6 ml-2"
                />
              </a>
            </motion.div>
          </CardFooter>
        </Card>
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
