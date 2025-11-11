// app/components/BottomNav.js
"use client";
import { usePathname, useRouter } from "next/navigation";
import { Gift, CreditCard, Wallet, User } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { name: "Offers", path: "/", icon: Gift },
    { name: "Bookings", path: "/bookings", icon: CreditCard },
    { name: "Wallet", path: "/wallet", icon: Wallet },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
      <div className="max-w-2xl mx-auto flex justify-around py-3">
        {tabs.map(({ name, path, icon: Icon }) => {
          const active = pathname === path;
          return (
            <button
              key={name}
              onClick={() => router.push(path)}
              className={`flex flex-col items-center gap-1 ${
                active ? "text-orange-600" : "text-gray-600"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
