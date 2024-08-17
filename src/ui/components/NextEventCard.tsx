import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@ui/components/Card";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function NextEventCard() {
  return (
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
  )
}
