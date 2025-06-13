import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import { ProductList } from "@/modules/product/components/ProductList";

export default function CartPage() {
  const { types, totalPrice, cart, handleClear } = useContext(ProductsContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 6 }}>
      <Typography component="h1" variant="h4" textAlign="center">
        Your Items
      </Typography>

      {
        cart.length > 0 && (
          <Typography component="p" variant="subtitle1" textAlign="center" color="gray">
            Total Price: ${totalPrice}
          </Typography>
        )
      }

      <Box sx={{ marginTop: 4 }}>
        {
          cart.length === 0 ? (
            <Typography component="p" variant="h5" textAlign="center" color="gray">
              Your cart is empty
            </Typography>
          ) : (
            <Button variant="outlined" onClick={() => handleClear(types.cart)}>
              <DeleteIcon sx={{ marginRight: 2 }} />
              Remove all items from cart
            </Button>
          )
        }
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <ProductList
          isCartStyle
          products={cart}
        />
      </Box>
    </Box>
  );
}