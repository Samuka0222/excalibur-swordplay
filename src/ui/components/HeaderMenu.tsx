import { motion } from "framer-motion"
import { Outlet } from "react-router-dom"
import { SideMenu } from "./SideMenu"


export default function HeaderMenu() {
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut" }}
        className="w-full bg-primary flex justify-between items-center py-5 px-8"
      >
        <div className="w-fit">
          <img src="/img/logo-excalibur-swordplay-sm.png" alt="Logo do Excalibur Swordplay" className="block lg:hidden" />
        </div>
        <div className="lg:hidden block">
          <SideMenu />
        </div>

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
