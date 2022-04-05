import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';

const Search = ( { categories, setSearch, setIsSearched, isSearched }) => {

    const classes = useStyles();

    const handleSearch = (e) => {
        setSearch(e.target.innerText);
        setIsSearched(!isSearched);
    }

    return (
        <Box className={classes.box}>
            {categories.map((category) => (
                <>
                <Typography className={classes.typo} key={category.id} variant='h5'>{category.name}</Typography>
                {category.children.map((subcategory) => (
                    <Typography onClick={(e) => handleSearch(e)} className={classes.typoSub} key={subcategory.id} variant='subtitle1'>{subcategory.name}</Typography>
                ))}
                </>
            ))}
        </Box>
    );
};

export default Search;