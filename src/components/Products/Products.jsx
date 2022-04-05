import React, {useEffect, useState} from 'react';
import { Grid, Typography } from '@material-ui/core';
import Product from './Product/Product';
import Search from './Search/Search';

import useStyles from './styles';


const Products = ({ products, onAddToCart, categories }) => {

    const classes = useStyles();
    
    const [search, setSearch] = useState('');
    const [isSearched, setIsSearched] = useState(false)
    
    const filteredProduct = () => {
        if (isSearched) {
            return (
                products.filter(product => product.categories[0].name === search).map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))
            )
        } else {
            return (
                products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))
            )
        }
    }

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant='h3' className={classes.title}>Our Products</Typography>
        <Grid container justifyContent='left' spacing={4}>
            <Grid item lg={3} md={3}>
                <Search categories={categories} setSearch={setSearch} setIsSearched={setIsSearched} isSearched={isSearched}/>
            </Grid>
            {filteredProduct()}
        </Grid>
    </main>
    );
};

export default Products;