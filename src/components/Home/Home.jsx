import React from 'react';
import Hero from './Hero/Hero';
import setup1 from '../../assets/setup1.jpg'
import setup2 from '../../assets/setup2.jpg'
import setup3 from '../../assets/setup3.jpg'
// import useStyles from './styles';


const Home = () => {

    // const classes = useStyles();

    const images = [
        {
            src: setup1,
            text: 'Test test 1',
        },
        // {
        //     src: setup2,
        //     text: 'Test test 2',
        // },
        // {
        //     src: setup3,
        //     text: 'Test test 3',
        // }
    ]

    return (
        <>
            <Hero />
        </>
    );
};

export default Home;