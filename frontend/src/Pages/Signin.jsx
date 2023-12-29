import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { signinfailure, signinstart, signinsuccess } from '../Redux/Userslice'
import { useDispatch, useSelector } from 'react-redux'
import OAuth from './OAuth'

const Signin = () => {
  const [formdata, setFormdata]=useState({})
  const {loading, error}=useSelector((state)=>state.user)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleChange=(e)=>{
      setFormdata({...formdata, [e.target.id]: e.target.value})
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
      try {
        dispatch(signinstart())
        const res= await fetch('/api/auth/signin', {
          method:'POST',
          headers:{
            'Content-Type':'application/json' 
          },
          body:JSON.stringify(formdata)
        })
        const data= await res.json()
        console.log(data); {message:`user created successfully.`}
        
        if(data.success===false){
          dispatch(signinfailure(data))
          return
        }
        dispatch(signinsuccess(data))
        navigate('/')
        
      } catch (error) {
        dispatch(signinfailure(error))
      }
  }
  return (
    <div className='flex flex-col text-center max-w-6xl mx-auto bg-slate-500 my-10'>
      <h3 className='text-white font-extrabold my-3'>SIGN IN</h3>

      <form onSubmit={handleSubmit} className='flex flex-col gap-3 mx-6 my-6 '>
        <input type="email" id='email' placeholder='email...'          onChange={handleChange} />
        <input type="password" id='password' placeholder='password...' onChange={handleChange} />
        <button className='bg-green-700 p-2 font-extrabold'>
          {loading?'Loading' : 'SIGN IN'}  
        </button>
       <OAuth/>
      </form>

      <div>
        <p className='text-white font-extrabold'>Don't have an account?</p>
        <Link to='/Signup'><button className='bg-gray-700 text-white font-extrabold px-5 py-2 my-5'>Signup</button></Link>
      </div>
    

      <div>
        <p className='text-red-700 font-bold'>{error ? error.message || 'Something Went Wrong.' : ''}</p>
      </div>
    </div>
  )
}

export default Signin
