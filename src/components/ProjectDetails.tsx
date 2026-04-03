import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioData, type Project } from '../data/portfolioData';
import { ArrowLeft, Smartphone, Apple } from 'lucide-react';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = (portfolioData.projects as Project[]).find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
        <h2 className="gradient-text">Project not found</h2>
        <button onClick={() => navigate('/')} className="btn-primary" style={{ marginTop: '40px', marginInline: 'auto' }}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '120px', minHeight: '100vh' }}>
      <div className="container">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '60px',
            opacity: 0.6,
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
        >
          <ArrowLeft size={18} /> Back to Showcase
        </motion.button>

        <div className="project-details-grid">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="badge">{project.category}</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '24px', marginBottom: '32px', letterSpacing: '-0.04em' }}>
              {project.title}
            </h1>
            <div style={{ 
              whiteSpace: 'pre-wrap', 
              color: 'var(--text)', 
              lineHeight: 1.8, 
              fontSize: '1.125rem', 
              marginBottom: '48px',
              opacity: 0.8
            }}>
              {project.fullDescription || project.description}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '64px' }}>
              {project.androidUrl && (
                <a href={project.androidUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Smartphone size={20} /> Google Play
                </a>
              )}
              {project.iosUrl && (
                <a href={project.iosUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Apple size={20} /> App Store
                </a>
              )}
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '48px' }}>
              <h3 style={{ marginBottom: '32px', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>Technical Implementation</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {['React Native', 'TypeScript', 'Redux State', 'Modern UX', 'High Performance'].map(tech => (
                   <span key={tech} className="glass-card" style={{ 
                     padding: '10px 20px', 
                     fontSize: '0.8rem', 
                     fontWeight: 600,
                     background: 'rgba(255,255,255,0.02)',
                     borderRadius: '12px',
                     color: 'var(--text-h)'
                   }}>
                     {tech}
                   </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-image-wrapper"
              style={{ width: '100%', maxWidth: '380px', margin: '0 auto' }}
            >
              <div className="hero-background-glow" style={{ width: '100%', height: '100%' }} />
              <div className="glass-card" style={{ 
                  aspectRatio: '460/996', 
                  width: '100%',
                  margin: '0 auto',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderRadius: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6)'
              }}>
              {project.screenshots && project.screenshots[0] ? (
                  <img 
                      src={project.screenshots[0]} 
                      alt={`${project.title} app presentation`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.parentElement) {
                              target.parentElement.innerHTML = `<div style="text-align: center; padding: 40px;"><h2 class="gradient-text" style="font-size: 3rem;">${project.title}</h2><p style="color: var(--text);">Architected with Excellence</p></div>`;
                          }
                      }}
                  />
              ) : (
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                      <h2 className="gradient-text" style={{ fontSize: '3rem' }}>{project.title}</h2>
                      <p style={{ color: 'var(--text)', opacity: 0.5 }}>Interface Design Coming Soon</p>
                  </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Full Gallery Section */}
        {project.screenshots && project.screenshots.length > 1 && (
            <div style={{ marginTop: '140px' }}>
                <div className="badge">Visual Showcase</div>
                <h2 style={{ marginTop: '24px', marginBottom: '64px' }}>Interface <span className="gradient-text">Design System</span></h2>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
                  gap: '32px' 
                }}>
                    {project.screenshots.slice(1).map((s, i) => (
                        <motion.div 
                          key={i} 
                          className="glass-card" 
                          style={{ 
                            aspectRatio: '460/996',
                            overflow: 'hidden',
                            borderRadius: '32px',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.4)',
                            background: 'rgba(255,255,255,0.01)'
                          }}
                          whileHover={{ y: -12, scale: 1.02 }}
                        >
                            <img src={s} alt={`Project Detail View ${i + 2}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
