export const authEndpoint = "https://accounts.google.com/o/oauth2/auth";
export const clientId = "774017698454-4vj16o34r0ae4sj8inpnmopto2fchl72.apps.googleusercontent.com";
export const redirectUri = "https://spacetravwallet.vercel.app";
export const Key = "AIzaSyCrsyQg489GOcx0cVDLpx-K08PT5tfMi4Y";
export const SpaceTravBlogId = "3517957744705188187";
export const scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
    //"https://www.googleapis.com/auth/blogger",
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
  // 3517957744705188187
  // https://www.googleapis.com/blogger/v3/blogs/3517957744705188187?key=AIzaSyCrsyQg489GOcx0cVDLpx-K08PT5tfMi4Y
  // https://www.googleapis.com/blogger/v3/blogs/3517957744705188187/posts?key=AIzaSyCrsyQg489GOcx0cVDLpx-K08PT5tfMi4Y

 
export const accessUrl = 
`
${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&Key=${Key}&response_type=token&show_dialog=true
`;


 
