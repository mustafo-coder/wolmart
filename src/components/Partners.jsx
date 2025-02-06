'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import red from "@/app/images/red.png"
import ns8 from "@/app/images/ns8.png"
import nodejs from "@/app/images/nodejs.png"
import greenGrass from "@/app/images/green-grass.png"
import elegantAuto from "@/app/images/elegant-auto.png"
import sterling from "@/app/images/sterling.png"
import skySuite from "@/app/images/sky-suite.png"
import sass from "@/app/images/sass.png"
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';


const logos = [red, ns8, nodejs, greenGrass, elegantAuto, sterling, skySuite, sass];
const duplicatedLogos = [ ...logos, ...logos]

export default function Partners() {
  return (
    <div className="w-full py-6 ps-6 flex justify-between container mx-auto">
      <Swiper
      modules={[Autoplay]}
        // spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
      }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 8 },
        }}
        className="flex items-center"
      >
        {duplicatedLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image src={logo} alt={`Logo ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
