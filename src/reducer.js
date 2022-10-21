
export const initialState = {
    user:{
        imageUrl:null,
        name:null,
        email:null,
    },
 
    token:null,
};

const reducer = (state,action)=>{
   console.log(action);
  
    switch(action.type)
    {
        
        
        case 'SET_TOKEN':
        
            return{
                ...state,
                token:action.token
            };
        case 'SET_USER':

            return{
                ...state,
                user:action.user
            };
            
            default: 
            return state;
        }
    }
   
    export default reducer;
      
