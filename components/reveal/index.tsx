'use client';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;    // Tempo de espera antes de começar (em segundos)
  duration?: number; // Duração da animação (em segundos)
  yOffset?: number;  // Distância do deslocamento vertical
  xOffset?: number;  // Distância do deslocamento vertical
}

export default function RevealItem({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  yOffset = 50 ,
  xOffset = 0
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset , x: xOffset}}
      whileInView={{ opacity: 1, y: 0, x: 0}}
      viewport={{ once: false }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.25, 0.25, 0.25, 0.75] // Um ease-out suave
      }}
    >
      {children}
    </motion.div>
  );
}