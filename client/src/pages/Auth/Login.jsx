import React, { useState } from 'react'
import Layout from './../../components/Layout/Layout'
import  toast  from 'react-hot-toast'
import axios from 'axios'
import { useNavigate , useLocation } from 'react-router-dom'
import '../../styles/AuthStyles.css';
import {useAuth} from '../../context/auth';  //comtext api



const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
 
  const [auth,setAuth] = useAuth()      //context api

  const navigate = useNavigate()
  const location = useLocation()

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('https://ecommerce-back-e9fw.onrender.com/api/v1/auth/login', {
        
        email,
        password,
       
      })
      if (res.data.success) {
        toast.success(res.data.message)


  //context api
       setAuth ({                          
        ...auth,
        user:res.data.user,
        token:res.data.token,
       });                             
       localStorage.setItem('auth',JSON.stringify(res.data))
  ////

        navigate( location.state || '/');
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  return (
    <Layout title="Register - Ecommerce App">
      <div className="form-container">
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleSubmit}>
         

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

         

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
 
          <div className=' mt-3'>
          <button  type="button" className="btn btn-primary w-100" onClick={() => navigate('/forgot-password')}>
            Forgot Password
          </button>
          </div>

        </form>
      </div>
    </Layout>
  )
}

export default Login
