export default function listReducer (state = null, 
    action){
    
    switch(action.type){
                    
        case 'edit': 
            return  action.payload
 
        default:
        return state
    } 
}