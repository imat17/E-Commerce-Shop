import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart} from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

import shop from '../../assets/online-store.png';
import useStyles from './styles';


const Navbar = () => {

    const classes = useStyles();

    return (
        <>
           <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color='inherit'>
                        <img src={shop} alt="Commerce.js" height='25px' className={classes.image} />
                       Tech Shop
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label='show-cart-item' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar> 
        </>
    );
};

export default Navbar;
