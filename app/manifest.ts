import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AroSchools — Digital Campus",
    short_name: "AroSchools",
    description: "One platform for school websites, students, academics, fees, portals and school operations.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b63f6",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }
    ]
  };
}
