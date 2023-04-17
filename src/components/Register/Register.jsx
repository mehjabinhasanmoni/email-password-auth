import React, { useState } from 'react';

const Register = () => {
const [email, setEmail] = useState('');


    const handelSubmit = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        console.log("Email & Password are : ",email, password);

    }


    const handelEmailChange = (event) => {
            console.log(event.target.value);
            setEmail(event.target.value);
    }

    const handelPasswordBlur = (event) =>{
        console.log(event.target.value);
    }
    return (
        <div>
            <h2> Please Register</h2>
            <form onSubmit={handelSubmit}>
                <input onChange={handelEmailChange} type="email" name="email" id="email" placeholder='Your Email'/>
                <br />
                <input onBlur={handelPasswordBlur} type="password" name="password" id="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;