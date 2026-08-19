import { ImageResponse } from "next/og";

export const alt = "AroSchools — One Platform. Every School.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px", background: "linear-gradient(135deg,#07172f 0%,#0b63f6 100%)", color: "white", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 800 }}><div style={{ width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 14, background: "white", color: "#0b63f6" }}>A</div>AroSchools</div>
        <div style={{ marginTop: 65, fontSize: 74, lineHeight: 1.02, fontWeight: 800, letterSpacing: -3 }}>One Platform.<br />Every School.</div>
        <div style={{ marginTop: 30, fontSize: 26, color: "#d8e9ff" }}>School websites · Students · Academics · Fees · Portals · ERP</div>
        <div style={{ marginTop: 54, display: "flex", gap: 16, fontSize: 20 }}><span style={{ padding: "12px 18px", border: "1px solid rgba(255,255,255,.35)", borderRadius: 999 }}>Free Forever core</span><span style={{ padding: "12px 18px", border: "1px solid rgba(255,255,255,.35)", borderRadius: 999 }}>60-day full access trial</span></div>
      </div>
    ),
    size
  );
}
