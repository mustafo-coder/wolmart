"use client";

import React, { useState, useRef } from "react";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Link,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// MUI Theme yaratish
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
        },
      },
    },
  },
});

// ProductImageSwiper komponenti
const ProductImageSwiper = ({ productImages }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const handle = useFullScreenHandle();

  const [magnifierStates, setMagnifierStates] = useState(
    productImages.map(() => ({
      showMagnifier: false,
      magnifierPosition: { x: 50, y: 50 },
    }))
  );

  const imageRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    if (!imageRefs.current[index]) return;

    const image = imageRefs.current[index];
    const rect = image.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (x < 0 || x > 100 || y < 0 || y > 100) return;

    setMagnifierStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].magnifierPosition = { x, y };
      return newStates;
    });
  };

  const handleMouseEnter = (index) => {
    setMagnifierStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].showMagnifier = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setMagnifierStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].showMagnifier = false;
      return newStates;
    });
  };

  const handleFullScreen = (index) => {
    setCurrentImage(index);
    handle.enter();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="container mx-auto px-4">
        {/* Rasm galereyasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productImages.map((img, index) => (
            <div
              className={`col-span-1 ${index === 0 ? "md:col-span-2" : ""}`}
              key={index}
            >
              <div
                className="relative overflow-hidden cursor-none bg-gray-50 rounded-lg"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{ width: "100%", height: "650px" }}
              >
                <img
                  ref={(el) => (imageRefs.current[index] = el)}
                  src={img || "/placeholder.svg"}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onClick={() => setCurrentImage(index)}
                />
                {magnifierStates[index].showMagnifier && (
                  <div
                    className="absolute border-2 border-white rounded-full w-64 h-64"
                    style={{
                      left: `${magnifierStates[index].magnifierPosition.x}%`,
                      top: `${magnifierStates[index].magnifierPosition.y}%`,
                      backgroundImage: `url(${img})`,
                      backgroundPosition: `${magnifierStates[index].magnifierPosition.x}% ${magnifierStates[index].magnifierPosition.y}%`,
                      backgroundSize: "400% 400%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                )}
                <button
                  className="absolute right-4 bottom-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                  onClick={() => handleFullScreen(index)}
                >
                  <Maximize2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* To'liq ekran rejimi */}
        <FullScreen handle={handle}>
          {handle.active && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
              <button
                className="absolute left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev > 0 ? prev - 1 : productImages.length - 1
                  )
                }
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <img
                src={productImages[currentImage]}
                alt={`Full Screen Product Image ${currentImage + 1}`}
                className="max-w-full max-h-full rounded-lg"
              />
              <button
                className="absolute right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev < productImages.length - 1 ? prev + 1 : 0
                  )
                }
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              <button
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                onClick={handle.exit}
              >
                <Maximize2 className="w-6 h-6" />
              </button>
            </div>
          )}
        </FullScreen>

        {/* More items section */}
        <ProductListing />
      </div>
    </ThemeProvider>
  );
};

// ProductListing komponenti
const ProductListing = () => {
  const products = [
    {
      id: 1,
      image:
        "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2024/05/shop28-product-48-1-300x336.jpg",
      alt: "Gray running shoes",
    },
    {
      id: 2,
      image:
        "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2023/12/shop28-product-3-1-300x336.jpg",
      alt: "Black card reader",
    },
    {
      id: 3,
      image:
        "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2023/12/shop28-product-33-1-300x336.jpg",
      alt: "Bluetooth headset",
    },
    {
      id: 4,
      image:
        "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2023/12/shop28-product-49-1-300x336.jpg",
      alt: "Athletic shoes",
    },
    {
      id: 5,
      image:
        "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2023/12/shop28-product-8-1-300x336.jpg",
      alt: "Gray handbag",
    },
    {
      id: 6,
      image:
        "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2023/12/shop28-product-13-1-300x336.jpg",
      alt: "DSLR camera",
    },
    {
      id: 7,
      image:
        "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2023/12/shop28-product-18-1-300x336.jpg",
      alt: "Dark polo shirt",
    },
    {
      id: 8,
      image:
        "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2023/12/shop28-product-23-1-300x336.jpg",
      alt: "Brown leather gloves",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" component="h1" fontWeight="600">
          More items from this seller
        </Typography>
        <Link
          href="#"
          color="primary"
          underline="hover"
          sx={{ fontWeight: 900 }}
        >
          View All
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          pb: 2,
          "::-webkit-scrollbar": {
            height: 6,
            WebkitAppearance: "none",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,.3)",
          },
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              minWidth: 66, // minWidth ni kamaytirish
              borderRadius: 0,
              cursor: "pointer",
              "&:hover": {
                boxShadow: 3,
              },
            }}
          >
            <CardMedia
              component="img"
              height="50" // height ni kamaytirish
              image={product.image || "/placeholder.svg"}
              alt={product.alt}
              sx={{
                aspectRatio: "1/1",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default ProductImageSwiper;
