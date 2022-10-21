import React from 'react'
import NavBody from './NavBody';
import './Dashboard.css';
import WalletCard from './WalletCard';
function Dashboard({user}) {
  return (
    <div className='Dashboard'>
        <div className='NavBodyDashboard'>

        <NavBody user={user}/>
        </div>
        <div className='WalletCardDashboard'><WalletCard/></div>
    </div>
  )
}

export default Dashboard