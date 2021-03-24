import React from 'react'

const Register = () => {
    return (
        <form className='add-form' >
        <div className='form-control'>
            <label>Name</label>
            <input
             type='text' required='required'  
             placeholder='Enter Name' 
            /> 
        </div>
        <div className='form-control'>
            <label>Email</label>
            <input
             type='email' required='required'   
            /> 
        </div>
        <div className='form-control'>
            <label>Phone Number</label>
            <input
             type='number' minLength='10' maxLength='10' required='required'  
             placeholder='Enter 10 digit phone number' 
            /> 
        </div>
        <div className='form-control '>
            <label>Password</label>
            <input type='password' required='required'
            /> 
        </div>
        <div className='form-control '>
            <label>Confirm Password</label>
            <input type='password' required='required'
            /> 
        </div>
        <input type='submit' className='btn btn-block' value='Login'/>
    </form>
    )
}

export default Register
