import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import { ProductList } from "@/modules/product/components/ProductList";

export default function FavoritesPage() {
  const { favs } = useContext(ProductsContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 6 }}>
      <Typography component="h1" variant="h4" textAlign="center">
        Your Favorites
      </Typography>

      <Box marginTop={8}>
        {
          favs.length === 0 ? (
            <Typography component="p" variant="h6" textAlign="center" color="gray">
              You have no favorites
            </Typography>
          ) : (
            <ProductList products={favs} />
          )
        }
      </Box>
    </Box>
  );
}