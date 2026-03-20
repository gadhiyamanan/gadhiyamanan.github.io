import { motion } from "framer-motion"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigation will happen naturally via Link 'to'
      // The hash will be picked up by the ScrollToTop or a dedicated effect
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1000,
        padding: "20px 0"
      }}
    >
      <div
        className="container glass-card"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 30px",
          borderRadius: "50px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <Link
          to="/"
          style={{
            fontWeight: 900,
            fontSize: "1.4rem",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "var(--text-primary)",
            textDecoration: "none"
          }}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          Manan <span className="gradient-text">G.</span>
        </Link>

        <ul style={{ display: "flex", gap: "30px", listStyle: "none", margin: 0, padding: 0 }}>
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/#${item.toLowerCase()}`}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
