import React from 'react'
import { Header } from '@/modules/home/components/Header'
import { Container, Box } from '@mui/material'
import { ProductsContextProvider } from '@/context/ProductsContext'

export const MainLayout = ({ children }) => {
    return (
        <ProductsContextProvider>
            <Header />
            <Box component="main">
                <Container sx={{ paddingTop: 5 }}>
                    {children}
                </Container>
            </Box>
        </ProductsContextProvider>
    )
}
