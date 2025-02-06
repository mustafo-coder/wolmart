// src/components/FilterContent.jsx
import { Box, Typography, FormControlLabel, Checkbox, TextField, Divider, Button } from "@mui/material"
import { categories, brands, colors} from '@/components/productFilter/product.a.jsx'
const FilterContent = ({ selectedCategory, setSelectedCategory, selectedBrands, setSelectedBrands, selectedColors, setSelectedColors, priceRange, setPriceRange, handleCleanAll }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category)
  }

  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const handleColorToggle = (color) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  return (
    <Box  sx={{ p: 2  }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6">Filter</Typography>
        <Button color="primary" onClick={handleCleanAll}>Clean All</Button>
      </Box>

      <Divider sx={{ my: 2 }} />
      
      {/* Filter categories */}
      <Typography variant="h6" gutterBottom>All Categories</Typography>
      {categories.map((category) => (
        <Typography
          key={category}
          variant="body2"
          sx={{
            py: 0.5,
            cursor: "pointer",
            color: category === selectedCategory ? "primary.main" : "text.secondary",
            "&:hover": { color: "primary.main" },
          }}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Typography>
      ))}

      {/* Filter Price */}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>Price</Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField label="Min" type="number" size="small" value={priceRange.min} onChange={(e) => setPriceRange((prev) => ({ ...prev, min: e.target.value }))} />
        <TextField label="Max" type="number" size="small" value={priceRange.max} onChange={(e) => setPriceRange((prev) => ({ ...prev, max: e.target.value }))} />
      </Box>

      {/* Filter Brands */}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>Brand</Typography>
      {brands.map((brand) => (
        <FormControlLabel
          key={brand.name}
          control={
            <Checkbox checked={selectedBrands.includes(brand.name)} onChange={() => handleBrandToggle(brand.name)} size="small" />
          }
          label={`${brand.name} (${brand.count})`}
        />
      ))}

      {/* Filter Colors */}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>Color</Typography>
      {colors.map((color) => (
        <FormControlLabel
          key={color}
          control={
            <Checkbox checked={selectedColors.includes(color)} onChange={() => handleColorToggle(color)} size="small" />
          }
          label={color}
        />
      ))}
    </Box>
  )
}

export default FilterContent
