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

const skillColorMap: Record<string, string> = {
  'React Native CLI': '#61DAFB',
  'Expo': '#FFFFFF',
  'Redux': '#764ABC',
  'MobX': '#FF0995',
  'Hooks': '#61DAFB',
  'Firebase': '#FFCA28',
  'Supabase': '#3ECF8E',
  'Sockets': '#FFFFFF',
  'TypeScript': '#3178C6',
  'JavaScript': '#F7DF1E',
};

const Skills = () => {
  const categories = Array.from(new Set(portfolioData.skills.map(s => s.category)));

  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '100px' }}
        >
          <div className="badge" style={{ margin: '0 auto 24px' }}>Technical Arsenal</div>
          <h2>Tools For <span className="gradient-text">World-Class</span> <br /> Mobile Apps</h2>
          <p style={{ marginTop: '24px', maxWidth: '600px', margin: '24px auto 0' }}>
            High-performance development stacks I use to create seamless, 
            pixel-perfect mobile experiences.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {categories.map((category) => (
            <div key={category}>
              <h3 style={{ 
                fontSize: '1rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                marginBottom: '32px', 
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                {category}
                <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)' }}></span>
              </h3>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
                gap: '16px' 
              }}>
                {portfolioData.skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => {
                    const Icon = skillIconMap[skill.name] || Cpu;
                    const techColor = skillColorMap[skill.name] || 'var(--accent-primary)';
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="glass-card"
                        style={{
                          padding: '32px 24px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '16px',
                          border: '1px solid var(--glass-border)',
                        }}
                      >
                        <div style={{ 
                          color: techColor,
                          filter: techColor === '#FFFFFF' ? 'none' : `drop-shadow(0 0 10px ${techColor}40)` 
                        }}>
                          <Icon size={40} />
                        </div>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-h)' }}>
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
