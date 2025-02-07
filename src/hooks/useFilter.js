// src/hooks/useFilter.js
import { useState } from "react"

const useFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedColors, setSelectedColors] = useState([])
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })

  const handleCleanAll = () => {
    setSelectedCategory("")
    setSelectedBrands([])
    setSelectedColors([])
    setPriceRange({ min: "", max: "" })
  }

  return {
    selectedCategory,
    setSelectedCategory,
    selectedBrands,
    setSelectedBrands,
    selectedColors,
    setSelectedColors,
    priceRange,
    setPriceRange,
    handleCleanAll
  }
}

export default useFilter
