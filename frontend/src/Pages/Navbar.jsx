import React from 'react'
import {Link} from 'react-router-dom' 
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <div>
      <nav className='flex bg-red-700 p-4 justify-around font-extrabold text-white'>
        <div>
          <Link to='/'>AUTH APP</Link>
          </div>

          <div className='flex gap-2'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Profile'>
              
                            
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
              
              </Link>
          </div>    
      </nav>
    </div>
  )
}

export default Navbar
