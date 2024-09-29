import { cn } from "@app/lib/lib";
import { motion } from "framer-motion"

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: "dark" | "white";
  initial?: Record<string, number | string | boolean>;
  animate?: Record<string, number | string | boolean>;
  whileInView?: Record<string, number | string | boolean>;
  transition?: Record<string, number | string | boolean>;
}

export function AnimatedContainer({
  children,
  initial,
  animate,
  whileInView,
  transition,
  className
}: AnimatedContainerProps) {
  return (
    <motion.div
      className={cn(
        className, "relative"
      )}
      initial={initial ?? undefined}
      animate={animate ?? undefined}
      whileInView={whileInView ?? undefined}
      transition={transition ?? undefined}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
