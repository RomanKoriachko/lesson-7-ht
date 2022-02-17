import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'

export const App = () => {
    const [cartData, setCartData] = useState({
        totalCount: 0,
        totalPrice: 0,
        globalCount: 0,
        globalPrice: 0,
    })

    const changeDataInCart = () => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + cartData.globalCount,
            totalPrice: prevState.totalPrice + cartData.globalPrice,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main changeDataInCart={changeDataInCart} cartData={cartData} />
            <Footer />
        </>
    )
}
