import { RuleCard } from "@ui/components/RuleCard";
import { Ban, Coins, Flag } from "lucide-react";
import { useEffect } from "react";

export default function Rules() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <section className="w-full h-full bg-white mt-[110px] lg:mt-[150px] px-5 py-6">
      <h1 className="font-medieval font-bold text-2xl text-center mt-10">
        <span className="text-4xl">R</span>egras do Swordplay
      </h1>
      <div className="w-full mt-5 flex flex-col xl:flex-row xl:flex-wrap gap-8 justify-center items-center mb-24">
        <RuleCard
          key="rule-1"
          title={
            <div className="w-full flex justify-center items-center gap-2">
              <Flag size={30} />
              <h2 className="font-medieval font-semibold text-2xl text-center">
                <span className="text-5xl">C</span>omo funciona uma partida?
              </h2>
            </div>
          }
          imgSrc="https://utfs.io/f/6d86eeb0-5206-4eba-a7b1-79f5396d17b4-g43cy8.jpg"
          imgAlt="Arte de dois cavaleiros se encarando antes do combate"
          ruleDescription="A partida será definida em uma melhor de 5, o jogador que fizer 3 pontos primeiro vence!"
        />
        <RuleCard
          key="rule-2"
          title={
            <div className="w-full flex justify-center items-center gap-2">
              <Coins size={30} />
              <h2 className="font-medieval font-semibold text-2xl text-center">
                <span className="text-5xl">C</span>omo fazer pontos?
              </h2>
            </div>
          }
          imgSrc="https://utfs.io/f/3a297e3a-8290-4891-9580-e3437358f4ac-g43cy9.jpg"
          imgAlt="Arte de dois cavaleiros batalhando"
          ruleDescription="Para fazer 1 ponto, é muito simples, você deve encostar a sua arma no adversário, porém evitar áreas proibidas."
        />
        <RuleCard
          key="rule-3"
          title={
            <div className="w-full flex justify-center items-center gap-2">
              <Ban size={30} />
              <h2 className="font-medieval font-semibold text-2xl text-center">
                <span className="text-5xl">M</span>ovimentos proibidos
              </h2>
            </div>
          }
          imgSrc="https://utfs.io/f/d0d708cf-8cec-4218-bb7e-6970469d2ac1-g43cya.jpg"
          imgAlt="Arte de dois cavaleiros batalhando"
          ruleDescription="Acertar mãos, pés e a cabeça inválida o ponto e o round irá recomeçar, também é proibido arremessar a arma e empurrar o adversário."
        />
      </div>
    </section>
  )
}
