export const authEndpoint = "https://accounts.google.com/o/oauth2/auth";
export const clientId = "774017698454-4vj16o34r0ae4sj8inpnmopto2fchl72.apps.googleusercontent.com";
export const redirectUri = "http://localhost:3000";
export const scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
];

export const responseToken = fromUrlFetchResponseToken();
function fromUrlFetchResponseToken(){
   let token  = "tokenRequired";
   token = window.location.hash;
   token = token.split("&");
   token = token[0].split("=");
   window.location.hash = "";
   return token[1];
}

export const accessUrl = 
`
${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true
`;


 