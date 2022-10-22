import React  from 'react'
import {GoogleLogin} from 'react-google-login';
import { DataLayerContextValue } from './datalayer';

import { clientId } from "./GoogleAuth";

function GoogleLoginButton() {
  



     const[{user},dispatch] = DataLayerContextValue();
     const  onSuccess = (res)=>{
        console.log('[Login Success] currentUser:', res.profileObj);
        dispatch({
          type:"SET_USER",
          user:res.profileObj,
        });
       };
     console.log(user);
    const  onFailure = (res)=>{
        console.log('[Login failed] res : ',res);
       
    };
   


  return (
    <div><GoogleLogin
        
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
    
        cookiePolicy={'single_host_origin'}
        style={{marginTop:'100px'}}
        isSignedIn={true}
    
    /></div>
  )
}
export default GoogleLoginButton

