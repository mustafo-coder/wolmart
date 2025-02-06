'use client'
import { o1, o2, o3, o4, o5, o6 } from "@/data/TwoPage";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function TwoPage() {
  const categories = [
    { title: "Popular Departaments", data: o1 },
    { title: "New Arrivals", data: o2 },
    { title: "Top Ranking", data: o3 },
    { title: "Best Sellers", data: o4 },
    { title: "Our Featured", data: o5 },
    { title: "Trendy Now", data: o6 },
  ];

  return (
    <div className="p-6 xl:px-40">
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-3 gap-y-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-[#FFFAFA] p-6 rounded-lg shadow-md">
            <p className="font-bold pb-6 text-2xl">{category.title}</p>
            <div className="hidden xl:flex gap-x-6">
              {category.data.map((e, idx) => (
                <div key={idx} className="max-w-[194px] text-center">
                  <a href={idx}>
                    <img src={e.img} alt={e.name} className="w-full h-auto" />
                    <p className="my-2 text-lg">{e.name}</p>
                    <p className="font-bold">{e.price}</p>
                  </a>
                </div>
              ))}
            </div>
            {/* Mobil versiya */}
            <div className="xl:hidden">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{ clickable: true }}
                modules={[Pagination]}
              >
                {category.data.map((e, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="max-w-[194px] text-center mx-auto">
                      <a href={idx}>
                        <img
                          src={e.img}
                          alt={e.name}
                          className="w-full h-auto"
                        />
                        <p className="my-2 text-lg">{e.name}</p>
                        <p className="font-bold">{e.price}</p>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
