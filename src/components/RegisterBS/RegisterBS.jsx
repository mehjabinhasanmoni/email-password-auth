import React from 'react';

const RegisterBS = () => {

    const handelRegisterBS = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log("email & password is : ", email, password);

    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Register Bootstrap</h2>

            <form onSubmit={handelRegisterBS}>
                    <div className="mb-3">
             
                        <input type="email" name="email" placeholder="Your Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">

                        <input type="password" name="password" placeholder="Your Passsword" className="form-control" id="exampleInputPassword1 "/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default RegisterBS;