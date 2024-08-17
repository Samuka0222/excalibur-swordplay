import { RuleCard } from "@ui/components/RuleCard";
import { Ban, Coins, Flag } from "lucide-react";

export default function Rules() {
  return (
    <section className="w-full h-full bg-white mt-[140px] lg:mt-[200px] px-5 py-6">
      <h1 className="font-medieval font-bold text-2xl text-center">
        <span className="text-4xl">R</span>egras do Swordplay
      </h1>
      <div className="w-full mt-5 flex flex-col gap-8 justify-center items-center mb-24">
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
          imgSrc="/img/swordplay-rules-1.jpeg"
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
          imgSrc="/img/swordplay-rules-2.jpeg"
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
          imgSrc="/img/swordplay-rules-3.jpeg"
          imgAlt="Arte de dois cavaleiros batalhando"
          ruleDescription="Acertar mãos, pés e a cabeça inválida o ponto e o round irá recomeçar, também é proibido arremessar a arma e empurrar o adversário."
        />
      </div>
    </section>
  )
}
