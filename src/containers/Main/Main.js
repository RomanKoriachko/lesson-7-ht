import React from 'react'
import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'

export const Main = ({ changeDataInCart, cartData }) => {
    return (
        <>
            <Container>
                <ProductsList
                    changeDataInCart={changeDataInCart}
                    cartData={cartData}
                />
            </Container>
        </>
    )
}
