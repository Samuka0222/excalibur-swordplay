import { CardBody, CardContainer } from "@ui/components/3dCard";
import { AnimatedContainer } from "@ui/components/AnimatedContainer";
import { motion } from "framer-motion"
import { Banner } from "@ui/components/Banner";
import { BicepsFlexed, Calendar, Scroll, ShieldBanIcon, Sword, Swords, User } from "lucide-react";
import { Link } from "react-router-dom";
import { NextEventCard } from "@ui/components/NextEventCard";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="w-full h-full mt-[110px] xl:mt-[150px]">
      <Banner />
      <section className="w-full h-full flex flex-col justify-center items-center mt-12 bg-white py-5 px-3">
        <AnimatedContainer
          initial={{ y: 700 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] mt-10 xl:flex justify-center gap-24"
        >
          <div className="w-full xl:w-[50%] flex flex-col gap-5">
            <h2 className="w-full text-2xl font-medieval font-bold flex">
              <Swords className="mr-2 mt-1" />
              O que é o Swordplay?
            </h2>
            <p className="text-lg indent-6 text-justify">
              <span className="text-3xl font-medieval font-medium">O</span> <span className="font-medium underline">Swordplay</span>, também conhecido como Batalha de Campo, te convida a viajar no tempo e reviver a emoção dos combates medievais. Mais do que um esporte, é uma experiência imersiva que te transforma em um cavaleiro, guerreiro ou viking, empunhando espadas de espuma em batalhas épicas e jogos emocionantes.
            </p>
            <p className="text-lg indent-6 text-justify">
              <span className="text-3xl font-medieval font-medium">I</span>magine um campo aberto, onde o som de espadas se chocando ecoa pelo ar. Adrenalina e estratégia se misturam enquanto você enfrenta seus oponentes em duelos emocionantes ou batalhas campais em grupo. Essa é a essência do Swordplay, uma simulação de combate medieval que te leva para o coração da Idade Média.
            </p>
          </div>
          <CardContainer className="mb-16">
            <CardBody className="flex flex-col justify-center items-center">
              <img
                src="https://utfs.io/f/3b4ed472-4e67-47e3-a753-6df1183d8ca5-jgbhhj.jpg"
                alt="Foto do Swordplay realizado na Comic-Sul 2023"
                className="w-[350px] xl:w-[300px]"
              />
              <span className="text-center mt-1 text-medium text-sm text-gray-500">Swordplay na Comic-Sul 2023</span>
            </CardBody>
          </CardContainer>
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] xl:flex justify-center gap-24"
        >
          <div className="w-full xl:w-[80%] flex flex-col gap-5">
            <h2 className="w-full text-2xl font-medieval font-bold flex">
              <ShieldBanIcon size={25} className="mr-2 mt-1" />
              Equipamentos e Segurança
            </h2>
            <p className="text-lg indent-6 text-justify">
              <span className="text-3xl font-medieval font-medium">P</span>ara garantir a segurança e o realismo dos combates, os participantes usam espadas, machados, escudos e armaduras feitos de materiais como espuma e cano. Equipamentos leves e seguros que permitem golpes realistas sem causar danos.
            </p>
          </div>
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ y: 700 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] mt-24 xl:flex xl:justify-center xl:items-center gap-24"
        >
          <div className="w-full xl:w-[50%] flex flex-col gap-5">
            <h2 className="w-full text-2xl font-medieval font-bold flex">
              <BicepsFlexed className="mr-2 mt-1" />
              Benefícios para o Corpo e Mente
            </h2>
            <p className="text-lg indent-6 text-justify">
              <span className="text-3xl font-medieval font-medium">O</span> <span className="font-medium underline">Swordplay</span> vai além da diversão. A prática oferece diversos benefícios para o corpo e a mente:
            </p>
            <ul className="w-full flex flex-col gap-6 text-lg">
              <li className="text-justify">
                <span className="font-bold font-medieval flex text-xl">
                  <Sword className="rotate-[135deg] mt-0.5 mr-2" />
                  Exercício Físico Completo:
                </span>
                <p className="indent-6">
                  <span className="text-2xl font-medieval font-medium">O</span> Swordplay trabalha todo o corpo, proporcionando um treino cardiovascular intenso. Agilidade, força, coordenação e resistência são alguns dos benefícios físicos que você pode alcançar.
                </p>
              </li>

              <li className="text-justify">
                <span className="font-bold font-medieval flex text-xl">
                  <Sword className="rotate-[135deg] mt-0.5 mr-2" />
                  Desenvolvimento Mental:
                </span>
                <p className="indent-6">
                  <span className="text-2xl font-medieval font-medium">A</span> estratégia é fundamental para vencer os combates. O Swordplay te desafia a pensar rápido, tomar decisões estratégicas e trabalhar em equipe para alcançar a vitória.
                </p>
              </li>

              <li className="text-justify">
                <span className="font-bold font-medieval flex text-xl">
                  <Sword className="rotate-[135deg] mt-0.5 mr-2" />
                  Socialização e Diversão:
                </span>
                <p className="indent-6">
                  <span className="text-2xl font-medieval font-medium">O</span> Swordplay é uma ótima maneira de conhecer novas pessoas, fazer amigos e se divertir em um ambiente descontraído e cheio de adrenalina.
                </p>
              </li>

              <li className="text-justify">
                <span className="font-bold font-medieval flex text-xl">
                  <Sword className="rotate-[135deg] mt-0.5 mr-2" />
                  Autoconfiança e Superação:
                </span>
                <p className="indent-6">
                  <span className="text-2xl font-medieval font-medium">C</span>ada desafio superado no campo de batalha te leva a um novo nível de autoconfiança e te incentiva a superar seus limites.
                </p>
              </li>
            </ul>
          </div>
          <CardContainer className="mb-16 xl:mb-0">
            <CardBody className="flex flex-col justify-center items-center">
              <img
                src="https://utfs.io/f/962e3484-6f26-4d76-9373-7651942660f7-jgbhhk.jpg"
                alt="Foto do Swordplay realizado na Comic-Sul 2023"
                className="w-[350px] xl:w-[300px]"
              />
              <span className="text-center mt-1 text-medium text-sm text-gray-500">Swordplay na Comic-Sul 2023</span>
            </CardBody>
          </CardContainer>
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] xl:mt-24 xl:flex xl:flex-col justify-center items-center gap-4"
        >
          <div className="w-full xl:w-[80%] flex flex-col gap-5">
            <h2 className="w-full text-2xl font-medieval font-bold flex">
              <User className="mr-2 mt-1" />
              Eu posso jogar o Swordplay?
            </h2>
            <p className="text-lg indent-6 text-justify">
              <span className="text-3xl font-medieval font-medium">O</span> <span className="font-medium underline">Swordplay</span> é uma atividade para todas as idades e níveis de experiência. Homens e mulheres, jovens e adultos, todos podem se divertir e se beneficiar com a prática.
            </p>
          </div>
          <CardContainer className="mb-16">
            <CardBody className="flex flex-col justify-center items-center">
              <img
                src="https://utfs.io/f/b79d5010-430d-4604-ad75-1bf2bfd3a6eb-jgbhhh.jpg"
                alt="Crianças jogam Swordplay no evento realizado na Comic-Sul 2023"
                className="w-[350px] xl:w-[300px]"
              />
              <span className="text-center mt-1 text-medium text-sm text-gray-500">Swordplay na Comic-Sul 2023</span>
            </CardBody>
          </CardContainer>
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] flex flex-col justify-center items-center"
        >
          <div className="w-full xl:w-[80%] flex flex-col gap-5">
            <h2 className="w-full text-2xl font-medieval font-bold flex">
              <Scroll size={25} className="mr-2 mt-1" />
              Como funciona as regras do Swordplay?
            </h2>
            <p className="text-lg indent-6 text-justify">
              <span className="text-3xl font-medieval font-medium">P</span>ara aprender as regras do <span className="font-bold text-medieval">swordplay</span> clique no link abaixo e acesse a página detalhada ensinando as regras básicas para você já poder começar a jogar!
            </p>
          </div>

          <motion.div
            whileHover={{
              scale: 1.1,
              color: "#9ca3af",
            }}
            className="mt-6"
          >
            <Link to="/eventos" className="text-white bg-primary font-medium text-lg w-[200px] rounded-lg py-2 transition-colors hover:text-primary hover:bg-secondary flex justify-center items-center">
              Ver Regras
            </Link>
          </motion.div>
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full md:w-[85%] lg:w-[75%] xl:w-[70%] flex flex-col justify-center items-center mt-24"
        >
          <div className="w-full xl:w-[80%] flex flex-col gap-5">
            <h2 className="w-full text-2xl font-medieval font-bold flex">
              <Calendar size={25} className="mr-2 mt-1" />
              Quando será o próximo evento?
            </h2>
            <p className="text-lg indent-6 text-justify">
              <span className="text-3xl font-medieval font-medium">O</span> próximo evento do <span className="font-bold text-medieval">Excalibur Swordplay</span> será na Comic-Sul 2024 no dia 23 de Novembro de 2024, no Shopping Santa Cruz.
            </p>
            <div className="w-full flex justify-center items-center">
              <NextEventCard />
            </div>
            <p className="text-lg indent-6 text-justify">
              <span className="text-3xl font-medieval font-medium">P</span>ara mais informações ou deseja visualizar eventos anteriores, verifique a página de Eventos para mais!
            </p>
          </div>

          <motion.div
            whileHover={{
              scale: 1.1,
              color: "#9ca3af",
            }}
            className="mt-6"
          >
            <Link to="/eventos" className="text-white bg-primary font-medium text-lg w-[200px] rounded-lg py-2 transition-colors hover:text-primary hover:bg-secondary flex justify-center items-center mb-16">
              Ver Eventos
            </Link>
          </motion.div>
        </AnimatedContainer>

      </section>
    </div>
  )
}
