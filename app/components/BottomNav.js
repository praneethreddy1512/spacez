"use client";

import toast from "react-hot-toast";
import { Search, Heart, MapPin, User, Tag } from "lucide-react";

export default function BottomNav() {
  const navItems = [
    { label: "Explore", icon: <Search className="w-6 h-6" /> },
    { label: "Offers", icon: <Tag className="w-6 h-6" /> },
    { label: "Bookings", icon: <MapPin className="w-6 h-6" /> },
    { label: "Wishlist", icon: <Heart className="w-6 h-6" /> },
    { label: "Sign In", icon: <User className="w-6 h-6" /> },
  ];

  return (
    <footer className="fixed bottom-0 md:w-[68%] lg:w-[43%]  bg-white border-t border-[#E5E6E5] z-50  md:mt-8">
      <div className="flex justify-between items-center px-5 py-3mx-auto">
        {navItems.map((it, idx) => (
          <button
            key={idx}
            onClick={() => toast.success(`No more pages`)}
            className="flex flex-col items-center justify-center gap-0 min-w-[60px] text-[#7D817D] hover:text-[#8B4513] transition-colors duration-200"
          >
            <div>{it.icon}</div>
            <span className="text-center font-lexend text-xs leading-5">
              {it.label}
            </span>
          </button>
        ))}
      </div>
    </footer>
  );
}
