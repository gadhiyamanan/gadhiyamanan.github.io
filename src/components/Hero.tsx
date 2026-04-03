import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Smartphone, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text-content text-center-mobile">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="badge">
                <Sparkles size={14} style={{ marginRight: '8px' }} />
                Available for new projects
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Crafting <span className="gradient-text">Premium</span> <br />
              Mobile Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginTop: '24px', marginBottom: '40px', maxWidth: '540px' }}
            >
              {portfolioData.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <a href="#projects" className="btn-primary">
                Explore Work <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch <Smartphone size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-image-wrapper"
          >
            <div className="hero-background-glow" />
            <div className="hero-image-container">
              <img 
                src={portfolioData.profilePic} 
                alt={portfolioData.name} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
