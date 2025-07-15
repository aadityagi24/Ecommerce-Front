import React, { useState } from 'react'
import Layout from './../../components/Layout/Layout'
import  toast  from 'react-hot-toast'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import '../../styles/AuthStyles.css';


const ForgotPassword = () => {

  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [answer, setAnswer] = useState("")
  
 
 

  const navigate = useNavigate()


  // form function
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('https://ecommerce-back-e9fw.onrender.com/api/v1/auth/forgot-password', {
        
        email,
        newPassword,
        answer
       
      })
      if (res.data.success) {
        toast.success(res.data.message)



        navigate( '/login');
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  return (
    <Layout title={'Forgot Password - Ecommerce Shopping'}>
        
         <div className="form-container">
        <h3 className="text-center mb-4">Reset Password</h3>

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
              placeholder="Enter New Password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your favorite Sport"
              required
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>


         

          <button type="submit" className="btn btn-primary w-100">
            Reset
          </button>
 
         

        </form>
      </div>

    </Layout>
  )
}

export default ForgotPassword