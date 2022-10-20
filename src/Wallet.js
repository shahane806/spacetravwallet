import React from "react";
import Box from "@mui/material/Box";

import { Avatar, Button, Grid } from "@mui/material";
import "./Wallet.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Wallet() {
  return (
    <div className="walletMain">
      <Box
        sx={{
          height: 700,
          width: 600,
          borderRadius: 1,
          backgroundColor: "#1A2010",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={15}>
            <Item>
              <div className="disc WalletNav ">
               <Avatar src="" alt="Hello"/>
                <h4 className="discription">Om Shahane</h4>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <div className="disc YourWalletBalance">
                <h3 >SpaceTravWallet</h3>
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
               <Button>Start Campaign</Button>
              </div>
            </Item>
          </Grid>
        
          <Grid item xs={6}>
            <Item>
              <div className="startCampaign_stopCampaign">
               <Button>Stop Campaign</Button>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div className="startCampaign_stopCampaign">
               <Button>New Campaign</Button>
              </div>
            </Item>
          </Grid>
        
          <Grid item xs={3}>
            <Item>
              <div className="startCampaign_stopCampaign">
               <Button>Sign Up</Button>
               
              </div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <div className="startCampaign_stopCampaign">
              <Button>Login In</Button>
              </div>
            </Item>
          </Grid>
        
        
        
         
          <Grid item xs={15}>
            <Item>
              <div className="OutPut">
               <h3>Campaign Started : Successfully</h3>
              </div>
            </Item>
          </Grid>
        
        
        
         
        </Grid>
      </Box>
    </div>
  );
}

export default Wallet;
