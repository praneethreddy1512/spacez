"use client";
import React, { useState } from "react";
import {
  Gift,
  Copy,
  Check,
  Menu,
  Home,
  Shield,
  ArrowUpRight,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

const TABS = [
  { id: "coupons", label: "Coupons" },
  { id: "giftcards", label: "Giftcards" },
  { id: "payment", label: "Payment Offers" },
];

const SITE_COUPONS = [
  {
    id: 1,
    title: "LONGSTAY",
    description:
      "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    code: "LONG50",
    amount: "₹1,500",
    highlight: "Sitewide coupons",
    gradient: "from-orange-500 to-orange-600",
    details:
      "Applicable on select properties. Maximum discount capped at ₹2,500. Offer valid once per user.",
  },
  {
    id: 2,
    title: "EARLYBIRD",
    description:
      "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    code: "EARLY40",
    amount: "₹3,000",
    highlight: "Sitewide coupons",
    gradient: "from-amber-600 to-orange-500",
    details:
      "Book a minimum of 20 days in advance to redeem this offer. Not combinable with other coupons.",
  },
  {
    id: 3,
    title: "RUSHDEAL",
    description:
      "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    code: "RUSH25",
    amount: "Flat 10%",
    highlight: "Sitewide coupons",
    gradient: "from-rose-500 to-orange-600",
    details:
      "Valid on weekend stays only. Limited redemptions per day. Taxes and fees apply on discounted amount.",
  },
];

const BONUS_GIFTCARDS = [
  {
    id: 1,
    title: "Assured vouchers up to ₹1000+",
    subtitle: "of trending brands",
    buttonLabel: "Claim gift cards »",
    accent: "₹400 Gift card",
    gradient: "from-blue-500 to-indigo-600",
    brands: "50+ brands",
  },
  {
    id: 2,
    title: "Premium dining vouchers",
    subtitle: "Enjoy fine dining experiences",
    buttonLabel: "Claim gift cards »",
    accent: "₹600 Gift card",
    gradient: "from-purple-500 to-pink-600",
    brands: "30+ restaurants",
  },
  {
    id: 3,
    title: "Shopping spree vouchers",
    subtitle: "Shop at your favorite stores",
    buttonLabel: "Claim gift cards »",
    accent: "₹500 Gift card",
    gradient: "from-green-500 to-emerald-600",
    brands: "40+ stores",
  },
];

const PAYMENT_OFFERS = [
  {
    id: 1,
    title: "Save more on your bookings",
    subtitle: "up to 15% Off on select payment methods",
    buttonLabel: "Unlock offers »",
    bankName: "Pay Swift",
    features: [
      "Extra cashback on first booking",
      "No-cost EMI on premium stays",
    ],
    gradient: "from-orange-400 via-orange-500 to-amber-500",
  },
  {
    id: 2,
    title: "UPI payment benefits",
    subtitle: "Get instant discounts on UPI payments",
    buttonLabel: "Unlock offers »",
    bankName: "UPI Pay",
    features: ["10% instant discount", "Cashback on every transaction"],
    gradient: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Credit card exclusive",
    subtitle: "Special offers for credit card users",
    buttonLabel: "Unlock offers »",
    bankName: "Card Plus",
    features: ["15% cashback", "Zero interest on EMI"],
    gradient: "from-indigo-400 via-indigo-500 to-purple-500",
  },
];

export default function OffersPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("coupons");
  const [copiedCode, setCopiedCode] = useState(null);
  const [expandedOffer, setExpandedOffer] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleSignIn = () => {
    router.push("/profile");
  };

  const handleClaimGiftCards = () => {
    router.push("/wallet");
  };

  const handleUnlockOffers = () => {
    router.push("/bookings");
  };

  const toggleOfferDetails = (id) => {
    setExpandedOffer((prev) => (prev === id ? null : id));
  };

  const handleMenuAction = (path) => {
    setShowMenu(false);
    router.push(path);
  };

  const renderSiteCoupons = () => (
    <section className="space-y-3">
      <p className="text-sm font-medium uppercase text-gray-500 tracking-wide">
        Sitewide coupons
      </p>
      <div className="space-y-3">
        {SITE_COUPONS.map((offer) => (
          <article
            key={offer.id}
            className="bg-white border border-orange-100 shadow-sm rounded-2xl overflow-hidden transition-transform hover:-translate-y-1"
          >
            <div className="flex">
              <div
                className={`bg-gradient-to-b ${offer.gradient} text-white w-16 sm:w-20 flex flex-col items-center justify-between py-4 sm:py-6`}
              >
                <span
                  className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/80"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {offer.highlight}
                </span>
                <span
                  className="mt-4 text-base sm:text-lg font-bold"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {offer.amount}
                </span>
              </div>
              <div className="flex-1 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {offer.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(offer.code, offer.id)}
                    className="flex items-center gap-1 text-orange-600 text-sm font-medium"
                    aria-label={`Copy code ${offer.code}`}
                  >
                    {copiedCode === offer.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    Code: {offer.code}
                  </span>
                  <button
                    onClick={() => toggleOfferDetails(offer.id)}
                    className="text-sm font-semibold text-orange-600 flex items-center gap-1"
                  >
                    {expandedOffer === offer.id ? "Hide details" : "Read more"}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {expandedOffer === offer.id && (
                  <div className="mt-4 rounded-xl border border-orange-100 bg-orange-50/60 px-4 py-3 text-sm text-gray-600">
                    {offer.details}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  const renderGiftCards = () => (
    <section className="space-y-3">
      <p className="text-sm font-medium uppercase text-gray-500 tracking-wide">
        Bonus gift cards
      </p>
      <div className="space-y-3">
        {BONUS_GIFTCARDS.map((giftCard) => (
          <div
            key={giftCard.id}
            className="bg-white border border-orange-100 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row gap-6 sm:gap-8 transition-transform hover:-translate-y-1"
          >
            <div className="flex-1 space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-orange-600">
                <Shield className="w-4 h-4" />
                SpaceZ Rewards
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                {giftCard.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {giftCard.subtitle}
              </p>
              <button
                onClick={handleClaimGiftCards}
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                {giftCard.buttonLabel}
              </button>
            </div>
            <div className="relative w-full sm:w-52">
              <div
                className={`rounded-2xl bg-gradient-to-br ${giftCard.gradient} text-white px-5 py-4 shadow-lg`}
              >
                <p className="text-xs uppercase tracking-widest text-white/70">
                  Bonus card
                </p>
                <p className="mt-4 text-2xl font-semibold">{giftCard.accent}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-white/70">
                  <span>Valid on {giftCard.brands}</span>
                  <Gift className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderPaymentOffers = () => (
    <section className="space-y-3">
      <p className="text-sm font-medium uppercase text-gray-500 tracking-wide">
        Payment offers
      </p>
      <div className="space-y-3">
        {PAYMENT_OFFERS.map((offer) => (
          <div
            key={offer.id}
            className="bg-white border border-orange-100 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row gap-6 sm:gap-8 transition-transform hover:-translate-y-1"
          >
            <div className="flex-1 space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-orange-600">
                <Shield className="w-4 h-4" />
                Payment savings
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                {offer.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {offer.subtitle}
              </p>
              <button
                onClick={handleUnlockOffers}
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                {offer.buttonLabel}
              </button>
            </div>
            <div className="relative w-full sm:w-52">
              <div
                className={`rounded-2xl bg-gradient-to-br ${offer.gradient} text-white px-5 py-4 shadow-lg`}
              >
                <p className="text-xs uppercase tracking-widest text-white/70">
                  Featured bank
                </p>
                <p className="mt-4 text-2xl font-semibold">{offer.bankName}</p>
                <div className="mt-6 space-y-2 text-xs text-white/70">
                  {offer.features.map((feature, idx) => (
                    <p key={idx}>{feature}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "giftcards":
        return (
          <div className="space-y-6">
            {renderGiftCards()}
            <p className="text-center text-sm text-gray-500">
              Explore curated gift cards to unlock more savings.
            </p>
          </div>
        );
      case "payment":
        return (
          <div className="space-y-6">
            {renderPaymentOffers()}
            <p className="text-center text-sm text-gray-500">
              Choose your preferred payment method and save more.
            </p>
          </div>
        );
      case "coupons":
      default:
        return (
          <div className="space-y-8">
            {renderSiteCoupons()}
            {renderGiftCards()}
            {renderPaymentOffers()}
          </div>
        );
    }
  };

  return (
    <div className="relative">
      <header className="sticky top-0 z-40 bg-[#f7f0e6] px-4 sm:px-6 lg:px-8 py-4 border-b border-orange-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm">
              <Home className="w-5 h-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
                SpaceZ
              </p>
              <h1 className="text-lg font-semibold text-gray-900">Offers</h1>
            </div>
          </div>
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

      <div className="px-4 sm:px-6 lg:px-8 py-6 pb-24 space-y-8">
        <section className="bg-white rounded-2xl border border-orange-100 p-5 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm text-gray-500">
                Sign in to unlock exclusive additional rewards
              </p>
            </div>
            <button
              onClick={handleSignIn}
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Sign in
            </button>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <Shield className="w-4 h-4" />
            Safe and secure deals curated just for you
          </div>
        </section>

        <div className="sticky top-[73px] z-30 bg-[#f7f0e6] pb-2">
          <div className="bg-white border border-gray-200 rounded-full p-1 shadow-inner flex">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-500 text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {renderTabContent()}
      </div>
    </div>
  );
}
