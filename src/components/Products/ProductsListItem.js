import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
import './ProductsListItem.css'

export const ProductsListItem = ({
    image,
    name,
    description,
    type,
    capacity,
    price,
}) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="iphone"></img>
                    </div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} Gb
                    </div>
                    <div className="product-price">{price} $</div>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" className="wrap-btn-add-to-cart">
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
