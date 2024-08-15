import { motion } from "framer-motion"
import { Outlet } from "react-router-dom"
import { SideMenu } from "./SideMenu"
import { AnimatedLink } from "./AnimatedLink"
import { Calendar, Phone, Scroll, Home } from "lucide-react"


export default function HeaderMenu() {
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut" }}
        className="w-full bg-primary flex justify-between md:justify-around items-center py-5 px-8 xl:px-24"
      >
        {/* Mobile Menu */}
        <div className="block lg:hidden w-fit ">
          <img src="/img/logo-excalibur-swordplay-sm.png" alt="Logo do Excalibur Swordplay" />
        </div>
        <div className="block md:hidden">
          <SideMenu />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-fit justify-center items-center hover:scale-105 transition-transform">
          <span className="text-xl font-bold text-white">Excalibur</span>
          <img src="/img/logo-excalibur-swordplay-md.png" alt="Logo do Excalibur Swordplay" className="hidden lg:block w-32 h-32" />
          <span className="text-xl font-bold text-white">Swordplay</span>
        </div>
        <nav className="hidden md:block w-[60%]">
          <ul className="flex justify-center items-center md:gap-10 lg:gap-10 xl:gap-28 p-4 text-lg">
            <li>
              <AnimatedLink to="/">
                <Home className="mr-2" /> Início
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to="/">
                <Scroll className="mr-2" /> Regras
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to="/">
                <Calendar className="mr-2" /> Eventos
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to="/">
                <Phone className="mr-2" /> Contato
              </AnimatedLink>
            </li>
          </ul>
        </nav>

      </motion.header>
      <Outlet />
    </>
  )
}

{/* <nav className="w-[70%]">
  <ul className="flex justify-between items-center p-4">
    <li>
      <AnimatedLink to="/">
        Regras
      </AnimatedLink>
    </li>
    <li>
      <AnimatedLink to="/">
        Eventos
      </AnimatedLink>
    </li>
    <li>
      <AnimatedLink to="/">
        Contato
      </AnimatedLink>
    </li>
  </ul>
</nav> */}
