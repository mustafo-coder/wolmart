"use client";

import CloseIcon from "@mui/icons-material/Close";
import { Button, Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import BalanceIcon from "@mui/icons-material/Balance";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import XIcon from "@mui/icons-material/X";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Link from "next/link";

export default function Wishlist() {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const data = [
    {
      id: 1,
      images: [
        "https://picsum.photos/412/412?random=1",
        "https://picsum.photos/412/412?random=6",
        "https://picsum.photos/412/412?random=11",
        "https://picsum.photos/412/412?random=16",
      ],
      image: "https://picsum.photos/412/412?random=1",
      name: "Qora maydalagich",
      price: 110,
      reviews: 2,
      status: "In Stock",
      rate: 4,
      sku: "MS46891391",
      category: "Kitchen",
      brand: "GREEN GRASS ORIGIN",
    },
    {
      id: 2,
      images: [
        "https://picsum.photos/412/412?random=2",
        "https://picsum.photos/412/412?random=7",
        "https://picsum.photos/412/412?random=12",
        "https://picsum.photos/412/412?random=17",
      ],
      image: "https://picsum.photos/412/412?random=2",
      name: "Oq kofe tegirmoni",
      price: 95,
      reviews: 2,
      status: "Out of Stock",
      rate: 4,
      sku: "MS46891392",
      category: "Kitchen",
      brand: "GREEN GRASS ORIGIN",
    },
    {
      id: 3,
      images: [
        "https://picsum.photos/412/412?random=3",
        "https://picsum.photos/412/412?random=8",
        "https://picsum.photos/412/412?random=13",
        "https://picsum.photos/412/412?random=18",
      ],
      image: "https://picsum.photos/412/412?random=3",
      name: "Metall maydalagich",
      price: 130,
      reviews: 2,
      status: "In Stock",
      rate: 4,
      sku: "MS46891393",
      category: "Kitchen",
      brand: "GREEN GRASS ORIGIN",
    },
    {
      id: 4,
      images: [
        "https://picsum.photos/412/412?random=4",
        "https://picsum.photos/412/412?random=9",
        "https://picsum.photos/412/412?random=14",
        "https://picsum.photos/412/412?random=19",
      ],
      image: "https://picsum.photos/412/412?random=4",
      name: "Zanglamas po'latdan maydalagich",
      price: 150,
      reviews: 2,
      status: "In Stock",
      rate: 4,
      sku: "MS46891394",
      category: "Kitchen",
      brand: "GREEN GRASS ORIGIN",
    },
    {
      id: 5,
      images: [
        "https://picsum.photos/412/412?random=5",
        "https://picsum.photos/412/412?random=10",
        "https://picsum.photos/412/412?random=15",
        "https://picsum.photos/412/412?random=20",
      ],
      image: "https://picsum.photos/412/412?random=5",
      name: "Mini maydalagich",
      price: 80,
      reviews: 2,
      status: "Limited Stock",
      rate: 4,
      sku: "MS46891395",
      category: "Kitchen",
      brand: "GREEN GRASS ORIGIN",
    },
  ];

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setQuantity(1);
  };

  function onClose() {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }
   
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
        <FavoriteBorderIcon
          className="w-24 h-24 text-gray-300 mb-4"
          strokeWidth={1.5}
        />
        <h2 className="text-gray-600 text-lg mb-6">
          No products added to the wishlist
        </h2>
        <Link href="/shop">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8">
            GO SHOP
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="p-6 container">
      <h1 className="text-2xl font-semibold mb-6">My wishlist</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4 font-medium">Product</th>
              <th className="text-left py-4 px-4 font-medium">Price</th>
              <th className="text-left py-4 px-4 font-medium">Stock Status</th>
              <th className="text-left py-4 px-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-2 px-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col relative">
                      <div className="relative">
                        <button
                          className="text-black shadow-lg hover:text-gray-600 transition-colors rounded-full bg-white w-6 h-6 absolute -top-2 -right-2 flex items-center justify-center z-10"
                          aria-label="Remove from wishlist"
                          onClick={() => console.log(product.id)}
                        >
                          <CloseIcon fontSize="small" />
                        </button>

                        <img
                          width={111}
                          height={125}
                          src={product.image}
                          alt={product.name}
                          className="w-28 h-32 object-cover"
                        />
                      </div>
                    </div>
                    <span className="font-medium">{product.name}</span>
                  </div>
                </td>
                <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                <td className="py-2 px-4">
                  <span
                    className={`${
                      product.status === "In Stock"
                        ? "text-green-500"
                        : product.status === "Limited Stock"
                        ? "text-orange-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <div className="flex gap-2">
                    <Button
                      variant="outlined"
                      sx={{ whiteSpace: "nowrap" }}
                      onClick={() => handleQuickView(product)}
                    >
                      QUICK VIEW
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        whiteSpace: "nowrap",
                        bgcolor: "grey.900",
                        "&:hover": {
                          bgcolor: "grey.800",
                        },
                      }}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="relative max-w-4xl w-full bg-white p-6 rounded-lg">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <CloseIcon />
            </button>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  className="h-96 rounded-lg"
                >
                  {selectedProduct.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex h-full">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${selectedProduct.name} ${index + 1}`}
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="thumbs-swiper h-24"
                >
                  {selectedProduct.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="h-full cursor-pointer">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">
                  {selectedProduct.name}
                </h2>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://d-themes.com/wordpress/wolmart/demo-5/wp-content/uploads/sites/8/2021/03/brand5.jpg"
                      alt="Brand logo"
                      className="w-28 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <div>Category: {selectedProduct.category}</div>
                    <div className="text-sm text-gray-500">
                      SKU: {selectedProduct.sku}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">
                    ${selectedProduct.price.toFixed(2)}
                  </div>
                  <div className="pt-2 flex items-center gap-2">
                    <Rating
                      name="size-medium"
                      defaultValue={selectedProduct.rate}
                      disabled
                    />
                    <a
                      href={`/product/${selectedProduct.id}`}
                      className="text-gray-500 hover:text-blue-500 hover:underline text-[12px]"
                    >
                      {selectedProduct.reviews} reviews
                    </a>
                  </div>
                </div>
                <div className="text-gray-500 text-[13px] border-b py-4">
                  <p className="flex items-center gap-2 mb-2">
                    <CheckIcon className="text-green-500" />
                    Ultrices eros in cursus turpis massa tincidunt cursus
                    mattis.
                  </p>
                  <p className="flex items-center gap-2 mb-2">
                    <CheckIcon className="text-green-500" />
                    Volutpat ac tincidunt vitae semper quis lectus.
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckIcon className="text-green-500" />
                    Aliquam id diam maecenas ultricies mi eget mauris.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md px-2 py-1">
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(
                          Math.max(1, Number.parseInt(e.target.value) || 1)
                        )
                      }
                      className="w-10 text-center border-none outline-none bg-transparent"
                    />
                    <div className="flex gap-2 ml-auto">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        -
                      </button>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg">
                    ADD TO CART
                  </button>
                </div>

                {/* links */}
                <div className="flex items-center pt-4 border-t gap-2">
                  <div className="flex gap-1">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=61557754299528"
                      className="p-1 hover:bg-gray-100 rounded-full border text-center w-9 h-9"
                      aria-label="Facebook"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                    <a
                      target="_blank"
                      href="https://x.com"
                      className="p-1 hover:bg-gray-100 rounded-full border text-center w-9 h-9"
                      aria-label="X"
                      rel="noopener noreferrer"
                    >
                      <XIcon className="w-5 h-5" />
                    </a>
                    <a
                      target="_blank"
                      href="https://pinterest.com"
                      className="p-1 hover:bg-gray-100 rounded-full border text-center w-9 h-9"
                      aria-label="Pinterest"
                      rel="noopener noreferrer"
                    >
                      <PinterestIcon className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="flex gap-1 border-l pl-2">
                    <button
                      className="p-1 hover:bg-gray-100 rounded-full"
                      aria-label="Add to favorites"
                    >
                      <FavoriteBorderIcon className="w-5 h-5" />
                    </button>
                    <button
                      className="p-1 hover:bg-gray-100 rounded-full"
                      aria-label="View balance"
                    >
                      <BalanceIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx global>{`
            .swiper-button-next,
            .swiper-button-prev {
              background-color: rgba(255, 255, 255, 0.8);
              padding: 24px;
              border-radius: 50%;
              color: #000;
            }

            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background-color: rgba(255, 255, 255, 1);
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 16px;
            }

            .thumbs-swiper .swiper-slide {
              opacity: 0.4;
              transition: opacity 0.3s;
            }

            .thumbs-swiper .swiper-slide-thumb-active {
              opacity: 1;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
