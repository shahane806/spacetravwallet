import React from "react";
import Box from "@mui/material/Box";
import GoogleLoginButton from "./GoogleLoginButton";
import GoogleLogoutButton from "./GoogleLogoutButton";
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


function Wallet({logo,name,email}) {
  
  const w = window.width;
  const h = window.height;

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
                <Avatar src={logo} alt="Hello" />
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

          <Grid item xs={6}>
            <Item>
              <div className="startCampaign_stopCampaign GoogleLoginButton">
                <GoogleLoginButton />
              </div>
            </Item>
          </Grid>
          <Grid item xs={25}>
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
