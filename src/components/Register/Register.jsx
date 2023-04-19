import React, { useState } from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from '../Firbase/Firbase';
 
const auth = getAuth(app);

const Register = () => {
const [email, setEmail] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');




    const handelSubmit = (event) =>{
        // 1. prevent page refresh
        event.preventDefault();
        setSuccess('');
        setError('');
        // 2. collect from data
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Validate password
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return;
        }
        else if(!/(?=.[0-9].*[0-9])/.test(password)){
            setError('Please add at least two numbers');
            return;
            
        }
        else if(password.length<6){
            setError('Please add at least 6 characters in your password');
            return;
        }

        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        console.log("Email & Password are : ",email, password);

        // 3. Create user in firbase

      
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            event.target.reset();
            setSuccess('User has successfully created!!');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
           
            // console.log(errorMessage);
            // ..
        });

    }


    const handelEmailChange = (event) => {
            console.log(event.target.value);
            setEmail(event.target.value);
    }

    const handelPasswordBlur = (event) =>{
        console.log(event.target.value);
    }
    return (
        <div className='w-50 mx-auto'>
            <h2> Please Register</h2>
            <form onSubmit={handelSubmit}>
                <input className='w-50 mb-4 rounded ps-2' onChange={handelEmailChange} type="email" name="email" id="email" placeholder='Your Email' required/>
                <br />
                <input className='w-50 mb-4 rounded ps-2' onBlur={handelPasswordBlur} type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-sucess'>{success}</p>
        </div>
    );
};

export default Register;