// app/profile/page.js
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="text-center py-16 sm:py-20 pb-24 px-4 sm:px-6 lg:px-8">
      <User className="w-14 h-14 sm:w-16 sm:h-16 mx-auto text-gray-400 mb-4" />
      <h3 className="text-lg sm:text-xl font-semibold mb-2">Profile</h3>
      <p className="text-gray-600">Manage your account settings here.</p>
    </div>
  );
}
