import React from 'react'
import './NavBody.css';
import Wallet from './Wallet';
function NavBody({user}) {
  
  return (
    <div className='NavBody'>
      <Wallet logo={user.imageUrl} name={user.name} email={user.email} />
    </div>
  )
}

export default NavBody