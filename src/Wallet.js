import Box from "@mui/material/Box";
import GoogleLoginButton from "./GoogleLoginButton";
import GoogleLogoutButton from "./GoogleLogoutButton";
import { Avatar, Button, Grid } from "@mui/material";
import "./Wallet.css";

import { DataLayerContextValue } from './datalayer';
import React,{useEffect, useState} from 'react'

import Item from "./Item";
function Wallet({logo,name,email}) {
  
  const w = window.width;
  const h = window.height;
  const[data_,setDATA]=useState();
  const[{blog},dispatch]=DataLayerContextValue();
   function on(){
  
    fetch('https://www.googleapis.com/blogger/v3/blogs/3517957744705188187/posts?key=AIzaSyCrsyQg489GOcx0cVDLpx-K08PT5tfMi4Y&maxResults=100').then((Response=>Response.json())).then(data=>{
      // console.log(data)
      setDATA(data);
     
   });
   }
function stop(){
    setDATA(null);
   }
   useEffect(()=>{
    dispatch({
    type:"SET_BLOG",
    blog:data_,
  });
  },[data_,dispatch,blog]);
  
  return (
    <div className="walletMain">
      <Box
        sx={{
          height: h,
          width: w-1000,
          borderRadius: 1,
          backgroundColor: "#1A2010",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={15}>
            <Item>
              <div className="disc WalletNav ">
                <Avatar src={logo} alt="Hello"/>
                <h3 className="discription">{name}</h3>
                <Button>Withdraw</Button>
                <Button>Deposite</Button>
              </div>
            </Item>
           
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="disc YourWalletBalance">
                <h3>Space Trav Wallet</h3>
                <h4 className="discription">FSTW</h4>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="YourWalletBalance">
                <h3>Wallet Balance</h3>
                <h3>$0.0000</h3>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="EastimateEarning">
                <h3>Eastimate Earning</h3>
                <h3>$0.0000</h3>
              </div>
            </Item>
          </Grid>

          <Grid item xs={15}>
            <Item>
              <div className="ClickValue">
                <h3>Total Clicks</h3>
                <h3>0</h3>
              </div>
            </Item>
          </Grid>
          <Grid item xs={15}>
            <Item>
              <div className="WatchTime">
                <h3>Total WatchTime</h3>
                <h3>0 Watch Hours</h3>
              </div>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <div className="startCampaign_stopCampaign">
                <Button onClick={on}>Start Campaign</Button>
              </div>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <div className="startCampaign_stopCampaign">
                <Button onClick={stop}>Stop Campaign</Button>
              </div>
            </Item>
          </Grid>
       

          <Grid item xs={6}>
            <Item>
              <div className="startCampaign_stopCampaign GoogleLoginButton">
                <GoogleLoginButton />
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div className="startCampaign_stopCampaign">
                <GoogleLogoutButton />
              </div>
            </Item>
          </Grid>

          <Grid item xs={15}>
            <Item>
              <div className="OutPut">
              <h3>{email}</h3>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Wallet;
