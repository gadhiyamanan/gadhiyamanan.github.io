import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent selection/scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup to ensure scroll is restored if component unmounts or state changes
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav style={{
      position: "fixed",
      top: "16px",
      left: "16px",
      right: "16px",
      zIndex: 1000,
    }}>
      <div className="glass-card navbar-inner" style={{
        margin: "0 auto",
        maxWidth: "1200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "99px",
        border: "1px solid var(--glass-border)",
        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.5)",
        position: 'relative',
        zIndex: 1001
      }}>
        <Link
          to="/"
          style={{
            fontWeight: 800,
            fontSize: "1.125rem",
            letterSpacing: "-0.02em",
            color: "#fff",
            textDecoration: "none",
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '10px',
            background: 'var(--accent-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
          }}>M</div>
          Manan G.
        </Link>

        {/* Desktop Links */}
        <ul className="mobile-hide" style={{ display: "flex", gap: "24px", listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={`/#${item.toLowerCase()}`}
                className="nav-link"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <motion.button
          className="desktop-hide"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: 'absolute',
              top: '110px',
              left: 0,
              right: 0,
              background: 'rgba(10, 10, 12, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid var(--glass-border)',
              padding: '24px',
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8)',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/#${item.toLowerCase()}`}
                    style={{
                      display: 'block',
                      padding: '16px',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '12px',
                      background: location.hash === `#${item.toLowerCase()}` ? 'rgba(255,255,255,0.05)' : 'transparent'
                    }}
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
