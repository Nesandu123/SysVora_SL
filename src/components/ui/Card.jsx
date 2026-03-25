import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, ...props }) {
  const baseStyles = 'glass rounded-2xl p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
