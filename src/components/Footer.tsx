import { portfolioData } from "../data/portfolioData"

const Footer = () => {
  return (
    <footer style={{
      padding: "60px 0",
      borderTop: "1px solid var(--border)",
      background: "var(--bg-secondary)",
    }}>
      <div className="container" style={{ textAlign: "center" }}>
        <div style={{ 
          fontSize: "1.25rem", 
          fontWeight: 800, 
          marginBottom: "16px",
          color: "#fff" 
        }}>
          Manan G.
        </div>
        <p style={{ color: "var(--text)", fontSize: "0.875rem", opacity: 0.6 }}>
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
        <div style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          fontSize: "0.75rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "rgba(255, 255, 255, 0.2)"
        }}>
          <span>Premium Strategy</span>
          <span>•</span>
          <span>Pixel Perfect</span>
          <span>•</span>
          <span>Scalable Solutions</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
