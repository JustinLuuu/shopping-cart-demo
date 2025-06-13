import React, { useContext } from 'react';
import Image from 'next/image'
import { Button, Card, CardActions, CardContent, Typography, IconButton, Box } from '@mui/material';
import { ProductsContext } from '@/context/ProductsContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export const ProductItem = ({ isCartStyle = false, product }) => {
    const { types, cart, favs, handleAdd, handleUpdate, handleRemove, } = useContext(ProductsContext);
    const isInCart = cart.some(p => p.id === product.id);
    const isFav = favs.some(p => p.id === product.id);

    const handleAddToCart = () => {
        if (isInCart) {
            product.quantity += 1;
            handleUpdate(types.cart, product);
            return
        }

        product.quantity = 1;
        handleAdd(types.cart, product);
    }

    const handleAddToFav = () => {
        isFav ?
            handleRemove(types.favs, product.id) :
            handleAdd(types.favs, product);
    }

    const handleIncrease = () => {
        product.quantity += 1;
        handleUpdate(types.cart, product);
    }

    const handleDecrease = () => {
        const isOnLimit = product.quantity === 1;
        if (isOnLimit) {
            handleRemove(types.cart, product.id);
            return;
        }

        product.quantity-=1;
        handleUpdate(types.cart, product);
    }

    return (
        <Card sx={{ width: 240 }}>
            <Image
                src={product.img_url}
                alt={product.name}
                priority
                width={0}
                height={0}
                sizes="40vw"
                style={{ width: "60%", height: "auto", display: "block", margin: "auto" }}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                    {product.name}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Type: <span>{product.type}</span>
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Price: <span>${product.price}</span>
                </Typography>
            </CardContent>

            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                {
                    isCartStyle ? (
                        <>
                            <Button
                                size="small"
                                onClick={() => handleRemove(types.cart, product.id)}
                            >
                                Remove
                            </Button>

                            <Box>
                                <IconButton size="small" onClick={handleDecrease}>
                                    <ArrowLeftIcon />
                                </IconButton>

                                <span>{product.quantity}</span>

                                <IconButton size="small" onClick={handleIncrease}>
                                    <ArrowRightIcon />
                                </IconButton>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Button
                                size="small"
                                onClick={handleAddToCart}
                            >
                                Add to cart
                            </Button>

                            <IconButton onClick={handleAddToFav}>
                                <FavoriteIcon color={isFav ? "error" : ""} />
                            </IconButton>
                        </>
                    )
                }
            </CardActions>
        </Card>
    )
}
