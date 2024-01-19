export function numberReducer(state, action){
    switch(action.type){
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'numberAdd':
            return {...state, number: state.number + action.payload}
        case 'numberMult':
            return {...state, number: state.number * action.payload}
        case 'numberInt':
            return {...state, number: parseInt( state.number )}
        case 'numberDiv':
            return {...state, number: state.number / action.payload }
  
        default:
            return state
    }
}