import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';
import { useCounter } from '../../hooks/useCounters';
import { useFetch } from '../../data/useFetch';


const UseRef = (props) => {

    const [count, inc, dec] = useCounter(10);

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch( url);

    // http://files.cod3r.com.br/curso-react/estados.json
    // fetch('http://files.cod3r.com/curso-reat/estados.json')
    //    .then(resp => resp.json())
    //    .then(json => console.log(json))

    function showStates(state){
        return state.map(state => <li key={state.sigla}>{state.nome} - {state.sigla}</li>)
    }
    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                      onClick={() => dec()}>-1</button>
                    <button className="btn"
                      onClick={() => inc()}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    {!response.loading ? showStates(response.data) : false }
                </ul>

            </div>
        </div>
    )
}

export default UseRef
