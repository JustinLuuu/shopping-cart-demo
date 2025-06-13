import React, { useContext, useEffect, useState } from "react"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFetchData } from "@/hooks/useFetchData";
import { Avatar, Badge } from "@mui/material";
import { ProductsContext } from "@/context/ProductsContext";

const url = "https://randomuser.me/api?results=1";

export const Header = () => {
    const { totalPrice, cart } = useContext(ProductsContext);
    const { data, isLoading } = useFetchData(url);
    const router = useRouter();

    const [userData, setUserData] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const totalItems = cart.reduce((prev, product) => {
        return (prev + product.quantity)
    }, 0);

    useEffect(() => {
        if (data) {
            setUserData(data.results[0]);
        }
    }, [data]);

    return (
        <Box component="header" sx={{ flexGrow: 1 }}>
            <AppBar component="div" position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => router.push("/")}
                    >
                        <HomeIcon fontSize="large" color="white" />
                    </IconButton>

                    {
                        (isLoading || !userData) ? (
                            <CircularProgress color="success" />
                        ) : (
                            <>
                                <Avatar
                                    src={userData.picture.medium}
                                    alt={`photo-of-${userData.name.title}`}
                                />

                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 1 }}>
                                    Welcome, {`${userData.name.first} ${userData.name.last}`}
                                </Typography>
                            </>
                        )
                    }

                    <Box display="flex" alignItems="center">
                        <Typography component="span" variant="h6">
                            ${totalPrice}
                        </Typography>

                        <Button color="inherit" onClick={handleClick}>
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCartIcon fontSize="large" />
                            </Badge>
                        </Button>
                    </Box>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem
                            component={Link}
                            href="/cart"
                            onClick={handleClose}
                            sx={{ textDecoration: "underline", textDecorationColor: "blue", fontWeight: "bold" }}
                        >
                            Go to Cart
                        </MenuItem>

                        <MenuItem
                            component={Link}
                            href="/favorites"
                            onClick={handleClose}
                            sx={{ textDecoration: "underline", textDecorationColor: "blue", fontWeight: "bold" }}
                        >
                            Go to Favorites
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box >
    )
}
