"use client";
import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import ProductCard from "@/components/ui/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {products.slice(0, 16).map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
