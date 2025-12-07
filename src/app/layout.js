import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "My Portfolio | Full Stack Developer",
  description: "Portfolio showcasing my web development projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
