import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline} from '@material-ui/core';
import { commerce } from '../../../lib/commerce';
import useStyles from './style';
import AdressForm from '../AdressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping adress', 'Payment Details'];

const Checkout = ( { cart, order, onCaptureCheckout, error }) => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({})
    const [isFinished, setIsFinished] = useState(false)
    const history = useNavigate();

    // Génération d'un token aléatoire lors de l'arrivée sur le checkout process
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});
                setCheckoutToken(token)
            } catch (err) {
                history.pushState('/');
            }
        }
        generateToken();
    }, [cart])

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep +1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep -1);
    
    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
           setIsFinished(true) 
        }, 3000);
    }

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant='h5'>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
                <Divider className={classes.divider}/>
                <Typography variant='subtitle2'>Order reférence : {order.customer_reference}</Typography>
            </div>
            <br />
            <Button variant='outlined' type='button' component={Link} to='/'>Back to Home</Button>
        </>
    ) : isFinished ? (
        <>
            <div>
                <Typography variant='h5'>Thank you for your purchase</Typography>
                <Divider className={classes.divider}/>
            </div>
            <br />
            <Button variant='outlined' type='button' component={Link} to='/'>Back to Home</Button>
        </>
    ) : (
        <div classes={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if(error) {
        <>
            <Typography variant='h5'>Error: {error}</Typography>
            <br />
            <Button variant='outlined' type='button' component={Link} to='/'>Back to Home</Button>
        </>
    }

    const Form = () => activeStep === 0 ? <AdressForm checkoutToken={checkoutToken} setShippingData={setShippingData} next={next}/>
     : <PaymentForm  timeout={timeout} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} shippingData={shippingData}/>

    return (
        <>
        <CssBaseline />
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