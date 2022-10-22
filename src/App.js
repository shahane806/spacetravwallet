import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import {  responseToken } from './GoogleAuth';
import { DataLayerContextValue } from './datalayer';
import { gapi } from "gapi-script";
import { useEffect } from "react";

 function App() {
   useEffect(() => {
     const initClient = () => {

       gapi.client.init({
         clientId: "774017698454-4vj16o34r0ae4sj8inpnmopto2fchl72.apps.googleusercontent.com",
         scope: "https://www.googleapis.com/auth/userinfo.profile",
      });

     

    };
    gapi.load("client:auth2", initClient);
  });
   const[{user},dispatch] = DataLayerContextValue();
  //  console.log(user);
  return <div className='App'>
   
   {!responseToken && <Login/>}
   {responseToken && <Dashboard user = {user}/>}
    </div>
}

export default App;
