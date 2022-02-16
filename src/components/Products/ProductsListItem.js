import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'
import './ProductsListItem.css'
import PropTypes from 'prop-types'

export const ProductsListItem = ({
    image,
    name,
    description,
    type,
    capacity,
    price,
}) => {
    const [count, setCount] = useState(1)
    const [color, setColor] = useState('green')

    const onDecrementClick = () => {
        setCount(count - 1)
    }
    const onIncrementClick = () => {
        setCount(count + 1)
    }

    const onChangeColorClick = () => {
        setColor((value) => (value === 'green' ? 'red' : 'green'))
    }

    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="iphone"></img>
                    </div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div className={`${color}`}>Color: {color}</div>
                    <Button variant="contained" onClick={onChangeColorClick}>
                        Change color
                    </Button>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} Gb
                    </div>
                    <div className="product-price">{price} $</div>
                    <div className="product-quantity">
                        <Button
                            variant="contained"
                            onClick={onDecrementClick}
                            disabled={count <= 1}
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={count}
                            className="text-center"
                        />
                        <Button
                            variant="contained"
                            onClick={onIncrementClick}
                            disabled={count >= 10}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="wrap-btn-add-to-cart">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
ProductsListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}
ProductsListItem.defaultProps = {
    description: 'No description ...',
    image: '/images/noimage.jpg',
}
