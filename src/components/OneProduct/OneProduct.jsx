import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import {Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton, CircularProgress } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
// import Loader from '../Loader/Loader';

import useStyles from './style';


const OneProduct = ({ onAddToCart }) => {

    const classes = useStyles();

    const [product, setProduct] = useState();
    
    const { id } = useParams();

    const getOneProduct = async (id) => {
        const data = await commerce.products.retrieve(id);
        setProduct(data)
    }

    
    useEffect(() => {
        getOneProduct(id);
    },[id]);
    
    if (!product) return (
        <div classes={classes.spinner}>
            <CircularProgress />
        </div>
    )

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent='center'>
            <Card className={classes.root}>
                    <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
                    <CardContent>
                        <div className={classes.cardContent}>
                            <Typography variant='h5' gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography variant='h5'>
                                {product.price.formatted_with_symbol}
                            </Typography>
                        </div>
                        <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/>
                    </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default OneProduct;