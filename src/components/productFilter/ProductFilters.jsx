// src/components/ProductFilters.jsx
"use client"
import { useState } from "react"
import { Grid, Box, Typography, Button, IconButton, Drawer } from "@mui/material"
import FilterListIcon from "@mui/icons-material/FilterList"
import CloseIcon from "@mui/icons-material/Close"
import FilterContent from "./FilterContent"
import ProductCard from "./ProductCard"
import useFilter from "@/hooks/useFilter"
import { initialProducts } from "@/utils/constant"

const ProductFilters = () => {
  const { selectedCategory, setSelectedCategory, selectedBrands, setSelectedBrands, selectedColors, setSelectedColors, priceRange, setPriceRange, handleCleanAll } = useFilter()
  const [viewType, setViewType] = useState("grid")
  const [drawerOpen, setDrawerOpen] = useState(false)

  const filteredProducts = initialProducts.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color)
    const matchesPrice =
      (!priceRange.min || product.price >= Number(priceRange.min)) &&
      (!priceRange.max || product.price <= Number(priceRange.max))

    return matchesCategory && matchesBrand && matchesColor && matchesPrice
  })

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Button startIcon={<FilterListIcon />} variant="outlined" className="md:hidden" onClick={() => setDrawerOpen(true)} sx={{ mb: 2 }} fullWidth>
        Show Filters
      </Button>

      <Grid container spacing={3}>
        <Grid item md={3}>
          <FilterContent
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            handleCleanAll={handleCleanAll}
          />
        </Grid>

        <Drawer className="max-md:hidden"  anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
          </Box>
          <FilterContent
          
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            handleCleanAll={handleCleanAll}
          />
        </Drawer>

        <Grid item xs={12} md={9}>
          <Typography variant="body2">Showing {filteredProducts.length} products</Typography>
          <Grid container spacing={2}>
            {filteredProducts.map((product) => (
              <Grid item key={product.name} xs={12} sm={viewType === "grid" ? 6 : 12} md={viewType === "grid" ? 4 : 12}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductFilters
