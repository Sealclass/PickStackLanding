import { motion } from 'motion/react';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { container: 40, orb1: 10, orb2: 8, orb3: 6 },
    md: { container: 60, orb1: 16, orb2: 12, orb3: 8 },
    lg: { container: 100, orb1: 24, orb2: 18, orb3: 12 }
  };

  const s = sizes[size];

  return (
    <div className="relative flex items-center justify-center" style={{ width: s.container, height: s.container }}>
      {/* Bottom orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: s.orb1,
          height: s.orb1,
          bottom: 0,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.9) 0%, rgba(139, 92, 246, 0.4) 100%)',
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)',
        }}
        animate={{
          y: [0, -3, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Middle orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: s.orb2,
          height: s.orb2,
          bottom: s.orb1 + 4,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.95) 0%, rgba(6, 182, 212, 0.5) 100%)',
          boxShadow: '0 0 25px rgba(139, 92, 246, 0.5), 0 0 50px rgba(6, 182, 212, 0.3)',
        }}
        animate={{
          y: [0, -4, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      
      {/* Top orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: s.orb3,
          height: s.orb3,
          bottom: s.orb1 + s.orb2 + 8,
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.95) 0%, rgba(139, 92, 246, 0.4) 100%)',
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.3)',
        }}
        animate={{
          y: [0, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />
    </div>
  );
}
