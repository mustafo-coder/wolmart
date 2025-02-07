'use client'
import { useState } from "react"
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Rating,
  Drawer,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import FilterListIcon from "@mui/icons-material/FilterList"
import CloseIcon from "@mui/icons-material/Close"
import GridViewIcon from "@mui/icons-material/GridView"
import ViewListIcon from "@mui/icons-material/ViewList"
import {categories, brands, colors, initialProducts} from '@/components/productFilter/product.a.jsx'

export default function ProductFilters() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const [viewType, setViewType] = useState("grid")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedColors, setSelectedColors] = useState([])
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })

  // Filter products based on selected filters
  const filteredProducts = initialProducts.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color)
    const matchesPrice =
      (!priceRange.min || product.price >= Number(priceRange.min)) &&
      (!priceRange.max || product.price <= Number(priceRange.max))

    return matchesCategory && matchesBrand && matchesColor && matchesPrice
  })

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category)
  }

  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const handleColorToggle = (color) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const handleCleanAll = () => {
    setSelectedCategory("")
    setSelectedBrands([])
    setSelectedColors([])
    setPriceRange({ min: "", max: "" })
  }

  const FilterContent = () => (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6">Filter</Typography>
        <Button color="primary" onClick={handleCleanAll}>
          Clean All
        </Button>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        All Categories
      </Typography>
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

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Price
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          label="Min"
          type="number"
          size="small"
          value={priceRange.min}
          onChange={(e) => setPriceRange((prev) => ({ ...prev, min: e.target.value }))}
        />
        <TextField
          label="Max"
          type="number"
          size="small"
          value={priceRange.max}
          onChange={(e) => setPriceRange((prev) => ({ ...prev, max: e.target.value }))}
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Brand
      </Typography>
      {brands.map((brand) => (
        <FormControlLabel
          key={brand.name}
          control={
            <Checkbox
              checked={selectedBrands.includes(brand.name)}
              onChange={() => handleBrandToggle(brand.name)}
              size="small"
            />
          }
          label={`${brand.name} (${brand.count})`}
        />
      ))}

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Color
      </Typography>
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

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {isMobile && (
        <Button
          startIcon={<FilterListIcon />}
          variant="outlined"
          onClick={() => setDrawerOpen(true)}
          sx={{ mb: 2 }}
          fullWidth
        >
          Show Filters
        </Button>
      )}

      <Grid container spacing={3}>
        {/* Sidebar Filters - Desktop */}
        {!isMobile && (
          <Grid item md={3}>
            <FilterContent />
          </Grid>
        )}

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: "80%",
              maxWidth: 360,
            },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <FilterContent />
        </Drawer>

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="body2">Showing {filteredProducts.length} products</Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color={viewType === "grid" ? "primary" : "default"} onClick={() => setViewType("grid")}>
                <GridViewIcon />
              </IconButton>
              <IconButton color={viewType === "list" ? "primary" : "default"} onClick={() => setViewType("list")}>
                <ViewListIcon />
              </IconButton>
            </Box>
          </Box>

          <Grid container spacing={2}>
            {filteredProducts.map((product) => (
              <Grid item key={product.name} xs={12} sm={viewType === "grid" ? 6 : 12} md={viewType === "grid" ? 4 : 12}>
                <Card>
                  <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Rating name="read-only" value={product.rating} readOnly />
                    <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                      ${product.price.toFixed(2)}
                    </Typography>
                    <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

