import { useEffect, useState } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import {useDispatch, useSelector } from "react-redux";
import {  Link } from "react-router-dom";

import {editlist} from './../../../services/redux/store/lists/list.actions';
import {addID} from './../../../services/redux/store/id/id.actions';
import {ShowList, List} from './Articles.action';

function Articles (){
    const listredux = useSelector((state)=>state.list); 
    const [list, setList] = useState();
    const counter = useSelector((state)=>state.counter); 

    const dispatch = useDispatch();  

    useEffect (()=> {
        axios.get("https://api.spaceflightnewsapi.net/v3/articles?_limit=500")
    .then((response) => {   

        if (listredux === null){ 

            setList(response.data); 

            dispatch(editlist(response.data));
        }  
    })
    .catch((err) => {
      setList([]);
    });    

    },[counter, listredux, dispatch]);    

    return (     
        <DivArticles className='divarticle' counter={counter}>
                <DivTitulo>
                    <h2 id='title'>Titulo do Artigo</h2>
                    <h2 id='published'> Data da Publicação </h2>
                </DivTitulo>

                {ShowList(list || listredux) ? ShowList(List(list, listredux), counter).map((e, index)=>( 
                    <ul key={index}>
                        <DivList>
                            <li id='title'> <Link to="/article" style={{textDecoration:"none", color: 'white'}} onClick={(()=>  dispatch(addID(e?.id)))} > {e?.title} </Link></li>
                            <li id='published'> {e?.publishedAt} </li>
                        </DivList>
                    </ul>    
                )): <div>Carregando ...</div>} 
        </DivArticles>     
    )     
}
export default Articles;

const DivArticles = styled.div`
position: relative;
top: 125px;
width: 96%;
margin: 0 auto;
max-width: 830px;
background: #4242423d;
padding: 35px;

    @media (max-width: 850px){
        top: 190px;
        margin: unset;
    }

    @media (max-width: 650px){
        padding: unset;
    }
`

const DivTitulo = styled.div `
display: flex;
position: relative;
top: 7px;
width: 95%;
max-width: 664px;
margin: 0 auto;
padding: 5px;
border-bottom: solid 1px #ffffff08;
color: white;

    #title {
        list-style: none;
        margin: 5px;
        margin-top: 15px;
        width: 50%;
        text-align: center;
    }

    #published {
        list-style: none;
        margin: 5px;
        margin-top: 15px;
        width: 50%;
        text-align: center;
    }

    @media (max-width: 650px){
    width: 80%;

        #title {
            font-size: 20px;
        }

        #published {
            font-size: 20px;
        }
    }
`

const DivList = styled.div `
position: relative;
left: -18px;
display: flex;
width: 96%;
max-width: 664px;
margin: 0 auto;
padding: 5px;
border: solid 1px #ffffff08;
height: 80px;
color: white;

    #title {
        list-style: none;
        margin-top: 15px;
        width: 50%;
        text-align: center;
        cursor: pointer;
        color: white;
    }

    #published {
        list-style: none;
        margin-top: 15px;
        width: 50%;
        text-align: center;
        cursor: pointer;
    }

    @media (max-width: 650px){
    width: 80%;
    min-width: 280px;

        #title {
            font-size: 12px;
        }

        #published {
            font-size: 12px;
        }
    }
`