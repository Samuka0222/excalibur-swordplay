import { motion } from "framer-motion";
import { Link } from "react-router-dom"

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
}

export function AnimatedLink({ to, children }: AnimatedLinkProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        color: "#9ca3af",
        borderBottom: "2px solid"
      }}
    >
      <Link to={to} className="text-white font-medium text-lg w-full py-2 transition-colors hover:text-gray-400 flex justify-center items-center">
        {children}
      </Link>
    </motion.div>
  )
}
