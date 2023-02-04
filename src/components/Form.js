import vector from '../assets/Vector.svg'
import niro from '../assets/svgexport-1.svg'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from 'react';
import { useState } from 'react'

import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@mui/material/TextField';



import '../styles/Form.css'
const useStyles = makeStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
});





function AddressForm() {
    const classes = useStyles()

    const [formData, setFormData] = useState({
        flat: "",
        street: "",
        locality: "",
        pincode: "",
        city: "",
        state: "",
        amount: ""
    })

    const [errors, setErrors] = useState({
        flat: "",
        street: "",
        locality: "",
        pincode: "",
        city: "",
        state: "",
        amount: ""
    })

    const handleChange = (event) => {
        // debugger
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        // debugger 
        validate()
    }

    //validations to the form



    const validate = () => {
        let pincodeError = ""
        let cityError = ""
        let stateError = ""
        let amountError = ""

        if (!Number(formData.pincode)) {
            pincodeError = 'PIN Code should contain only numbers'
        }
        if (formData.city.length < 3) {
            cityError = "City name should be morethan 3 letters"
        }
        if (formData.state.length < 3) {
            stateError = "State name should be morethan 3 letters."
        }
        if ((formData.amount) < 1000) {
            amountError = 'Amount should be a number and morethan 10,000'
        }
        // debugger
        if (pincodeError || cityError || stateError || amountError) {
            setErrors({
                pincode: pincodeError,
                city: cityError,
                state: stateError,
                amount: amountError
            })
            return false
        } else {
            setErrors({
                pincode: "",
                city: "",
                state: "",
                amount: ""
            })
        }
        return true
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const isValid = validate()
        if (isValid) {
            console.log(formData)
            //clear erros and formdat
            setFormData({
                pincode: "",
                flat: "",
                street: "",
                locality: "",
                city: "",
                state: "",
                amount: "",
            })
        }
    }




    return (
        <>
            <div>
                <h2>Rental Property Details</h2>
            </div>
            <div className={classes.root}></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 0.5, width: '25ch', },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField id="standard-basic" label="Flat no./Building Name" name="flat" value={formData.name} onChange={handleChange} variant="standard" style={{ width: '95%' }} InputLabelProps={{
                            style: {
                                color: '#484848',
                                width: '80vw',
                            },
                        }} InputProps={{
                            style: {
                                marginTop: '10px',
                                color: 'white',
                                borderBottom: '2px solid #5E5E5E',

                            },
                        }} />
                        <div className='warning' style={{ width: '80%' }}>
                            <img className='vector' src={vector} alt="help"></img>
                            <p className='warning-text'>This address will be used for verification</p>
                        </div>

                        <TextField id="standard-basic" label="Street Name" name="street" value={formData.street} onChange={handleChange} variant="standard" style={{ width: '95%' }} InputLabelProps={{
                            style: {
                                color: '#484848',
                                width: '80vw',
                            },
                        }} InputProps={{
                            style: {
                                marginTop: '10px',
                                color: 'white',
                                borderBottom: '2px solid #5E5E5E',

                            },
                        }} />

                        <TextField id="standard-basic" label="Locality" name="locality" value={formData.locality} onChange={handleChange} variant="standard" style={{ width: '95%' }} InputLabelProps={{
                            style: {
                                color: '#484848',
                                width: '80vw',
                            },
                        }} InputProps={{
                            style: {
                                marginTop: '10px',
                                color: 'white',
                                borderBottom: '2px solid #5E5E5E',

                            },
                        }} />

                        <TextField id="standard-basic" label="Property PIN Code" type="number" name="pincode" onChange={handleChange} helperText={errors.pincode} value={formData.pincode} error={Boolean(errors.pincode)} variant="standard" style={{ width: '95%' }} InputLabelProps={{
                            style: {
                                color: '#484848',
                                width: '80vw',
                            },
                        }} InputProps={{
                            style: {
                                marginTop: '10px',
                                color: 'white',
                                borderBottom: '2px solid #5E5E5E',

                            },
                        }} />

                        <TextField id="standard-basic" label="City" name="city" helperText={errors.city} onChange={handleChange} error={Boolean(errors.city)} value={formData.city} variant="standard" style={{ width: '95%' }} InputLabelProps={{
                            style: {
                                color: '#484848',
                                width: '80vw',
                            },
                        }} InputProps={{
                            style: {
                                marginTop: '10px',
                                color: 'white',
                                borderBottom: '2px solid #5E5E5E',

                            },
                        }} />

                        <TextField id="standard-basic" label="State" helperText={errors.state} variant="standard" name="state" value={formData.state} onChange={handleChange} error={Boolean(errors.state)} style={{ width: '95%' }} InputLabelProps={{
                            style: {
                                color: '#484848',
                                width: '80vw',
                            },
                        }} InputProps={{
                            style: {
                                marginTop: '10px',
                                color: 'white',
                                borderBottom: '2px solid #5E5E5E',

                            },
                        }} />

                        <TextField id="standard-basic" label="Amount" type="number" helperText={errors.amount} variant="standard" name="amount" value={formData.amount} onChange={handleChange} error={Boolean(errors.amount)} style={{ width: '95%' }} InputLabelProps={{
                            style: {
                                color: '#484848',
                                width: '80vw',
                            },
                        }} InputProps={{
                            style: {
                                marginTop: '10px',
                                color: 'white',
                                borderBottom: '2px solid #5E5E5E',

                            },
                        }} />
                        <div className='warning' style={{ width: '80%' }}>
                            <img className='vector' src={vector} alt="help"></img>
                            <p className='warning-text'>Only rent payments above ₹10,000 can be paid using this credit line</p>
                        </div>
                    </Box>
                </div>
                <h4 className='bottom'>Paying Rent For</h4>
                <div className='month-divs'>
                    <div className='month'>May</div>
                    <div className='month'>June</div>
                    <div className='month'>July</div>
                </div>
                <div className='button'>
                    <div className='detail-verification-tag'>Please verify these details as they can't be changed later</div>
                    <div>
                        <button className='continue' type="submit">Continue</button>
                    </div>

                </div>
                <footer>Powered by  <span><img src={niro} alt="niro" className='niro'></img></span> </footer>
            </form>




        </>
    );
}

export default AddressForm;