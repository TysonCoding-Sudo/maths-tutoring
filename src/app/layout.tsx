import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "BrightMinds Maths — Maths Tutoring That Builds Confidence",
  description:
    "Personalised maths tutoring from Grade 1 to Matric. Online and in-person sessions with experienced tutors. Book a free trial lesson today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
