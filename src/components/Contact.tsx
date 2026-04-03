import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, StackOverflowIcon } from './Icons';

const Contact = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(copied => !copied);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactCards = [
    { 
      label: 'Direct Email', 
      value: portfolioData.email, 
      icon: Mail, 
      action: copyEmail,
      color: 'var(--accent-primary)',
      bg: 'hsla(243, 75%, 59%, 0.1)'
    },
    { 
      label: 'LinkedIn', 
      value: 'Professional Network', 
      icon: LinkedInIcon, 
      url: portfolioData.socials.linkedin,
      color: '#0A66C2',
      bg: 'rgba(10, 102, 194, 0.1)'
    },
    { 
      label: 'GitHub', 
      value: 'Open Source', 
      icon: GitHubIcon, 
      url: portfolioData.socials.github,
      color: '#FFFFFF',
      bg: 'rgba(255, 255, 255, 0.05)'
    },
    { 
      label: 'Stack Overflow', 
      value: 'Community Tech', 
      icon: StackOverflowIcon, 
      url: portfolioData.socials.stackoverflow,
      color: '#F48024',
      bg: 'rgba(244, 128, 36, 0.1)'
    },
  ];

  return (
    <section id="contact" style={{ paddingBottom: '100px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div className="badge" style={{ margin: '0 auto 24px' }}>Get In Touch</div>
          <h2>Let's Start a <br /> <span className="gradient-text">Conversation</span></h2>
          <p style={{ marginTop: '24px', maxWidth: '540px', margin: '24px auto 0' }}>
            Whether you have a world-class idea or just want to discuss modern 
            mobile solutions, my inbox is always open.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}>
          {contactCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => card.action ? card.action() : window.open(card.url, '_blank')}
              className="glass-card"
              style={{
                padding: 'clamp(24px, 5vw, 40px)',
                textAlign: 'center',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '20px',
                background: card.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: card.color,
                marginBottom: '24px',
                border: '1px solid rgba(255, 255, 255, 0.03)'
              }}>
                <card.icon size={28} />
              </div>
              
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{card.label}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text)', opacity: 0.7, marginBottom: '24px' }}>
                {card.label === 'Direct Email' && copied ? '✨ Email Copied!' : card.value}
              </p>

              <div style={{
                marginTop: 'auto',
                padding: '10px 24px',
                borderRadius: '99px',
                background: 'rgba(255, 255, 255, 0.03)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#fff',
                border: '1px solid var(--border)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {card.label === 'Direct Email' ? 'Copy Address' : 'Visit Profile'}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '80px', width: '100%' }}
        >
          <div className="glass-card" style={{ 
            padding: 'clamp(24px, 8vw, 60px)', 
            maxWidth: '1000px', 
            width: '100%',
            margin: '0 auto',
            boxSizing: 'border-box'
          }}>
            <h3 style={{ 
              fontSize: 'clamp(1.5rem, 6vw, 2.25rem)', 
              marginBottom: '16px', 
              lineHeight: 1.2,
              wordBreak: 'break-word'
            }}>Ready to build something <span className="gradient-text">Amazing?</span></h3>
            <p style={{ marginBottom: '40px', opacity: 0.7, fontSize: '0.9rem' }}>Skip the forms and send me a direct mail right now.</p>
            <a href={`mailto:${portfolioData.email}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Direct Email <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
