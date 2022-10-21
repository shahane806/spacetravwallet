import React from 'react'
import {GoogleLogout} from 'react-google-login';
import { DataLayerContextValue } from './datalayer';
import {clientId} from './GoogleAuth';
function GoogleLogoutButton() {
  const[{user},dispatch]=DataLayerContextValue();
    const onSuccess = () => {
        alert('Logout made successfully.');
       const s = {
          imageUrl:null,
          name:null,
          email:null,
      };
        dispatch({
          type:"SET_USER",
          user:s,
        });

    };
  return (
    <div>
       
        <GoogleLogout
          clientId={clientId}
          buttonText = "Logout"
          onLogoutSuccess = {onSuccess}
          
          />
        
    </div>
  )
}

export default GoogleLogoutButton