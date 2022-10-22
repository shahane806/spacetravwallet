import React from 'react'
import NavBody from './NavBody';
import './Dashboard.css';
import WalletCard from './WalletCard';
import { DataLayerContextValue } from './datalayer';
import { Grid } from '@mui/material';
import Item from './Item';
import { Box } from '@mui/system';
import './Wallet.css';
function Dashboard({user}) {
  const w = window.width;
  const h = window.height;
  
  const[{blog},dispatch]=DataLayerContextValue();
  return (
    <div className='Dashboard'>
        <div className='NavBodyDashboard'>

        <NavBody user={user}/>
        </div>
        <Box
        sx={{
          height: h+500,
          width: w-100,
          borderRadius: 1,
          backgroundColor: "#1A2010",
          alignItems:"center",
        }}
      >
        <Grid container spacing={3}>

        {blog?.items?.map((item)=>(
          
          <>  <Grid item xs={20}><Item ><div className='  WalletCardDashboard' key={item.toString()}><WalletCard   pageLink={item.url} Heading={item.title} discription={item.content}/></div></Item></Grid>
           <Grid item></Grid>
           </>
            ))}
          </Grid>
          </Box>
       
    </div>
  )
}

export default Dashboard