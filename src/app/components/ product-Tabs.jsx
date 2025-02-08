"use client";

import { useState } from "react";
import { Star, Check, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const benefits = [
    {
      title: "Free Shipping & Return",
      description:
        "We offer free shipping for products on orders above 50$ and offer free delivery for all orders in US.",
    },
    {
      title: "Free and Easy Returns",
      description:
        "We guarantee our products and you could get back all of your money anytime you want in 30 days.",
    },
    {
      title: "Special Financing",
      description:
        "Get 20%-50% off items over 50$ for a month or over 250$ for a year with our special credit card.",
    },
  ];

  const bulletPoints = [
    "Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.",
    "Vivamus finibus vel mauris ut vehicula.",
    "Nullam a magna porttitor, dictum risus nec, faucibus sapien.",
    "Ultrices eros in cursus turpis massa tincidunt ante in nibh mauris cursus.",
    "Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.",
  ];

  const ratings = [
    { stars: 5, percentage: "55.6%" },
    { stars: 4, percentage: "44.4%" },
    { stars: 3, percentage: "0%" },
    { stars: 2, percentage: "0%" },
    { stars: 1, percentage: "0%" },
  ];

  const renderStars = (count, filled = true, size = "w-4 h-4") => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`${size} ${
            i < count
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ));
  };

  const renderDescription = () => (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6 p-[3px_0px_20px]">
        <p
          className="text-[#666666] text-[13px] font-inter"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt arcu cursus vitae congue mauris. Sagittis id
          consectetur purus ut. Tellus rutrum tellus pelle vel pretium lectus
          quam id leo in vitae turpis massa.
        </p>
        <ul className="space-y-3">
          {bulletPoints.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span
                className="text-[#666666] text-[13px] font-inter"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="relative cursor-pointer"
        onClick={() =>
          window.open(
            "https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/product-video.mp4",
            "_blank"
          )
        }
      >
        <img
          src="https://d-themes.com/wordpress/wolmart/elements/wp-content/uploads/sites/3/2021/03/product-video.jpg"
          alt="Product"
          className="w-full rounded-lg"
        />
        <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white" />
      </div>

      <div className="md:col-span-2 grid md:grid-cols-3 gap-8 mt-12">
        {benefits.map((benefit, i) => (
          <div key={i} className="p-6 border rounded-lg">
            <h3
              className="text-[#222222] text-[14px] font-inter font-semibold"
              style={{
                fontFamily: "Inter, sans-serif",
                margin: "0px 0px 6px",
              }}
            >
              {benefit.title}
            </h3>
            <p
              className="text-[#666666] text-[13px] font-inter"
              style={{
                fontFamily: "Inter, sans-serif",
                margin: "0px 0px 15px",
                padding: "0px 0px 0px 25px",
              }}
            >
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReviews = () => (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="mb-8">
          <div className="flex items-baseline gap-4">
            <span
              className="text-[60px] font-bold text-[#1E5CEA]"
              style={{
                margin: "0px 18px 0px 0px",
                width: "86.53px",
                height: "60px",
              }}
            >
              4.5
            </span>

            <div>
              <div className="flex gap-1">{renderStars(4)}</div>
              <p
                className="text-[12px] text-[#AAAAAA] font-inter"
                style={{ margin: "2px 0px" }}
              >
                (2 Reviews)
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[14px] text-[#222222] font-inter mb-[25px]">
              <span className="font-semibold">100%</span> Recommended
              <span className="text-[#666666]"> (2 of 2)</span>
            </p>

            {ratings.map((rating, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">{renderStars(rating.stars)}</div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: rating.percentage }}
                  />
                </div>
                <span className="text-[14px] text-[#666666] font-inter w-12">
                  {rating.percentage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[20px] text-[#222222] font-inter font-semibold mb-[5px]">
          Submit Your Review
        </h3>

        <form className="space-y-4">
          <div>
            <label className="block text-[14px] text-[#222222] font-inter mb-[5px]">
              Your Rating
            </label>
            <div className="flex gap-1">
              {renderStars(
                0,
                false,
                "w-6 h-6 cursor-pointer hover:text-yellow-400"
              )}
            </div>
          </div>

          <div>
            <textarea
              placeholder="Write Your Review Here..."
              className="w-full border rounded-lg p-3 h-32"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg p-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg p-3"
            />
          </div>
          <button
            type="submit"
            className="bg-[#454545] text-[#FFFFFF] text-[14px] font-inter px-[27px] py-[13px] rounded-lg hover:bg-gray-700"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );

  const renderVendorInfo = () => (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div>
        {/* Vendor Header */}
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2024/05/cropped-shop28-vendor-5.jpg"
            alt="Vendor"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-lg">Jessica Doe</h3>
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(4)}</div>
              <span className="text-sm text-gray-500">(15 Reviews)</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-gray-700 text-[14px]">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium">Store Name:</span>
            <span>walmart28 vendor5</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium">Phone:</span>
            <a href="tel:123456793" className="text-blue-600 hover:underline">
              123456793
            </a>
          </div>
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
            VISIT STORE
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      <div className="text-[#666666] text-[14px] leading-relaxed font-inter">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis
          tellus in metus vulputate eu scelerisque felis...
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200 -mb-px">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {[
            { id: "description", label: "Description" },
            { id: "reviews", label: "Customer Reviews (2)" },
            { id: "vendor", label: "Vendor Info" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-[13px] px-0 relative text-[20px] font-inter ${
                activeTab === tab.id
                  ? "text-[#222222] border-b-2 border-[#222222] font-semibold"
                  : "text-gray-500"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-8">
        {activeTab === "description" && renderDescription()}
        {activeTab === "reviews" && renderReviews()}
        {activeTab === "vendor" && renderVendorInfo()}
      </div>
    </div>
  );
}
