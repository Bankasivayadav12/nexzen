import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NEXZEN ASSET | From Education to Employment. From Skills to Strategy.",
  description: "A unified ecosystem for academic learning, professional qualifications, industry certifications, finance job training and strategic solutions. 25+ Years Legacy.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "NEXZEN ASSET PRIVATE LIMITED",
    description: "An evolution of Asset Integrated Info Systems · 25+ Years Legacy",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-screen bg-[#F4F7FB] text-[#091F38] font-sans selection:bg-[#0066FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
