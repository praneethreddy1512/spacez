// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import BottomNav from "./components/BottomNav.js";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Offers App",
  description: "Next.js offers, coupons, and wallet app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#F8F9F8] relative`}>
        <div className="max-w-2xl mx-auto min-h-screen flex flex-col">
          {/* Main Page Content */}
          <main className="flex-grow">{children}</main>

          {/* <div className="fixed bottom-0"> */}
            <BottomNav />
          {/* </div> */}

          <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        </div>
      </body>
    </html>
  );
}
