import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Cpu } from 'lucide-react';
import { 
  ReactIcon, 
  TypeScriptIcon, 
  JavascriptIcon, 
  ReduxIcon, 
  FirebaseIcon, 
  SupabaseIcon, 
  ExpoIcon,
  SocketIcon,
  ReactNativeIcon,
  MobXIcon 
} from './Icons';

const skillIconMap: Record<string, any> = {
  'React Native CLI': ReactNativeIcon,
  'Expo': ExpoIcon,
  'Redux': ReduxIcon,
  'MobX': MobXIcon,
  'Hooks': ReactIcon,
  'Firebase': FirebaseIcon,
  'Supabase': SupabaseIcon,
  'Sockets': SocketIcon,
  'TypeScript': TypeScriptIcon,
  'JavaScript': JavascriptIcon,
};

const Skills = () => {
  const categories = Array.from(new Set(portfolioData.skills.map(s => s.category)));

  return (
    <section id="skills" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', lineHeight: 1.1 }}>
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            High-performance tools I use to build world-class mobile applications.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {categories.map((category) => (
            <div key={category}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '30px', 
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{ width: '40px', height: '1px', background: 'var(--accent-gradient)' }}></span>
                {category}
              </h3>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', 
                gap: '20px' 
              }}>
                {portfolioData.skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => {
                    const Icon = skillIconMap[skill.name] || Cpu;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5, background: 'rgba(255, 255, 255, 0.05)' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="glass-card"
                        style={{
                          padding: '24px',
                          textAlign: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '12px',
                          border: '1px solid var(--glass-border)',
                        }}
                      >
                        <div style={{ color: 'var(--accent-primary)' }}>
                          <Icon size={32} />
                        </div>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
