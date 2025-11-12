"use client";
import React, { useState } from "react";
import { Menu, Home, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar({ title = "Offers" }) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuAction = (path) => {
    setShowMenu(false);
    if (path === "/") {
      router.push("/");
    } else {
      // For other pages, just show success message (no navigation)
      const messages = {
        "/bookings": "Viewing your bookings",
        "/wallet": "Opening your wallet",
        "/profile": "Accessing your profile",
      };
      // You can add a toast/notification here if needed
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f7f0e6] px-4 sm:px-6 lg:px-8 py-4 border-b border-orange-100">
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm">
            <Home className="w-5 h-5" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
              SpaceZ
            </p>
            <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
          </div>
        </button>
        <div className="relative">
          <button
            aria-label="Menu"
            onClick={() => setShowMenu((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm text-gray-600 hover:text-orange-600"
          >
            {showMenu ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-orange-100 bg-white shadow-lg z-50 overflow-hidden">
              <button
                onClick={() => handleMenuAction("/")}
                className="w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              >
                Offers Home
              </button>
              <button
                onClick={() => handleMenuAction("/bookings")}
                className="w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              >
                View Bookings
              </button>
              <button
                onClick={() => handleMenuAction("/wallet")}
                className="w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              >
                Wallet
              </button>
              <button
                onClick={() => handleMenuAction("/profile")}
                className="w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              >
                Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

