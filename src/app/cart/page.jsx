"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, XIcon, ChevronRight } from "lucide-react";
import { Camera } from "@/images";
import BuyProduct from "@/components/BuyProduct";

export default function CardPage() {
  const board = [
    { label: "Shopping Cart", href: "/cart", active: true },
    { label: "Checkout", href: "/", active: false },
    { label: "Order Complete", href: "/complete", active: false },
  ];

  const [items, setItems] = useState([
    {
      id: "1",
      name: "8K Camera - Light Gray",
      price: 29.0,
      vendor: "wolmart28 vendor5",
      quantity: 1,
      image: Camera,
    },
  ]);

  const updateQuantity = (id, delta) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <div>
      <nav
        aria-label="Breadcrumb"
        className="flex justify-center px-4 py-3 mt-10"
      >
        <ol className="flex items-center space-x-2">
          {board.map((item, index) => (
            <li key={item.label} className="flex items-center">
              <a
                href={item.href}
                className={`text-2xl font-bold ${
                  item.active
                    ? "text-blue-600 hover:text-blue-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {item.label}
              </a>
              {index < board.length - 1 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="flex flex-col justify-center items-start lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-4">
        <div>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            Add <span className="text-blue-500 font-semibold">$2,875.00</span>{" "}
            to cart and get free shipping!
            <div className="w-full bg-blue-200 h-2 rounded-full mt-2">
              <div className="w-1/12 bg-blue-500 h-2 rounded-full"></div>
            </div>
          </div>
          <div className="mx-auto p-4">
            <div className="mb-4">
              <div className="grid grid-cols-4 gap-4 py-2 border-b">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4 gap-4 py-4 items-center border-b relative"
                >
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute -left-2 top-2 p-1 hover:bg-gray-100 rounded"
                  >
                    <XIcon className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        Vendor: {item.vendor}
                      </p>
                    </div>
                  </div>
                  <div>${item.price.toFixed(2)}</div>
                  npx shadcn@latest add input
                  <div className="flex items-center border rounded max-w-[120px]">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      readOnly
                      className="w-12 text-center"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <div>${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                className="bg-black hover:text-white text-white hover:bg-opacity-80"
                onClick={() => window.history.back()}
              >
                CONTINUE SHOPPING
              </Button>

              <div className="space-x-4">
                <Button variant="outline" onClick={clearCart}>
                  CLEAR CART
                </Button>
                <Button>UPDATE CART</Button>
              </div>
            </div>
          </div>
          <div className="w-full space-y-3">
            <h1>Coupon Discount</h1>
            <input
              className="w-full border-b ps-2"
              type="text"
              placeholder="Enter coupon code here..."
            />
            <Button variant="outline" className="uppercase">
              Apply Coupon
            </Button>
          </div>
        </div>
        <div>
          <BuyProduct />
        </div>
      </div>
    </div>
  );
}
