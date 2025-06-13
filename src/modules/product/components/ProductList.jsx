import React from "react"
import { Grid } from "@mui/material";
import { ProductItem } from "./ProductItem";

export const ProductList = ({ isCartStyle = false, products = [] }) => {
    return (
        <Grid container spacing={7}>
            {
                products?.map(product => (
                    <Grid key={product.id} item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <ProductItem
                            isCartStyle={isCartStyle}
                            product={product}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}
