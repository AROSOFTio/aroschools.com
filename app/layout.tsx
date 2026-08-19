import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://aroschools.com";
const description =
  "AroSchools is a modern school management system and digital campus SaaS for schools in Uganda and Africa. Manage students, academics, fees, parents, staff, websites and school operations from one platform.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AroSchools | School Management Software & Digital Campus",
    template: "%s | AroSchools"
  },
  description,
  applicationName: "AroSchools",
  authors: [{ name: "AROSOFT Innovations Ltd" }],
  creator: "AROSOFT Innovations Ltd",
  publisher: "AROSOFT Innovations Ltd",
  category: "Education Technology",
  keywords: [
    "school management system",
    "school management software Uganda",
    "school ERP Uganda",
    "school software Uganda",
    "student management system",
    "school fees management software",
    "student results system",
    "parent portal",
    "teacher portal",
    "school website builder",
    "education software Africa",
    "digital campus",
    "school ERP Africa",
    "AroSchools"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AroSchools",
    title: "AroSchools — One Platform. Every School.",
    description,
    locale: "en_UG",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AroSchools - Digital Campus for modern schools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AroSchools — One Platform. Every School.",
    description,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b63f6",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-UG">
      <body>{children}</body>
    </html>
  );
}
