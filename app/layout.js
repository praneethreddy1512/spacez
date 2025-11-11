// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import BottomNav from "./components/BottomNav/page.js";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Offers App",
  description: "Next.js offers, coupons, and wallet app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="max-w-2xl mx-auto min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
