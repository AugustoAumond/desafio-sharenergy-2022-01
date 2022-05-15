export default function counterReducer (state = 10, 
    action){
    
    switch(action.type){
        case 'add':
            return action.payload             

        default:
        return state
    } 
}