import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Smartphone, Apple } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Recent <span className="gradient-text">Productions</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>A selection of high-performance mobile apps built for global brands.</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px',
        }}>
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="glass-card" style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                height: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}>
                <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
                  <div style={{ padding: '30px' }}>
                    <div style={{ 
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      marginBottom: '15px'
                    }}>
                      {project.category}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{project.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '25px' }}>
                      {project.description}
                    </p>
                    <span className="gradient-text" style={{ fontSize: '0.85rem', fontWeight: 600 }}>View Details →</span>
                  </div>
                </Link>

                <div style={{ 
                  padding: '20px 30px', 
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderTop: '1px solid var(--glass-border)',
                  display: 'flex',
                  gap: '20px'
                }}>
                  {project.androidUrl && (
                    <a href={project.androidUrl} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      textDecoration: 'none'
                    }}>
                      <Smartphone size={16} /> Play Store
                    </a>
                  )}
                  {project.iosUrl && (
                    <a href={project.iosUrl} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      textDecoration: 'none'
                    }}>
                      <Apple size={16} /> App Store
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
