
export let initialState = {
    user:{
        imageUrl:null,
        name:null,
        email:null,
    },
    blog:{
       items:[],
    },
    token:null,
    count:0,
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
        
        case 'SET_COUNT':
            
            return{
                ...state,
                count:action.count
            };
            default: 
            return state;
        };
       
    }
   
    export default reducer;
      
