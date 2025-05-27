import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { Links } from 'react-router-dom';
import "../page_style/SignUpPage.css"


const SignUpPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  
  const handleChange = (e) =>{
    setFormData(prev => ({
      ...prev, [e.target.value]: e.target.value,
    }))
  }


  const handleRegister = () =>{
    e.preventDefault()
    setError('');

    if(!formData.firstName || !formData.lastName || !formData.email || !formData.password ){
      setError('fill all the form field');
      return;
    }

    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.text(formData.email)){
      setError('enter a valid email')
      return;
    }
    if(formData.password.length < 6){
      setError('password must be atleast 6 characters')
    }
    return;

    setTimeout(()=>{
     alert('signup succesful redirecting to login....');
      navigate('/');
    }, 1000);
  }

  return (
    <div className='signUpPage'>
      <div className='signUpWraper'>
        <div className='conn1'></div>
        <div className='conn2'>
          <div className='conn2Min'>
            <h2>Register</h2>
            <p>We’re excited to have you on board!, fill out the form below to register quickly and securely.</p>

            <form onSubmit={handleRegister}>
              <div className='namesCon'>
                <div className='emailCon'>
                  <span><FaRegUser size={25} /></span>
                  <input 
                    type="text" 
                    value={formData.firstName} 
                    required 
                    placeholder='first name'
                    onChange={handleChange}
                  />
               </div>
  
                <div className='emailCon'>
                  <span><FaRegUser size={25} /></span>
                  <input 
                    type="text" 
                    value={formData.lastName} 
                    required 
                    placeholder='last name'
                    onChange={handleChange}
                  />
                </div>
  
              </div>
              <div className='emailCon'>
                <span><MdOutlineEmail size={25} /></span>
                <input 
                  type="email" 
                  value={formData.email} 
                  required 
                  placeholder='enter email'
                  onChange={handleChange}
                />
              </div>
    
              <div className='passwordCon'>
                <span><FaLock /></span>
                <input 
                  type="password" 
                  value={formData.password} 
                  required
                  placeholder='enter password'
                  onChange={handleChange}
                />
               
              </div>
    
              <div className='SignUpbtnCon'>
                <button 
                  type="submit" 
                  className='SignUpbtn'>
                    register
                </button>
              </div>  
            </form>
            <p className='log'>already an account? 
              <span><Link to={'/'}> Login</Link></span>
            </p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
