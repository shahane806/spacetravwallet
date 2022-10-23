import React from 'react'
import NavBody from './NavBody';
import './Dashboard.css';
import WalletCard from './WalletCard';
import { DataLayerContextValue } from './datalayer';

import './Wallet.css';
function Dashboard({user}) {
  const[{blog},dispatch]=DataLayerContextValue();
  return (
    <div className='Dashboard'>
        <div className='NavBodyDashboard'>

        <NavBody user={user}/>
        </div>
       <div className='flexWalletCard' >

        {blog?.items?.map(item =>(
          
          <div  className='  WalletCardDashboard' key={item.id}><div><WalletCard item={item}/></div></div>
          
          ))}
         
          </div>
       
    </div>
  )
}

export default Dashboard