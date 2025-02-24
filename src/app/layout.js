import Header from "@/components/header/header";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { Heebo } from 'next/font/google';

const heebo = Heebo({ subsets: ['latin'] });

export const metadata = {
  title: "Meta Capital",
  description: "Generated by Meta Capital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${heebo.className} antialiased`}>
        <Header />
        <img src="/path/to/Logo.png" alt="Logo" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
