import {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {editlist} from './../../../services/redux/store/lists/list.actions';
import {addcounter} from './../../../services/redux/store/counter/counter.actions';
import {useDispatch} from "react-redux";


function Input(){
    const [search, setSearch] = useState('');

    console.log(search);

    const dispatch = useDispatch();

    function AddSearch (value){

        setSearch(value);

        dispatch(addcounter(10));

        if (value !== ''){
            document.querySelector('.divselect').style.display = 'none';
            document.querySelector('#select').value = '';
            document.querySelector('#value').style.display = 'flex';
        } else {
            document.querySelector('.divselect').style.display = 'flex';
        }
    }

    useEffect (()=> {
        axios.get(`${search !== ('') ? `https://api.spaceflightnewsapi.net/v3/articles?title_contains=${search}` : "https://api.spaceflightnewsapi.net/v3/articles?_limit=100"}`)
    .then((response) => {
        
        dispatch(editlist(response.data));

    })
    }, [search]); 

    return (
        <DivInput>
            <strong>Pesquisar pelo titulo</strong>
            <input type="text" placeholder='Digite o titulo' value={search} onChange={((e) => AddSearch(e.currentTarget.value))}/>
            <button onClick={(()=> AddSearch(''))}>LISTA INICIAL</button>
        </DivInput>
    )
}
export default Input;

const DivInput = styled.div`
position: relative;
top: 75px;
display: flex;
width: 95%;
margin: 0 auto;
max-width: 656px;
background: #4242423d;
height: 55px;
border-radius: 5px;
box-shadow: 2px 4px 2px 4px #ffffff26;
align-items: center;


    input {     
        position: absolute;
        top: 10px;
        right: 130px;
        height: 11px;
        width: 50%;
        border-radius: 5px;
        padding: 10px;
    }

    strong {
        color: #ffffffc2;
        font-size: 16px;
        position: absolute;
        top: 14px;
        left: 12px;
    }

    button {
        transition-duration: 1s;
        height: 35px;
        width: 94px;
        position: absolute;
        right: 6px;
        border-radius: 5px;
        border: 1px white;
        cursor: pointer;
    }

    button:hover {
        transition-duration: 1s;
        background: gray;
        color: white;
    }
`