import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap", // Prevents FOIT (Flash of Invisible Text)
});

export const metadata = {
  title: "MxD | Creative Agency for Branding & Marketing",
  description:
    "We help businesses grow with data-driven branding, marketing, and design strategies.",
  keywords:
    "B2B marketing, branding, creative agency, SEO marketing, business growth",
  openGraph: {
    title: "MxD - Data-Driven Marketing & Branding",
    description:
      "We help businesses grow with data-driven branding, marketing, and design strategies.",
    url: "https://yourwebsite.com",
    siteName: "MxD",
    images: [
      {
        url: "https://yourwebsite.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MxD Creative Agency",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
};

// ✅ Fix: Move viewport to a separate export
export const viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: "yes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
