import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ChevronRight, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '20%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(100px)',
        zIndex: -1,
      }} />
      
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ 
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              background: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--accent-primary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '20px'
            }}>
              Available for New Projects
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1, marginBottom: '20px' }}
          >
            I craft <span className="gradient-text">Premium</span> Mobile Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px' }}
          >
            {portfolioData.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="glass-card" style={{
              padding: '14px 28px',
              background: 'var(--accent-primary)',
              color: 'white',
              borderRadius: '12px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              View My Work <ChevronRight size={18} />
            </a>
            <a href="#contact" className="glass-card" style={{
              padding: '14px 28px',
              borderRadius: '12px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              Let's Talk <Smartphone size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
