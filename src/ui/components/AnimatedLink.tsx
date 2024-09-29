import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom"

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
  navLink?: boolean
}

export function AnimatedLink({ to, children, navLink }: AnimatedLinkProps) {

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        color: "#9ca3af",
      }}
    >
      {
        navLink
          ? <NavLink
            to={to}
            className={({ isActive }) =>
              isActive
                ? "text-primary bg-white font-medium text-lg w-full py-2 px-3 transition-colors hover:text-gray-800 flex justify-center items-center rounded-lg"
                : "text-white font-medium text-lg w-full py-2 px-3 transition-colors hover:text-gray-400 flex justify-center items-center"
            }
          >
            {children}
          </NavLink>
          : <Link
            to={to}
            className="text-white font-medium text-lg w-full py-2 transition-colors hover:text-gray-400 flex justify-center items-center"
          >
            {children}
          </Link>
      }
    </motion.div>
  )
}
