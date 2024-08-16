import { CardBody, CardContainer } from "@ui/components/3dCard";
import { AnimatedContainer } from "@ui/components/AnimatedContainer";
import { Banner } from "@ui/components/Banner";
import { Swords } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-full mt-8">
      <Banner />
      <section className="w-full h-full flex flex-col justify-center items-center mt-12 bg-white py-5 px-3 rounded-lg">
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
                src="/img/swordplay-fotos-1.jpg"
                alt="Foto do Swordplay realizado na Comic-Sul 2023"
                className="w-[350px]"
              />
              <span className="text-center mt-1 text-medium text-gray-500">Swordplay na Comic-Sul 2023</span>
            </CardBody>
          </CardContainer>
        </AnimatedContainer>
      </section>
    </div>
  )
}
