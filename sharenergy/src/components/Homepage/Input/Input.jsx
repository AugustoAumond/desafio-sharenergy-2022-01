import {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {editlist} from './../../../services/redux/store/lists/list.actions';
import {addcounter} from './../../../services/redux/store/counter/counter.actions';
import {useDispatch, useSelector} from "react-redux";

import { OpenClose } from './Input.actions';
import { Dates } from './Input.actions';


function Input(){
    const [search, setSearch] = useState('');
    const [begin, setBegin] = useState();
    const [final, setFinal] = useState();

    const list = useSelector((state)=>state.list); 

    const dispatch = useDispatch();

    function AddSearch (value){

        setSearch(value);

        dispatch(addcounter(10));

        OpenClose(value);
    }    

    function AddBegin(value){
        setBegin(value);
        if (value !== ''){
            document.querySelector('#name').style.display = 'none';
        }
    }

    function SearchDate(begin, final){
        let date = [];  
        Dates(list).forEach( (e, i) =>{        
            if ((new Date(begin) < new Date(e.publishedAt)) && (new Date(final) > new Date(e.publishedAt))){
                date.push(e);
            }
        })
        setBegin('');
        setFinal(''); 
        dispatch(editlist(date));
        dispatch(addcounter(date.length));
        document.querySelector('#name').style.display = 'flex';
    }

    useEffect (()=> {
        axios.get(`${search !== ('') ? `https://api.spaceflightnewsapi.net/v3/articles?title_contains=${search}` : "https://api.spaceflightnewsapi.net/v3/articles?_limit=500"}`)
    .then((response) => {
        
        dispatch(editlist(response.data));

    })
    }, [search, dispatch]); 

    return (
        <DivInput>
            <DivName id='name'>
                <strong>PESQUISAR PELO TITULO</strong>
                <input  type="text" placeholder='Digite o titulo' value={search} onChange={((e) => AddSearch(e.currentTarget.value))}/>
                <button onClick={(()=> AddSearch(''))}>LISTA INICIAL</button>
            </DivName>

            <DivPublished id='published'>
                <strong>PUBLICADA ENTRE </strong>
                <input type='date' id='begin' placeholder='Digite a data inicial' value={begin} onChange={((e)=> AddBegin(e.currentTarget.value))}/>
                <input type='date' id='final' placeholder='Digite a data final' value={final} onChange={((e)=> setFinal(e.currentTarget.value))}/>
                <button onClick={(()=>SearchDate(begin, final ))}> PESQUISAR </button>
            </DivPublished>
        </DivInput>
    )
}
export default Input;

const DivInput = styled.div`

`

const DivName = styled.div `
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
        width: 150px;
        color: #ffffffc2;
        font-size: 16px;
        position: absolute;
        top: 8px;
        left: 12px;
        text-align: center;
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

    @media (max-width: 850px){
        flex-direction: column;
        height: 170px;

        input {
            position: relative;
            width: 80%;
            top: 28px;
            right: unset;
        }

        strong {
            position: relative;
            width: 100%;
            top: 12px;
            font-size: 20px;
        }

        button {
            position: relative;
            top: 40px;
            width: 200px;
        }
    }
`

const DivPublished = styled.div `
position: relative;
top: 90px;
display: flex;
width: 95%;
margin: 0 auto;
max-width: 656px;
background: #4242423d;
height: 55px;
border-radius: 5px;
box-shadow: 2px 4px 2px 4px #ffffff26;
align-items: center;

    #begin {     
        position: absolute;
        top: 10px;
        right: 324px;
        height: 11px;
        width: 20%;
        border-radius: 5px;
        padding: 10px;
    }

    #final {
        position: absolute;
        top: 10px;
        right: 131px;
        height: 11px;
        width: 20%;
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

    @media (max-width: 850px){
        flex-direction: column;
        top: 110px;
        height: 170px;

        strong {
            position: relative;
            aligne-itens: center;
            width: 100%;
            top: 12px;
            font-size: 20px;
            text-align: center;
        }

        #begin {
            position: relative;
            right: 91px;
            top: 28px;
            width: 25%;    
        }

        #final {
            position: relative;
            right: -95px;
            top: -8px;
            width: 25%;  
        }

        button {
            position: relative;
            top: 15px;
            width: 200px;
        }
    }
`