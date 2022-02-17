import React from 'react'
import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'

export const Main = ({ ChangeDataInCart, cartData }) => {
    return (
        <>
            <Container>
                <ProductsList
                    ChangeDataInCart={ChangeDataInCart}
                    cartData={cartData}
                />
            </Container>
        </>
    )
}
