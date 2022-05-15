export default function idReducer (state = 0, 
    action){
    
    switch(action.type){
                    
        case 'add': 
            return  action.payload
 

        default:
        return state
    } 
}