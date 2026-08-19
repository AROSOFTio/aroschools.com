export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, fontFamily: "system-ui, sans-serif", background: "#f7faff", color: "#101d38" }}>
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <div style={{ color: "#0b63f6", fontWeight: 800, letterSpacing: 1, fontSize: 12 }}>AROSCHOOLS</div>
        <h1 style={{ fontSize: 54, margin: "18px 0 10px" }}>Page not found.</h1>
        <p style={{ color: "#66758b", lineHeight: 1.7 }}>The page you&apos;re looking for does not exist or may have moved.</p>
        <a href="/" style={{ display: "inline-block", marginTop: 20, padding: "13px 18px", borderRadius: 10, background: "#0b63f6", color: "white", fontWeight: 700, textDecoration: "none" }}>Back to AroSchools</a>
      </div>
    </main>
  );
}
