"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  ChevronRight,
  Copy,
  Menu,
  Search,
  Heart,
  MapPin,
  User,
} from "lucide-react";


const PRIMARY = "#C16B3E";

export default function Page() {
  const [activeTab, setActiveTab] = useState("giftcards");

  const coupons = [
    {
      discount: "₹1,500",
      code: "LONGSTAY",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    },
    {
      discount: "₹3,000",
      code: "EARLYBIRD",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    },
    {
      discount: "Flat 10%",
      code: "RUSHDEAL",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    },
  ];

  const showToast = (msg) => toast.success(msg, { duration: 2200 });

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      showToast("Copied!");
    } catch (err) {
      // fallback
      showToast("Copied (manual)!");
    }
  };

  const handleClaimGiftCards = () => {
    showToast("Gift cards claimed!");
  };

  const handleUnlockOffers = () => {
    showToast("Offers unlocked!");
  };

  return (
    <div className="min-h-screen bg-white pb-[76px]">
      <StatusBar />
      <Header />

      <main className="pt-7 flex flex-col gap-0 max-w-[1200px] mx-auto">
        <div className="px-6 mb-4">
          <h1 className="font-lexend font-[634] text-[20px] leading-7 tracking-[-0.25px] text-[#4B4E4B]">
            Offers
          </h1>
        </div>

        <div className="px-6 py-4 flex flex-col gap-3 mb-0">
          <p className="font-lexend font-[326] text-sm leading-5 text-[#4B4E4B]">
            Sign in to unlock exclusive additional rewards
          </p>
          <button
            onClick={() => showToast("Sign in (coming soon)")}
            style={{
              background: PRIMARY,
              color: "#fff",
            }}
            aria-label="Sign in"
            className="w-full bg-[#C16B3E] text-white rounded-sm px-4 py-2 font-lexend font-[326] text-base leading-6 min-h-[40px]"
          >
            Sign in
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 border-b border-[#E5E6E5]">
          <div className="flex justify-between items-center">
            {[
              { id: "coupons", label: "Coupons" },
              { id: "giftcards", label: "Giftcards" },
              { id: "payment", label: "Payment Offers" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center py-3 pb-2 flex-1 ${
                  activeTab === tab.id
                    ? "border-b-2 border-[#4B4E4B]"
                    : "border-b-[0.64px] border-[#E5E6E5]"
                }`}
              >
                <span
                  className={`font-lexend text-xs leading-[18px] ${
                    activeTab === tab.id
                      ? "font-[634] text-[#4B4E4B]"
                      : "font-[326] text-[#7D817D]"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Giftcards tab (default) */}
        {activeTab === "giftcards" && (
          <>
            <section className="px-6 py-6 flex flex-col gap-4">
              <h2 className="font-lexend font-[634] text-base leading-[22px] text-[#4B4E4B]">
                Sitewide coupons:
              </h2>
              <div className="flex flex-col gap-4">
                {coupons.map((c, i) => (
                  <CouponCard
                    key={i}
                    {...c}
                    onCopy={() => handleCopy(c.code)}
                  />
                ))}
              </div>
            </section>

            <section className="px-6 flex flex-col gap-4 mb-6">
              <h2 className="font-lexend font-[634] text-base leading-[22px] text-[#4B4E4B]">
                Bonus gift cards:
              </h2>
              {/* Myntra Gift Voucher */}
<div className="flex w-full items-stretch">
  <div
    className="flex flex-col justify-center items-center px-3 py-6 bg-[#E6007E] text-white"
    style={{ minWidth: 90 }}
  >
    <div
      className="font-bold whitespace-nowrap text-center"
      style={{
        transform: 'rotate(-90deg)',
        transformOrigin: 'center center',
        fontSize: '24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      ₹1500
    </div>
  </div>

  <div className="flex flex-col flex-1 px-5 py-5 pb-4 bg-[#FFF8F9] border-l-2 border-dashed border-[#E6007E] gap-2.5">
    <div className="flex items-center justify-between pr-1.5">
      <div className="flex items-center gap-2">
        <img
          src={"/myntra.png"}
          alt="Myntra Logo"
          className="w-6 h-6"
        />
        <h3 className="font-lexend font-[634] text-lg leading-6 text-[#4B4E4B]">
          MYNTRA
        </h3>
      </div>
      <button className="text-[#C16B3E] font-lexend font-[634] text-base"  onClick={() => toast.success('Myntra voucher collected!')}>
        Collect
      </button>
    </div>

    <p className="font-lexend font-[326] text-sm leading-5 text-[#7D817D]">
      Get this gift voucher on booking above ₹2000
    </p>

    <div className="h-[1px] bg-[#E5E6E5] w-full" />

    <button className="font-lexend font-[634] text-sm leading-5 text-[#7D817D] text-left py-1">
      Read more
    </button>
  </div>
</div>

{/* Hammer Gift Voucher */}
<div className="flex w-full items-stretch">
  <div
    className="flex flex-col justify-center items-center px-3 py-6 bg-black text-white"
    style={{ minWidth: 90 }}
  >
    <div
      className="font-bold whitespace-nowrap text-center"
      style={{
        transform: 'rotate(-90deg)',
        transformOrigin: 'center center',
        fontSize: '24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      ₹1000
    </div>
  </div>

  <div className="flex flex-col flex-1 px-5 py-5 pb-4 bg-[#FDFDFD] border-l-2 border-dashed border-black gap-2.5">
    <div className="flex items-center justify-between pr-1.5">
      <div className="flex items-center gap-2">
        <img
          src={"/hammer.png"}
          alt="Hammer Logo"
          className="w-6 h-6 bg-black p-1 rounded"
        />
        <h3 className="font-lexend font-[634] text-lg leading-6 text-[#4B4E4B]">
          HAMMER
        </h3>
      </div>
      <button className="text-[#C16B3E] font-lexend font-[634] text-base" onClick={()=>toast.success("Hammer voucher collected!")}>
        Collect
      </button>
    </div>

    <p className="font-lexend font-[326] text-sm leading-5 text-[#7D817D]">
      Get this gift voucher on booking above ₹1500
    </p>

    <div className="h-[1px] bg-[#E5E6E5] w-full" />

    <button className="font-lexend font-[634] text-sm leading-5 text-[#7D817D] text-left py-1">
      Read more
    </button>
  </div>
</div>

              <div className="relative bg-[#FDF9F7] p-4 pr-2 flex items-center gap-3 min-h-[100px]">
                <div className="flex flex-col gap-1 flex-1">
                  <div className="font-lexend text-[#874B2C]">
                    <span className="font-[634] text-sm">
                      Assured vouchers up to{" "}
                    </span>
                    <span className="font-bold text-2xl">₹1000</span>
                    <span className="text-[28px]">✨</span>
                  </div>
                  <p className="font-lexend font-[326] text-sm leading-5 text-[#4B4E4B]">
                    of trending brands
                  </p>
                </div>
                <div className="relative w-[125px] h-[111px] flex-shrink-0 -mr-2">
                  {/* SVG cards (kept same look) */}
                  <svg
                    className="absolute top-0 left-[14px] w-[100px] h-[59px]"
                    viewBox="0 0 102 62"
                    fill="none"
                  >
                    <rect
                      x="1.31177"
                      width="99.9989"
                      height="59.2586"
                      rx="3.70366"
                      transform="rotate(1.26841 1.31177 0)"
                      fill="url(#paint0_linear)"
                    />
                    <text
                      transform="translate(8.55353 7.56934) rotate(1.26841)"
                      fill="white"
                      style={{ whiteSpace: "pre" }}
                      fontFamily="Inter"
                      fontSize="14.8146"
                      fontWeight="bold"
                    >
                      <tspan x="0" y="14.3871">
                        ₹400
                      </tspan>
                    </text>
                    <text
                      transform="translate(8.22565 22.3805) rotate(1.26841)"
                      fill="white"
                      fillOpacity="0.6"
                      style={{ whiteSpace: "pre" }}
                      fontFamily="Inter"
                      fontSize="11.111"
                      fontWeight="300"
                    >
                      <tspan x="0" y="10.5404">
                        Gift card
                      </tspan>
                    </text>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="1.16237"
                        y1="29.9074"
                        x2="101.621"
                        y2="29.9074"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EA7611" />
                        <stop offset="1" stopColor="#F25B1B" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    className="absolute top-[33px] left-0 w-[122px] h-[72px]"
                    viewBox="0 0 126 79"
                    fill="none"
                  >
                    <rect
                      y="6.00903"
                      width="121.664"
                      height="72.0972"
                      rx="4.50608"
                      transform="rotate(-2.83101 0 6.00903)"
                      fill="url(#paint1_linear)"
                    />
                    <text
                      transform="translate(9.44641 14.5653) rotate(-2.83101)"
                      fill="white"
                      style={{ whiteSpace: "pre" }}
                      fontFamily="Inter"
                      fontSize="18.0243"
                      fontWeight="bold"
                    >
                      <tspan x="0" y="17.5543">
                        ₹500
                      </tspan>
                    </text>
                    <text
                      transform="translate(10.3365 32.5675) rotate(-2.83101)"
                      fill="white"
                      fillOpacity="0.6"
                      style={{ whiteSpace: "pre" }}
                      fontFamily="Inter"
                      fontSize="13.5182"
                      fontWeight="300"
                    >
                      <tspan x="0" y="12.9157">
                        Gift card
                      </tspan>
                    </text>
                    <defs>
                      <linearGradient
                        id="paint1_linear"
                        x1="-0.18177"
                        y1="42.396"
                        x2="122.041"
                        y2="42.396"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#196CD9" />
                        <stop offset="1" stopColor="#0D3973" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <button
                onClick={handleClaimGiftCards}
                className="w-full bg-[#C16B3E] text-white rounded-sm px-4 py-2 font-lexend font-[326] text-base leading-6 min-h-[40px]"
              >
                Claim gift cards »
              </button>
            </section>

            <section className="px-6 flex flex-col gap-4">
              <h2 className="font-lexend font-[634] text-base leading-[22px] text-[#4B4E4B]">
                Payment offers:
              </h2>
              <div className="bg-[#FDF9F7] p-3 pr-4 flex items-center gap-3">
                <div className="flex flex-col gap-1 flex-1">
                  <p className="font-lexend font-[326] text-sm leading-5 text-[#4B4E4B]">
                    Save more on your bookings
                  </p>
                  <div className="font-lexend text-[#874B2C]">
                    <span className="font-[634] text-2xl leading-5">
                      upto 15% Off
                    </span>
                    <br />
                    <span className="font-[634] text-sm">
                      on select payment methods
                    </span>
                  </div>
                </div>
                <div className="w-[81px] h-[74px] flex-shrink-0 relative">
                  <div className="absolute right-0 top-[3px] w-[72px] h-[72px] rounded-[14px] bg-[#C16B3E]/10" />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ba265a2e8d529d41705475b63239d0b78e2516b2?width=162"
                    alt="Payment methods"
                    className="absolute left-0 top-0 w-[81px] h-[70px]"
                  />
                </div>
              </div>

              <button
                onClick={handleUnlockOffers}
                className="w-full bg-[#C16B3E] text-white rounded-sm px-4 py-2 font-lexend font-[326] text-base leading-6 min-h-[40px] flex items-center justify-center gap-1"
              >
                <span>Unlock offers</span>
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
                <ChevronRight className="w-5 h-5 -ml-3" strokeWidth={2} />
              </button>
            </section>
          </>
        )}

        {/* Coupons tab */}
        {activeTab === "coupons" && (
          <section className="px-4 py-6 flex flex-col gap-4">
            <h2 className="font-lexend font-[634] text-base leading-[22px] text-[#4B4E4B]">
              Sitewide coupons:
            </h2>
            <div className="flex flex-col gap-4">
              {coupons.map((c, i) => (
                <CouponCard key={i} {...c} onCopy={() => handleCopy(c.code)} />
              ))}
            </div>
          </section>
        )}

        {/* Payment tab */}
        {activeTab === "payment" && (
          <section className="px-6 py-6 flex flex-col gap-4">
            <h2 className="font-lexend font-[634] text-base leading-[22px] text-[#4B4E4B]">
              Payment offers:
            </h2>
            {/* HDFC Bank Offer Card */}
<div className="flex w-full items-stretch">
  <div
    className="flex flex-col justify-center items-center px-3 py-6 bg-[#1746A2] text-white"
    style={{ minWidth: 90 }}
  >
    <div
      className="font-[Libre_Caslon_Text] font-semibold text-[32px] leading-[120%] tracking-[0] uppercase"
      style={{
        transform: 'rotate(-90deg)',
        transformOrigin: 'center center',
        fontSize: '22px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      10% OFF
    </div>
  </div>

  <div className="flex flex-col flex-1 px-5 py-5 pb-4 bg-[#FDF9F7] border-l-2 border-dashed border-[#1746A2] gap-2.5">
    <div className="flex items-center gap-2 mb-1">
      <img
        src={"/hdfc.png"}
        alt="HDFC Bank Logo"
        className="w-6 h-6"
      />
      <h3 className="font-lexend font-[634] text-lg leading-6 text-[#4B4E4B]">
        HDFC BANK
      </h3>
    </div>

    <p className="font-lexend font-[326] text-sm leading-5 text-[#7D817D]">
      Get 10% off on booking above ₹1500
    </p>

    <div className="h-[1px] bg-[#E5E6E5] w-full" />

    <button className="font-lexend font-[634] text-sm leading-5 text-[#7D817D] text-left py-1">
      Read more
    </button>
  </div>
</div>

            <div className="bg-[#FDF9F7] p-3 pr-4 flex items-center gap-3">
              <div className="flex flex-col gap-1 flex-1">
                <p className="font-lexend font-[326] text-sm leading-5 text-[#4B4E4B]">
                  Save more on your bookings
                </p>
                <div className="font-lexend text-[#874B2C]">
                  <span className="font-[634] text-2xl leading-5">
                    upto 15% Off
                  </span>
                  <br />
                  <span className="font-[634] text-sm">
                    on select payment methods
                  </span>
                </div>
              </div>
              <div className="w-[81px] h-[74px] flex-shrink-0 relative">
                <div className="absolute right-0 top-[3px] w-[72px] h-[72px] rounded-[14px] bg-[#C16B3E]/10" />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ba265a2e8d529d41705475b63239d0b78e2516b2?width=162"
                  alt="Payment methods"
                  className="absolute left-0 top-0 w-[81px] h-[70px]"
                />
              </div>
            </div>

            <button
              onClick={handleUnlockOffers}
              className="w-full bg-[#C16B3E] text-white rounded-sm px-4 py-2 font-lexend font-[326] text-base leading-6 min-h-[40px] flex items-center justify-center gap-1"
            >
              <span>Unlock offers</span>
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
              <ChevronRight className="w-5 h-5 -ml-3" strokeWidth={2} />
            </button>
          </section>
        )}
      </main>

      <Toaster position="top-center" />

    </div>
  );
}


function CouponCard({ discount, code, description, onCopy }) {
  return (
    <div className="flex w-full items-stretch">
      <div
        className="flex flex-col justify-center items-center px-3 py-6"
        style={{ background: PRIMARY, minWidth: 90 }}
      >
        <div           className="text-white font-bold whitespace-nowrap text-center"
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: 'center center',
            fontSize: '28px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '0'
          }}
>
  {discount}
</div>

      </div>

      <div className="flex flex-col flex-1 px-5 py-5 pb-4 bg-[#FDF9F7] border-l-2 border-dashed border-[#AD6038] gap-2.5">
        <div className="flex items-center justify-between pr-1.5">
          <h3 className="font-lexend font-[634] text-lg leading-6 text-[#4B4E4B]">
            {code}
          </h3>
          <button
            onClick={onCopy}
            className="flex items-center gap-1.5 text-[#874B2C] min-w-[80px] justify-end py-1"
            aria-label={`Copy coupon ${code}`}
          >
            <Copy
              className="w-[18px] h-[18px] text-[#9A5632]"
              strokeWidth={2}
            />
            <span className="font-lexend font-[634] text-base leading-[22px]">
              Copy
            </span>
          </button>
        </div>

        <p className="font-lexend font-[326] text-sm leading-5 text-[#7D817D]">
          {description}
        </p>
        <div className="h-[1px] bg-[#E5E6E5] w-full" />
        <button className="font-lexend font-[634] text-sm leading-5 text-[#7D817D] text-left py-1">
          Read more
        </button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="w-full border-b border-[#E5E6E5] bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-5 md:px-6 py-4 max-w-[1200px] mx-auto">
        <div className="flex items-end gap-1.5 pb-0.5">
          <img 
          src={"/logo.png"}
          className="h-10 w-10 p-2"
          />
          <div className="bg-gradient-to-r from-[#744025] to-[#9A5632] bg-clip-text text-transparent pb-0.5">
            SPACEZ
          </div>
        </div>
        <button
          onClick={() => toast("Menu (coming soon)")}
          className="w-6 h-6 flex items-center justify-center"
          aria-label="Menu"
        >
          <Menu className="w-4 h-4 text-[#9A5632]" strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}

function StatusBar() {
  return (
    <div className="flex justify-between items-end px-6 py-2.5 bg-white h-10 max-w-[1200px] mx-auto md:hidden">
      <div className="text-[#646864] font-medium text-sm">9:30</div>
      <div className="flex items-center gap-1">
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
          <path
            opacity="0.1"
            d="M7.5 0.416626C4.1 0.416626 1.125 1.90413 -1 4.24163L7.5 14.5833L16 4.24163C13.875 1.90413 10.9 0.416626 7.5 0.416626Z"
            fill="#646864"
          />
        </svg>
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none">
          <path
            d="M0.583008 0.416626L14.7497 14.5833H0.583008V0.416626Z"
            fill="#646864"
          />
        </svg>
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
          <path
            opacity="0.3"
            d="M6.5 0H3.5V1.5H2C1.448 1.5 1 2.00375 1 2.625V13.875C1 14.4963 1.448 15 2 15H8C8.552 15 9 14.4963 9 13.875V2.625C9 2.00375 8.552 1.5 8 1.5H6.5V0Z"
            fill="#646864"
          />
          <path
            d="M1 8C1 8.58333 1 13.3667 1 13.95C1 14.5299 1.448 15 2 15H8C8.552 15 9 14.5299 9 13.95C9 13.3667 9 8.58333 9 8H1Z"
            fill="#646864"
          />
        </svg>
      </div>
    </div>
  );
}
