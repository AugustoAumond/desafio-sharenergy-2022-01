import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {add} from './../../../services/redux/store/counter/counter.actions';
import {useDispatch, useSelector} from 'react-redux';

import {ShowList} from './../Articles/Articles.action';
import {HeightDivHome} from './Label.action';


function Select(){
    const [counter, setCounter] = useState(10);
    const list = useSelector((state)=>state.list); 

    const dispatch = useDispatch();  

    useEffect (()=>{

    },[counter]);

    function AddCounter(value){
        setCounter(value);

        dispatch(add(value));
        
        HeightDivHome(value);

        ShowList(list, value);      
    }

    return (
        <DivSelect>
            <h3>Defina o número de artigos:</h3>
            <select id='select' onChange={ e => AddCounter(e.currentTarget.value)}>
                <option value={counter}>Escolha um valor</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
        </DivSelect>
    )
}
export default Select;

const DivSelect = styled.div`
display: flex;
width: 96%;
margin: 0 auto;
position: relative;
top: 103px;
left: 50px;
height: 50px;
align-items: center;
justify-content: flex-start;

    h3 {
        color: white;
        margin-left: 16px;
    }

    select {
        height: 35px;
        margin-left: 10px;
        width: 155px;
        border: solid 1px white;
        border-radius: 5px;
    }
`