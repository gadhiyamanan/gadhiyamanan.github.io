import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, StackOverflowIcon } from './Icons';

const Contact = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactCards = [
    { 
      label: 'Email', 
      value: portfolioData.email, 
      icon: Mail, 
      action: copyEmail,
      color: 'var(--accent-primary)',
      bg: 'rgba(59, 130, 246, 0.1)'
    },
    { 
      label: 'LinkedIn', 
      value: 'manan-gadhiya', 
      icon: LinkedInIcon, 
      url: portfolioData.socials.linkedin,
      color: 'var(--accent-secondary)',
      bg: 'rgba(139, 92, 246, 0.1)'
    },
    { 
      label: 'GitHub', 
      value: 'gadhiyamanan', 
      icon: GitHubIcon, 
      url: portfolioData.socials.github,
      color: '#fff',
      bg: 'rgba(255, 255, 255, 0.05)'
    },
    { 
      label: 'Stack Overflow', 
      value: 'manan-gadhiya', 
      icon: StackOverflowIcon, 
      url: portfolioData.socials.stackoverflow,
      color: '#F48024',
      bg: 'rgba(244, 128, 36, 0.1)'
    },
  ];

  return (
    <section id="contact" style={{ paddingBottom: '150px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', lineHeight: 1.1 }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Whether it's a new project or just a quick chat, I'm always open to discussing modern mobile solutions.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {contactCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={card.action || (() => window.open(card.url, '_blank'))}
              className="glass-card"
              style={{
                padding: '40px',
                textAlign: 'center',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px',
                background: card.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: card.color,
                marginBottom: '10px'
              }}>
                <card.icon size={28} />
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>{card.label}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {card.label === 'Email' && copied ? 'Copied to Clipboard! ✨' : card.value}
                </p>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '10px 20px',
                borderRadius: '50px',
                background: 'rgba(255, 255, 255, 0.05)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                border: '1px solid var(--glass-border)'
              }}>
                {card.label === 'Email' ? 'Copy Address' : 'Visit Profile'}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '100px' }}
        >
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Prefer direct mail?</p>
          <a href={`mailto:${portfolioData.email}`} style={{
            padding: '18px 40px',
            background: 'var(--accent-gradient)',
            color: 'white',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '1.1rem',
          }}>
            Send an Email Directly
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
