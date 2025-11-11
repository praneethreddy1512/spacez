// app/wallet/page.js
import { Wallet } from "lucide-react";

export default function WalletPage() {
  return (
    <div className="text-center py-16 sm:py-20 pb-24 px-4 sm:px-6 lg:px-8">
      <Wallet className="w-14 h-14 sm:w-16 sm:h-16 mx-auto text-gray-400 mb-4" />
      <h3 className="text-lg sm:text-xl font-semibold mb-2">Wallet</h3>
      <p className="text-gray-600 mb-4">Your wallet balance: ₹0</p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 sm:px-6 py-2 rounded-lg">
        Add Money
      </button>
    </div>
  );
}
