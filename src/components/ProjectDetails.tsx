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
        <h2>Project not found</h2>
        <button onClick={() => navigate('/')} className="glass-card" style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
      <div className="container">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginBottom: '40px',
            padding: '10px 0'
          }}
        >
          <ArrowLeft size={20} /> Back to Projects
        </motion.button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'start'
        }}>
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span style={{ 
              background: 'var(--accent-gradient)', 
              color: 'white', 
              padding: '4px 12px', 
              borderRadius: '20px', 
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {project.category}
            </span>
            <h1 style={{ fontSize: '3.5rem', marginTop: '20px', marginBottom: '20px', lineHeight: 1.1 }}>
              {project.title}
            </h1>
            <div style={{ whiteSpace: 'pre-wrap', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '40px' }}>
              {project.fullDescription || project.description}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
              {project.androidUrl && (
                <a href={project.androidUrl} target="_blank" rel="noopener noreferrer" className="glass-card" 
                   style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600 }}>
                  <Smartphone size={18} /> Google Play
                </a>
              )}
              {project.iosUrl && (
                <a href={project.iosUrl} target="_blank" rel="noopener noreferrer" className="glass-card"
                   style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600 }}>
                  <Apple size={18} /> App Store
                </a>
              )}
            </div>

            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '40px' }}>
              <h3 style={{ marginBottom: '25px', fontSize: '1.5rem' }}>Technical Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <span className="glass-card" style={{ padding: '8px 18px', fontSize: '0.9rem', background: 'rgba(255,255,255,0.03)' }}>{project.category}</span>
                <span className="glass-card" style={{ padding: '8px 18px', fontSize: '0.9rem', background: 'rgba(255,255,255,0.03)' }}>React Native</span>
                <span className="glass-card" style={{ padding: '8px 18px', fontSize: '0.9rem', background: 'rgba(255,255,255,0.03)' }}>Live Video (Zoom)</span>
                <span className="glass-card" style={{ padding: '8px 18px', fontSize: '0.9rem', background: 'rgba(255,255,255,0.03)' }}>Interactive Learning</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Feature / Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card"
            style={{ 
              aspectRatio: '460/996', 
              maxWidth: '380px',
              margin: '0 auto',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              overflow: 'hidden',
              background: 'var(--bg-card)',
              boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)',
              border: '1px solid var(--glass-border)'
            }}
          >
            {project.screenshots && project.screenshots[0] ? (
                <img 
                    src={project.screenshots[0]} 
                    alt={`${project.title} app`} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                            target.parentElement.innerHTML = `<div style="text-align: center; padding: 40px;"><h2 class="gradient-text" style="font-size: 3rem;">${project.title}</h2><p style="color: var(--text-secondary);">Screenshot loading...</p></div>`;
                        }
                    }}
                />
            ) : (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <h2 className="gradient-text" style={{ fontSize: '3rem' }}>{project.title}</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Coming Soon</p>
                </div>
            )}
          </motion.div>
        </div>

        {/* Full Gallery Section */}
        {project.screenshots && project.screenshots.length > 1 && (
            <div style={{ marginTop: '120px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Interface <span className="gradient-text">Showcase</span></h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '50px' }}>Detailed views of the app's user experience and key features.</p>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
                  gap: '40px' 
                }}>
                    {project.screenshots.slice(1).map((s, i) => (
                        <motion.div 
                          key={i} 
                          className="glass-card" 
                          style={{ 
                            aspectRatio: '460/996',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)'
                          }}
                          whileHover={{ y: -10 }}
                        >
                            <img src={s} alt={`Screenshot ${i + 2}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
