import { motion } from "framer-motion";
import { Link } from "react-router-dom"

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
}

export function AnimatedLink({ to, children }: AnimatedLinkProps) {
  return (
    <motion.div>
      <Link to={to} className="text-white hover:text-white-50 font-medium">
        {children}
      </Link>
    </motion.div>
  )
}
