import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core';
import { commerce } from '../../../lib/commerce';
import useStyles from './style';
import AdressForm from '../AdressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping adress', 'Payment Details'];

const Checkout = ( { cart }) => {

    const classes = useStyles();
    const [activeStep, setactiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setshippingData] = useState({})

    // Génération d'un token aléatoire lors de l'arrivée sur le checkout process
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});
                console.log(token)
                setCheckoutToken(token)
            } catch (err) {

            }
        }
        generateToken();
    }, [cart])

    const nextStep = () => setactiveStep((prevActiveStep) => prevActiveStep +1)
    const backStep = () => setactiveStep((prevActiveStep) => prevActiveStep -1)
    
    const next = (data) => {
        setshippingData(data);
        nextStep();
    }

    const Confirmation = () => (
        <div>Confirmation</div>
    )

    const Form = () => activeStep === 0 ? <AdressForm checkoutToken={checkoutToken} next={next}/>
     : <PaymentForm />

    return (
        <>
           <div className={classes.toolbar} /> 
           <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant='h4' align='center'>Checkout</Typography>
                <Stepper activeStep={0} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/>}
            </Paper>
           </main>
        </>
    );
};

export default Checkout;