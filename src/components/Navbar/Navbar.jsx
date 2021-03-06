import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import shop from '../../assets/online-store.png';
import useStyles from './styles';


const Navbar = ({ totalItems }) => {

    const classes = useStyles();
    const location = useLocation();

    return (
        <>
           <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color='inherit'>
                        <img src={shop} alt="Commerce.js" height='25px' className={classes.image} />
                      The Tech Shop
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/products' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label='show-cart-item' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                    )}
                </Toolbar>
            </AppBar> 
        </>
    );
};

export default Navbar;
