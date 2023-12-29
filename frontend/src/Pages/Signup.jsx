import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import OAuth from './OAuth'


const Signup = () => {
  const [formdata, setFormdata]=useState({})
  const [error, setError]=useState(false)
  const [loading, setLoading]=useState(false)
  const navigate=useNavigate('/')

  const handleChange=(e)=>{
      setFormdata({...formdata, [e.target.id]: e.target.value})
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
      try {
        setLoading(true)
        setError(false)
        const res= await fetch('/api/auth/signup', {
          method:'POST',
          headers:{
            'Content-Type':'application/json' 
          },
          body:JSON.stringify(formdata)
        })
        const data= await res.json()
        console.log(data); {message:`user created successfully.`}
        setLoading(false)
        if(data.success===false){
          setError(true)
          return
        }

        navigate('/')
        
      } catch (error) {
        setLoading(true)
        setError(false)
      }
  }
  return (
    <div className='flex flex-col text-center max-w-6xl mx-auto bg-slate-500 my-10'>
      <h3 className='text-white font-extrabold my-3'>SIGN UP</h3>

      <form onSubmit={handleSubmit} className='flex flex-col gap-3 mx-6 my-6 '>
        <input type="username" id='username' placeholder='username...' onChange={handleChange} />
        <input type="email" id='email' placeholder='email...'          onChange={handleChange} />
        <input type="password" id='password' placeholder='password...' onChange={handleChange} />
        <button className='bg-green-700 p-2 font-extrabold'>
          {loading?'Loading' : 'SIGN UP'}  
        </button>
        <OAuth/>
      </form>

      <div>
        <p className='text-white font-extrabold'>Have an account?</p>
        <Link to='/Signin'><button className='bg-gray-700 text-white font-extrabold px-5 py-2 my-5'>Signin</button></Link>
      </div>
    

      <div>
        <p className='text-red-700 font-bold'>{error && 'Something Went Wrong.'}</p>
      </div>
    </div>
  )
}

export default Signup
