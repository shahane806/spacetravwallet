import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import {  responseToken } from './GoogleAuth';
import { DataLayerContextValue } from './datalayer';
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { clientId, scopes } from "./GoogleAuth";

 function App() {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: scopes,
      });
    };
    gapi.load("client:auth2", initClient);
  });
   const[{user},dispatch] = DataLayerContextValue();
   console.log(user);
  return <div className='App'>
   
   {!responseToken && <Login/>}
   {responseToken && <Dashboard user = {user}/>}
    </div>
}

export default App;
