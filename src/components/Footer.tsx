import { portfolioData } from "../data/portfolioData"

const Footer = () => {
  return (
    <footer
      style={{
        padding: "40px 20px",
        borderTop: "1px solid var(--glass-border)",
        textAlign: "center"
      }}
    >
      <div className="container">
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} {portfolioData.name} ❤️
        </p>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.3)",
            fontSize: "0.75rem",
            marginTop: "10px"
          }}
        >
          Premium Quality • Pixel Perfect • Scalable Code
        </p>
      </div>
    </footer>
  )
}

export default Footer
