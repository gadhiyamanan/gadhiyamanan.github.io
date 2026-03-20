import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
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
          borderRadius: "50px"
        }}
      >
        <motion.a
          href="#about"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            fontWeight: 900,
            fontSize: "1.4rem",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "var(--text-primary)"
          }}
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          Manan <span className="gradient-text">G.</span>
        </motion.a>

        <ul style={{ display: "flex", gap: "30px" }}>
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
