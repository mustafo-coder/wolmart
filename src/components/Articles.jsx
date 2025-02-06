'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightAlt } from '@mui/icons-material';
import 'swiper/css';

import article1 from "@/app/images/article1.png"
import article2 from "@/app/images/article2.png"
import article3 from "@/app/images/article3.png"
import article4 from "@/app/images/article4.png"

const articles = [
    {
        category: "Fashion , Hobbies",
        date: "DECEMBER 26, 2023",
        title: "Aliquam tincidunt mauris eurisus ...",
        description: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egestas, ant at vulputate volutpat, ultrices metus...",
        image: article1,
    },
    {
        category: "Hobbies , Lifestyle",
        date: "JANUARY 10, 2024",
        title: "Cras ornare tristique elit Morbi pu...",
        description: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egestas, ant at vulputate volutpat, ultrices metus...",
        image: article2,
    },
    {
        category: "Entertainment , Lifestyle",
        date: "JANUARY 10, 2024",
        title: "Vivamus vestibulum nulla nec ant...",
        description: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egestas, ant at vulputate volutpat, ultrices metus...",
        image: article3,
    },
    {
        category: "Entertainment , Lifestyle",
        date: "JANUARY 10, 2024",
        title: "Fusce lacinia arcuet nulla lect us a...",
        description: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egestas, ant at vulputate volutpat, ultrices metus...",
        image: article4,
    }
];

const duplicatedArticles = [...articles, ...articles];

export default function Articles() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-6">Our Articles</h2>
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="w-full"
                >
                    {duplicatedArticles.map((article, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-lg rounded-lg p-4 h-full">
                                <Link href="/" className="block overflow-hidden rounded-lg">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={500}
                                        height={300}
                                        className="rounded-lg w-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>
                                <div className="mt-4 text-gray-500 text-sm">{article.category}</div>
                                <div className="text-gray-700 font-medium text-xs mt-2">{article.date}</div>
                                <Link href="/" className="block text-lg font-semibold mt-2 text-gray-900 hover:text-blue-600">
                                    {article.title}
                                </Link>
                                <p className="text-sm text-gray-600 mt-2">{article.description}</p>
                                <Link href="/" className="mt-4 inline-flex items-center font-semibold text-blue-600 hover:text-blue-800">
                                    <span>View More</span>
                                    <ArrowRightAlt className="ml-1" />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}