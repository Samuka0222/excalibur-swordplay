import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { SideMenu } from "./SideMenu";
import { AnimatedLink } from "./AnimatedLink";
import { Calendar, Home, BookUser } from "lucide-react";
import { routes } from "@app/routes/route";

export function HeaderMenu() {
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut" }}
        className="w-full h-[100px] bg-primary fixed top-0 left-0 z-20 shadow-sm shadow-white flex justify-between md:justify-around items-center px-8 xl:px-24"
      >
        {/* Mobile Menu */}
        <div className="block lg:hidden w-fit ">
          <img src="/images/logo-excalibur-swordplay-sm.png" alt="Logo do Excalibur Swordplay" />
        </div>
        <div className="block md:hidden">
          <SideMenu />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-fit justify-center items-center hover:scale-105 transition-transform">
          <span className="text-xl font-bold text-white">Excalibur</span>
          <img src="/images/logo-excalibur-swordplay-md.png" alt="Logo do Excalibur Swordplay" className="hidden lg:block w-16 h-16" />
          <span className="text-xl font-bold text-white">Swordplay</span>
        </div>
        <nav className="hidden md:block w-[60%]">
          <ul className="flex justify-center items-center md:gap-8 lg:gap-8 xl:gap-20 p-4 text-lg">
            <li>
              <AnimatedLink to={routes.home} navLink>
                <Home className="mr-2" /> Início
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to={routes.events} navLink>
                <Calendar className="mr-2" /> Eventos
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to={routes.about} navLink>
                <BookUser className="mr-2" /> Sobre
              </AnimatedLink>
            </li>
          </ul>
        </nav>
      </motion.header>
      <Outlet />
    </>
  )
}
