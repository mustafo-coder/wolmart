"use client"; // Bu Next.js da client-side rendering uchun kerak bo'lgan direktiva

import { useState } from "react"; // Reactning useState hook'ini import qilamiz
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Modal,
  Rating,
  IconButton,
} from "@mui/material"; // Material-UI komponentlarini import qilamiz
import AddIcon from "@mui/icons-material/Add"; // Plus ikonkasi
import RemoveIcon from "@mui/icons-material/Remove"; // Minus ikonkasi
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"; // Savat ikonkasi
import BalanceIcon from "@mui/icons-material/Balance"; // Balans ikonkasi
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined"; // Check ikonkasi
import StarRoundedIcon from "@mui/icons-material/StarRounded"; // To'ldirilgan yulduz ikonkasi
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded"; // Bo'sh yulduz ikonkasi
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"; // Orqaga strelkasi
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; // Oldinga strelkasi
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"; // Yopish ikonkasi
import ProductImageSwiper from "./ProductImageSwiper"; // Mahsulot rasmlarini ko'rsatuvchi komponent

// Material-UI uchun mavzu yaratamiz
const theme = createTheme({
  palette: {
    primary: {
      main: "#4461F2", // Asosiy rang
    },
    background: {
      default: "#fff", // Fon rangi
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif', // Shrift turi
  },
});

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1); // Mahsulot miqdorini boshqarish uchun state
  const [currentImage, setCurrentImage] = useState(0); // Joriy rasmni ko'rsatish uchun state
  const [isFullScreen, setIsFullScreen] = useState(false); // To'liq ekran rejimi uchun state
  const [rating, setRating] = useState(4); // Reytingni boshqarish uchun state

  // Mahsulot miqdorini o'zgartirish funksiyasi
  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, value); // Miqdor 1 dan kam bo'lmasligi uchun
    setQuantity(newQuantity);
  };

  // Reytingni o'zgartirish funksiyasi
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const productImages = [
    "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2023/12/shop28-product-28-1.jpg",
    "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2023/12/shop28-product-28-2.jpg",
    "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2023/12/shop28-product-28-3.jpg",
    "https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2023/12/shop28-product-28-4.jpg",
  ];

  // To'liq ekran rejimini yoqish/o'chirish funksiyasi
  const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Material-UI ning asosiy CSS stilini qo'llaymiz */}
        <Container maxWidth="xl" disableGutters sx={{ px: 3, py: 2 }}>
          {/* Navigatsiya qismi */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 4,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                color: "#6B7280",
                fontSize: 14,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: 13,
                  fontFamily: "sans-serif",
                  color: "#11111",
                  "&:hover": { color: "#222222" },
                }}
              >
                <span style={{ cursor: "pointer" }}>Home</span>
                <span>{">"}</span>
                <span style={{ cursor: "pointer" }}>Accessories</span>
                <span>{">"}</span>
                <span style={{ color: "#111827" }}>Reception Chair</span>
              </Box>
            </Box>
            {/* < va > start */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  width: 25,
                  height: 25,
                  borderRadius: "50%",
                  border: "1px solid #eee",
                  color: "#666",
                  "&:hover": {
                    backgroundColor: "#002BFF",
                    color: "#fff",
                  },
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
              </IconButton>
              <IconButton
                sx={{
                  width: 25,
                  height: 25,
                  borderRadius: "50%",
                  border: "1px solid #eee",
                  color: "#666",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#002BFF",
                    color: "#fff",
                  },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
              </IconButton>
            </Box>
            {/* < va > end */}
          </Box>
          {/* rasmlar */}
          <Grid container spacing={4}>
            {/* Mahsulot rasmlari qismi */}
            <Grid item xs={12} md={6}>
              <ProductImageSwiper
                productImages={productImages}
                toggleFullScreen={toggleFullScreen}
              />
            </Grid>

            {/* Mahsulot tafsilotlari qismi */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#222222",
                    fontSize: "23px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                  }}
                >
                  Reception Chair
                </Typography>

                <Box sx={{ display: "flex", gap: 2, alignItems: "start" }}>
                  <Box
                    component="img"
                    src="https://d-themes.com/wordpress/wolmart/demo-28/wp-content/uploads/sites/49/2024/05/shop28-brand-8.png?height=50&width=50"
                    alt="Brand Logo"
                    sx={{ width: 45, height: 35 }}
                  />
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
                        color: "#666666",
                      }}
                    >
                      Categories:{" "}
                      <Typography
                        component="span"
                        sx={{
                          color: "#999999",
                          fontSize: "14px",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Accessories, Home & Garden
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
                        color: "#999999",
                      }}
                    >
                      SKU: MS98282859
                    </Typography>
                  </Box>
                </Box>

                <hr />
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      fontSize: "29px",
                      fontFamily: "Inter, sans-serif",
                      color: "#222222",
                    }}
                  >
                    $198.00
                  </Typography>

                  {/* Reyting tizimi */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Rating
                      value={rating}
                      onChange={(event, newValue) =>
                        handleRatingChange(newValue)
                      }
                      precision={0.5}
                      icon={
                        <StarRoundedIcon
                          fontSize="inherit"
                          sx={{ color: "#FDB022" }}
                        />
                      }
                      emptyIcon={
                        <StarBorderRoundedIcon
                          fontSize="inherit"
                          sx={{ color: "#e5e7eb" }}
                        />
                      }
                      sx={{ fontSize: "24px" }}
                    />
                    <Typography
                      component="a"
                      href="#"
                      sx={{
                        ml: 0,
                        fontSize: 12,
                        fontFamily: "'Roboto', sans-serif",
                        cursor: "pointer",
                        color: "text.secondary",
                      }}
                    >
                      2 Reviews
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    {[
                      "Ultrices eros in cursus turpis massa tincidunt cursus mattis.",
                      "Volutpat ac tincidunt vitae semper quis lectus.",
                      "Aliquam id diam maecenas ultricies mi eget mauris.",
                    ].map((text, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          gap: 0.5,
                          alignItems: "start",
                          padding: "0px",
                        }}
                      >
                        <CheckOutlinedIcon
                          sx={{ color: "success.main", fontSize: 16 }}
                        />
                        <Typography
                          sx={{
                            fontSize: "13px",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          {text}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <hr />
                <Typography
                  sx={{
                    color: "#666666",
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "14px",
                  }}
                >
                  156 in stock
                </Typography>

                {/* Miqdor va savatga qo'shish */}
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontFamily: "'Helvetica Neue', sans-serif",
                      fontSize: "14px",
                      color: "#222222",
                      fontWeight: 500,
                    }}
                  >
                    Quantity:
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #222222",
                      borderRadius: "5px",
                      padding: "8px 12px",
                      gap: 3,
                    }}
                  >
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          Number.parseInt(e.target.value) || 1
                        )
                      }
                      min="1"
                      style={{
                        width: "40px",
                        border: "none",
                        textAlign: "center",
                        fontSize: "15px",
                        padding: "1px",
                        outline: "none",
                        // fontWeight: 500,
                        // color: "#ddd",
                      }}
                    />
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <IconButton
                        onClick={() => handleQuantityChange(quantity - 1)}
                        sx={{
                          width: "27px",
                          height: "27px",
                          backgroundColor: "#F3F4F6",
                          "&:hover": { backgroundColor: "#E5E7EB" },
                        }}
                      >
                        <RemoveIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                      <IconButton
                        onClick={() => handleQuantityChange(quantity + 1)}
                        sx={{
                          width: "27px",
                          height: "27px",
                          backgroundColor: "#F3F4F6",
                          "&:hover": { backgroundColor: "#E5E7EB" },
                        }}
                      >
                        <AddIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#1E5CEA",
                      color: "white",
                      textTransform: "none",
                      borderRadius: "3px",
                      py: 1.1, // Biroz balandlik uchun padding
                      fontFamily: "'Helvetica Neue', sans-serif",
                      minWidth: "400px", // Uzun tugma uchun minimal kenglik
                      "&:hover": { backgroundColor: "#3651D2" },
                    }}
                  >
                    <ShoppingBagOutlinedIcon
                      sx={{ marginRight: 1, fontSize: "26px", fontWeight: 900 }}
                    />
                    {/* ADD TO CART */}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "'Helvetica Neue', sans-serif",
                        color: "#FFFFFF",
                        fontWeight: 1000,
                      }}
                    >
                      ADD TO CART
                    </Typography>
                  </Button>
                </Box>
                {/* Social Media Buttons */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.1 }}>
                  {[
                    {
                      href: "https://facebook.com",
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 10 16"
                          // style={{ transition: "fill 1.3s ease" }}
                          fill="#6B7280"
                        >
                          <path d="M9.5 2.66667H7.16667C6.47005 2.66667 5.80213 2.94762 5.30204 3.44771C4.80195 3.9478 4.52099 4.61571 4.52099 5.31234V7.64567H2.1875V10.479H4.52099V16.1457H7.35432V10.479H9.68766L10.1667 7.64567H7.35432V5.31234C7.35432 5.14463 7.42193 4.98367 7.54227 4.86333C7.66261 4.74299 7.82357 4.67538 7.99128 4.67538H9.5V2.66667Z" />
                        </svg>
                      ),
                      hoverColor: "#2C289B",
                    },
                    {
                      href: "https://twitter.com",
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#6B7280"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      ),
                      hoverColor: "#1a91da",
                    },
                    {
                      href: "https://pinterest.com",
                      icon: (
                        <svg
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="#6B7280"
                        >
                          <path d="M7.125 0C2.5 0 0 3.0625 0 6.375C0 8.1875 0.6875 9.8125 2.15625 10.4375C2.375 10.5312 2.5625 10.4375 2.625 10.1875C2.65625 10.0312 2.8125 9.4375 2.90625 9.125C2.9375 9 2.90625 8.90625 2.8125 8.78125C2.375 8.28125 2.0625 7.46875 2.0625 6.40625C2.0625 3.90625 3.96875 1.625 6.84375 1.625C9.375 1.625 11 3.375 11 5.625C11 8.375 9.6875 10.5938 7.8125 10.5938C6.78125 10.5938 6 9.75 6.28125 8.71875C6.625 7.46875 7.28125 6.125 7.28125 5.21875C7.28125 4.40625 6.84375 3.71875 5.9375 3.71875C4.875 3.71875 4.03125 4.78125 4.03125 6.21875C4.03125 7.15625 4.34375 7.78125 4.34375 7.78125C4.34375 7.78125 3.25 12.1562 3.0625 12.9375C2.6875 14.4062 3.03125 16.25 3.0625 16.4375C3.09375 16.5625 3.21875 16.5938 3.28125 16.5C3.375 16.3438 4.6875 14.7812 5.09375 13.375C5.21875 12.9062 5.84375 10.5 5.84375 10.5C6.25 11.2188 7.34375 11.8438 8.5 11.8438C11.9375 11.8438 14.125 8.90625 14.125 5.53125C14.125 2.65625 11.5938 0 7.125 0Z" />
                        </svg>
                      ),
                      hoverColor: "#ffa500",
                    },
                    {
                      href: "https://whatsapp.com",
                      icon: (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="#6B7280"
                        >
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521h-.003a6.593 6.593 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                      ),
                      hoverColor: "#660f28",
                    },
                    {
                      href: "https://linkedin.com",
                      icon: (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="#6B7280"
                        >
                          <path d="M13 0H1C0.4 0 0 0.4 0 1V13C0 13.6 0.4 14 1 14H13C13.6 14 14 13.6 14 13V1C14 0.4 13.6 0 13 0ZM4.2 12H2.1V5.3H4.2V12ZM3.1 4.4C2.4 4.4 1.8 3.8 1.8 3.1C1.8 2.4 2.4 1.8 3.1 1.8C3.8 1.8 4.4 2.4 4.4 3.1C4.4 3.8 3.8 4.4 3.1 4.4ZM12 12H9.9V8.7C9.9 7.9 9.9 6.9 8.8 6.9C7.7 6.9 7.5 7.7 7.5 8.6V12H5.4V5.3H7.4V6.2H7.4C7.7 5.7 8.4 5.1 9.5 5.1C11.7 5.1 12 6.5 12 8.2V12Z" />
                        </svg>
                      ),
                      hoverColor: "#4052d6",
                    },
                  ].map(({ href, icon, hoverColor }, index) => (
                    <Button
                      key={index}
                      component="a"
                      href={href}
                      target="_blank"
                      sx={{
                        minWidth: "40px",
                        width: "40px",
                        height: "40px",
                        padding: 0,
                        borderRadius: "50%",
                        border: "1px solid #E5E7EB",
                        color: "#6B7280",
                        "&:hover": { backgroundColor: hoverColor },
                        "&:hover svg": { fill: "#fff" },
                      }}
                    >
                      {icon}
                    </Button>
                  ))}

                  <Box
                    component="span"
                    sx={{ mx: 1, borderLeft: "1px solid #E5E7EB", height: 24 }}
                  />

                  <Button
                    component="a"
                    href="#"
                    sx={{
                      minWidth: "40px",
                      width: "40px",
                      height: "40px",
                      padding: 0,
                      borderRadius: "50%",
                      // border: "1px solid #",
                      color: "#000000",
                      "&:hover": { backgroundColor: "#4052d6" },
                      "&:hover svg": { fill: "#fff" },
                    }}
                  >
                    <BalanceIcon />
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        {/* Full Screen Modal */}
        <Modal
          open={isFullScreen}
          onClose={toggleFullScreen}
          aria-labelledby="full-screen-image"
          aria-describedby="full-screen-product-image"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              height: "90%",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <img
              src={productImages[currentImage] || "/placeholder.svg"}
              alt={`Full Screen Reception Chair View ${currentImage + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
            <Button
              onClick={toggleFullScreen}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.7)",
                },
              }}
            >
              <CloseRoundedIcon />
            </Button>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default ProductPage;
