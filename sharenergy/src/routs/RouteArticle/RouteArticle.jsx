import styled from 'styled-components';
import {useEffect, useState} from 'react';
import axios from 'axios';

import {useSelector, useDispatch } from "react-redux";
import {  Link } from "react-router-dom";

import { addcounter } from '../../services/redux/store/counter/counter.actions';

import Title from '../../components/RouteArticles/Title/Title';
import IMG from '../../components/RouteArticles/Img/Img';
import Description from '../../components/RouteArticles/Description/Description';
import Buttons from '../../components/RouteArticles/Buttons/Buttons';

function RouteArticle () {
    const [article, setArticle] = useState();
    const id = useSelector((state)=>state.id);

    const dispatch = useDispatch();

    console.log('article')

    useEffect (()=> {
        axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
    .then((response) => {

        setArticle(response.data); 

    })
    .catch((err) => {
      setArticle([]);
    });
    },[id]);

    function AddCounter (value){
        
        dispatch(addcounter(value));

    }

    return (
        <DivRouteArticle>
            <Title title={article?.title}/>
            <IMG img={article?.imageUrl}/>
            <Description description={article?.summary} published={article?.publishedAt} updated={article?.updatedAt}/>
            <Buttons/>
            <DivButton>
                <Link to="/" style={{textDecoration:"none", color: 'white'}}><button onClick={(()=>AddCounter(10))}><strong>  VOLTAR PARA PÁGINA INICIAL</strong></button> </Link>
            </DivButton>
        </DivRouteArticle>
    )
}
export default RouteArticle;

const DivRouteArticle = styled.div`
position: relative;
top: 50px;
width: 80%;
max-width: 1440px;
margin: 0 auto;
background: #4242423d;  
`

const DivButton = styled.div`
width: 80%;
max-width: 500px;
margin: 0 auto;
display: flex;
height: 100px;
align-items: center;
justify-content: center;

    button {
        border-radius: 3px;
        border: 1px white;
        width: 150px;
        height: 40px;
        cursor: pointer;      
    }

    button:hover {
        transition-duration: 1s;
        background: gray;
        color: white;
    }
`
