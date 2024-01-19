import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products:[],
    user: null,
    // foco ...
    number: 0,
    valor: 0,

}

function reducer(state, action){
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
        case 'login':
            return {...state, user: { name: action.payload }}
        default:
            return state
    }
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                { state.user 
                    ? <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Usuário</span>
                }

                <span className="text">{state.number}</span>
                
                
                <div>
                    <button className="btn"
                       onClick={() => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                    <button className="btn"
                       onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                 <button className="btn"
                       onClick={() => dispatch({type: 'numberMult', payload: 7})}>x 7</button>
                 <button className="btn"
                       onClick={() => dispatch({type: 'numberDiv', payload: 25})}>/ 25</button>
                 <button className="btn"
                       onClick={() => dispatch({type: 'numberInt'})}>Int</button>
                 <button className="btn"
                       onClick={() => dispatch({type: 'numberAdd', payload: -9})}>-9</button>
                 <button className="btn"
                       onClick={() => dispatch({type: 'numberAdd', payload: 11})}>+11</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
