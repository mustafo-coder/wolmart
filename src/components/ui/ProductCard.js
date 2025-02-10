"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Box,
  Grid,
  Chip,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 250, m: 1, boxShadow: 2 }}>
      <CardMedia sx={{ position: "relative" }}>
        {product.discountPercentage > 0 && (
          <Chip
            label={`${product.discountPercentage.toFixed(0)}% OFF`}
            sx={{
              position: "absolute",
              top: 5,
              left: 5,
              backgroundColor: "orange",
              color: "white",
              fontSize: "10px",
              height: 18,
              padding: "2px 6px",
            }}
            size="small"
          />
        )}
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
          style={{ borderRadius: "8px", objectFit: "cover" }}
        />
      </CardMedia>
      <CardContent sx={{ textAlign: "center", p: 1 }}>
        <Typography variant="body2" fontWeight="bold" noWrap>
          {product.title}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
          <Rating
            value={product.rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="caption" sx={{ ml: 1, color: "gray" }}>
            {product.reviews.length} Reviews
          </Typography>
        </Box>
        <Typography variant="h6" color="primary" fontWeight="bold">
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
}
