import { Roboto } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "My Portfolio | Swathi P",
  description: "This is my portfolio website to showcase my interests and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased font-sans`}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
