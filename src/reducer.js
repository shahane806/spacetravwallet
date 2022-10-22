
export const initialState = {
    user:{
        imageUrl:null,
        name:null,
        email:null,
    },
    blog:{
       items:[],
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
            
        case 'SET_BLOG':
            
            return{
                ...state,
                blog:action.blog
            };
            default: 
            return state;
        };
       
    }
   
    export default reducer;
      
