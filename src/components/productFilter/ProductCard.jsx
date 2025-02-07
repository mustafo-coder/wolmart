// src/components/ProductCard.jsx
import { Card, CardContent, CardMedia, Typography, Button, Rating } from "@mui/material"

const ProductCard = ({ product }) => (
  <Card>
    <CardMedia component="img" height="200" image={product.image} alt={product.name} />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {product.name}
      </Typography>
      <Rating name="read-only" value={product.rating} readOnly />
      <Typography variant="h6" color="primary" sx={{ mt: 1 }}>${product.price.toFixed(2)}</Typography>
      <Button variant="contained" fullWidth sx={{ mt: 2 }}>Add to Cart</Button>
    </CardContent>
  </Card>
)

export default ProductCard
