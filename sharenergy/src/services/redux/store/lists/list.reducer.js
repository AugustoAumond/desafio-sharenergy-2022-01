export default function listReducer (state = [], 
    action){
    
    switch(action.type){
                    
        case 'edit': 
            return  action.payload
 

        default:
        return state
    } 
}