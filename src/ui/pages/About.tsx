import { AnimatedContainer } from "@ui/components/AnimatedContainer";
import { Check, Instagram, Swords } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-white mt-[100px] px-5 py-6">
      <h1 className="font-medieval font-bold text-2xl text-center mt-4 lg:mt-8">
        <span className="text-4xl">S</span>obre o Excalibur Swordplay
      </h1>

      <AnimatedContainer
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] mt-10 xl:flex justify-center gap-24
        "
      >
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <h2 className="w-full text-2xl font-medieval font-bold flex">
            <Swords className="mr-2 mt-1" />
            Quem nós somos?
          </h2>
          <p className="text-lg indent-6 text-justify">
            <span className="text-3xl font-medieval font-medium">O</span> <span className="font-medium underline">Excalibur Swordplay</span> é organizado por três amigos de forma independente que gostam muito do tema medieval, seja tanto de fantasia como nos RPGs, como também gostamos do medieval "realista".
          </p>
          <div className="w-full flex justify-center items-center">
            <div className="bg-primary w-fit p-3 rounded-lg">
              <img src="/images/logo-excalibur-swordplay-md.png" alt="Logo do Excalibur Swordplay" className="w-44 h-44 lg:w-56 lg:h-56" />
            </div>
          </div>
        </div>
      </AnimatedContainer>

      <AnimatedContainer
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] mt-10 xl:flex justify-center gap-24"
      >
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <h2 className="w-full text-2xl font-medieval font-bold flex">
            <Swords className="mr-2 mt-1" />
            O Swordplay sempre será junto com o Comic-Sul?
          </h2>
          <p className="text-lg indent-6 text-justify">
            <span className="text-3xl font-medieval font-medium">N</span>ão, o <span className="font-medium underline">Excalibur Swordplay</span> é independente e sempre que for possível terá mais eventos ao decorrer do ano, no qual serão noticiados, tanto no nosso site, como na página no instagram, além do nosso grupo oficial no whatsapp
          </p>
        </div>
      </AnimatedContainer>

      <AnimatedContainer
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] mt-10 xl:flex justify-center gap-24"
      >
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <h2 className="w-full text-2xl font-medieval font-bold flex">
            <Swords className="mr-2 mt-1" />
            Eu posso apoiar o evento?
          </h2>
          <p className="text-lg indent-6 text-justify">
            <span className="text-3xl font-medieval font-medium">S</span>im, como foi dito anteriomente, o <span className="font-medium underline">Excalibur Swordplay</span> é independente, então iremos em breve disponibilizar campanhas para apoio financeiro.
          </p>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 xl:gap-3 text-white mt-8">

            <div className="bg-primary w-full h-[390px] flex flex-col gap-3 justify-center items-center border border-gray-200 rounded-lg">
              <div className="w-full h-16 border-b border-gray-500 flex justify-center items-center">
                <h3 className="font-bold text-xl"><span className="text-3xl font-medieval font-medium">N</span>obre</h3>
              </div>
              <ul className="w-full h-full flex flex-col gap-2 px-2">
                <li className="flex gap-2"><Check /> Logo no Banner do evento</li>
                <li className="flex gap-2"><Check /> Logo no site</li>
                <li className="flex gap-2"><Check /> Bandeiras na arena com a logo</li>
                <li className="flex gap-2"><Check /> Logo em material</li>
                <li className="flex gap-2"><Check /> Divulgação da marca em vídeo</li>
                <li className="flex gap-2"><Check /> Divulgação no Evento</li>
              </ul>
              <div className="w-full h-20 flex justify-center items-center border-t">
                <p className="font-bold text-3xl ">
                  R$ 100,00
                </p>
              </div>
            </div>

            <div className="bg-primary w-full h-[390px] flex flex-col gap-3 justify-center items-center border border-gray-200 rounded-lg">
              <div className="w-full h-16 border-b border-gray-500 flex justify-center items-center">
                <h3 className="font-bold text-xl"><span className="text-3xl font-medieval font-medium">C</span>avaleiro</h3>
              </div>
              <ul className="w-full h-full flex flex-col gap-2 px-2">
                <li className="flex gap-2"><Check /> Logo no Banner do evento</li>
                <li className="flex gap-2"><Check /> Logo no site</li>
                <li className="flex gap-2 text-gray-600">Bandeiras na arena com a logo</li>
                <li className="flex gap-2 text-gray-600"> Logo em material</li>
                <li className="flex gap-2"><Check /> Divulgação da marca em vídeo</li>
                <li className="flex gap-2"><Check /> Divulgação no Evento</li>
              </ul>
              <div className="w-full h-20 flex justify-center items-center border-t">
                <p className="font-bold text-3xl ">
                  R$ 80,00
                </p>
              </div>
            </div>

            <div className="bg-primary w-full h-[390px] flex flex-col gap-3 justify-center items-center border border-gray-200 rounded-lg">
              <div className="w-full h-16 border-b border-gray-500 flex justify-center items-center">
                <h3 className="font-bold text-xl"><span className="text-3xl font-medieval font-medium">E</span>scudeiro</h3>
              </div>
              <ul className="w-full h-full flex flex-col gap-2 px-2">
                <li className="flex gap-2"><Check /> Logo no Banner do evento</li>
                <li className="flex gap-2 text-gray-600"> Logo no site</li>
                <li className="flex gap-2 text-gray-600"> Bandeiras na arena com a logo</li>
                <li className="flex gap-2 text-gray-600"> Logo em material</li>
                <li className="flex gap-2 text-gray-600"> Divulgação da marca em vídeo</li>
                <li className="flex gap-2"><Check /> Divulgação no Evento</li>
              </ul>
              <div className="w-full h-20 flex justify-center items-center border-t">
                <p className="font-bold text-3xl ">
                  R$ 40,00
                </p>
              </div>
            </div>

          </div>
        </div>
      </AnimatedContainer>

      <AnimatedContainer
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] mt-10 xl:flex justify-center gap-24"
      >
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <p className="text-lg text-center">
            <span className="text-3xl font-medieval font-medium">S</span>iga o <span className="font-medium underline">Excalibur Swordplay</span> nas redes sociais!
          </p>
          <div className="w-full flex justify-center items-center">
            <motion.a
              href="https://www.instagram.com/excalibur.swordplay/"
              target="_blank"
              whileHover={{
                scale: 1.1,
                color: "#9ca3af",
              }}
            >
              <Instagram />
            </motion.a>
          </div>
        </div>
      </AnimatedContainer>
    </section>
  )
}
