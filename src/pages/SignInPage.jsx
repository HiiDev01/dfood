import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import "../page_style/SignInPage.css"

const SignInPage = () => {
  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



  const handleLogin = (e) =>{
    e.preventDefault();

    if(email === 'admin@email.com' && password === '123456'){
      navigate('/Dashboard')
    }else{
      setError('Incorrect email or password')
      console.log('error login')
    }
  }


  return (
    <div className='signIn'>
      <div className='signInWraper'>
        <div className='con1'></div>
        <div className='con2'>
          <div className='con2Min'>
            <h2>Login</h2>
            <form>
              <div className='emailCon'>
                <span><MdOutlineEmail size={25} /></span>
                <input 
                  type="email" 
                  value={email} 
                  required 
                  placeholder='admin@email.com'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
    
              <div className='passwordCon'>
                <span><FaLock /></span>
                <input 
                  type="password" 
                  value={password} 
                  required
                  placeholder='123456'
                  onChange={(e) => setPassword(e.target.value)}
                />
               
              </div>
              <div className='remember'>
                <p>
                  <span><input type="checkbox" name="" id="" /> remember me</span>
                  </p>
                <a href="">forget password</a>
              </div>
    
              <div className='loginbtnCon'>
                <button 
                  type="submit" 
                  onClick={handleLogin}
                  className='loginbtn'>
                    Login
                </button>
              </div>
            </form>

            <p className='reg'>Don't have an account? <span><a href="">register here</a></span></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignInPage
