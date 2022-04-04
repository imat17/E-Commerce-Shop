import React, {useEffect, useState} from 'react';
import { Button, Typography, Container, Paper, Grid } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import setup3 from '../../../assets/setup3.jpg';
import setup2 from '../../../assets/setup2.jpg';
import setup1 from '../../../assets/setup1.jpg';

const Hero = () => {

    const dataText = [
        {
            text: 'My ratio went from 0.39 to 3.15 using their products',
            author: 'Gotaga'
        },
        {
            text: 'Destroying pangolin lobbies is even easier with tech shop',
            author: 'Chowh1'
        },
        {
            text: 'Selling my bath water is even faster',
            author: 'Amouranth'
        }
    ]

    let index = 0;

    const [quote, setQuote] = useState(dataText[index].text);
    const [author, setAuthor] = useState(dataText[index].author);
    

    useEffect(() => {
       setInterval(() => {
           
       }, 5000)
    }, [quote])

    const classes = useStyles();

    const images = [
        setup1,
        setup2,
        setup3
    ]



    return (
        <>
        <div className={classes.grid} style={{backgroundImage: images[1]}}>
            <Container className={classes.container}>
                <Typography variant='h2'>Discover a large variety of tech products</Typography>
                <br />
                <Typography variant='h4'>Best quality , best performances</Typography>
                <br /> <br />
                <Button size='large' component={Link} to='/products' variant='outlined' style={{color: 'white', borderColor: 'white'}}>
                    Shop Now
                </Button>
            </Container>
        </div>
        <Container className={classes.quote}>
            <Typography className={classes.typography} variant='h4'>  
                "{quote}"
            </Typography>
            <Typography variant='subtitle1'>"{author}"</Typography>
        </Container>
        </>
    );
};

export default Hero;