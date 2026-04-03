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
          style={{ marginBottom: '80px', textAlign: 'left' }}
        >
          <div className="badge">Recent Productions</div>
          <h2>Selected <br /> <span className="gradient-text">Client Work</span></h2>
          <p style={{ marginTop: '24px', maxWidth: '600px' }}>
            A selection of high-performance mobile applications built for 
            global brands and startups.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}>
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="glass-card project-card-mobile" style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}>
                <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
                  <div style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
                    <div style={{ 
                      display: 'inline-flex',
                      padding: '6px 14px',
                      borderRadius: '10px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      marginBottom: '24px',
                      border: '1px solid rgba(99, 102, 241, 0.1)'
                    }}>
                      {project.category}
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '16px', letterSpacing: '-0.02em' }}>{project.title}</h3>
                    <p style={{ color: 'var(--text)', fontSize: '1rem', marginBottom: '32px', opacity: 0.8 }}>
                      {project.description}
                    </p>
                    <span className="gradient-text" style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      View Case Study →
                    </span>
                  </div>
                </Link>

                <div style={{ 
                  padding: '16px clamp(16px, 5vw, 40px)', 
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}>
                  {project.androidUrl && (
                    <a href={project.androidUrl} target="_blank" rel="noopener noreferrer" className="nav-link" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#fff',
                      textDecoration: 'none'
                    }}>
                      <Smartphone size={14} /> Play Store
                    </a>
                  )}
                  {project.iosUrl && (
                    <a href={project.iosUrl} target="_blank" rel="noopener noreferrer" className="nav-link" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#fff',
                      textDecoration: 'none'
                    }}>
                      <Apple size={14} /> App Store
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
