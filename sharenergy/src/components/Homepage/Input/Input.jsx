import {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {edit} from './../../../services/redux/store/lists/list.actions';
import {add} from './../../../services/redux/store/counter/counter.actions';
import {useDispatch} from "react-redux";


function Input(){
    const [search, setSearch] = useState();
    const [list, setList] = useState();
    console.log(search);

    const dispatch = useDispatch();

    dispatch(edit(list));

    dispatch(add(list.length));

    useEffect (()=> {
        axios.get(`https://api.spaceflightnewsapi.net/v3/articles?title_contains=${search}`)
    .then((response) => {
        if (search !== ''){
           setList(response.data);
            console.log(response.data, search); 
        }  
    })
    .catch((err) => {
      });
    },[search]); 

    return (
        <DivInput>
            <strong>Pesquisar pelo titulo</strong>
            <input type="text" placeholder='Digite o titulo' onChange={((e) => setSearch(e.currentTarget.value))}/>
        </DivInput>
    )
}
export default Input;

const DivInput = styled.div`
position: relative;
top: 75px;
width: 95%;
margin: 0 auto;
max-width: 656px;
background: #4242423d;
height: 55px;
border-radius: 5px;
box-shadow: 2px 4px 2px 4px #ffffff26;


    input {     
        position: absolute;
        top: 10px;
        right: 7px;
        height: 11px;
        width: 62%;
        border-radius: 5px;
        padding: 10px;
    }

    strong {
        color: #ffffffc2;
        font-size: 19px;
        position: absolute;
        top: 14px;
        left: 12px;
    }
`