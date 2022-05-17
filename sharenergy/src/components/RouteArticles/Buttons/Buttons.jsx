import styled from 'styled-components';

import {useSelector, useDispatch } from "react-redux";
import { addID } from '../../../services/redux/store/id/id.actions';

function Buttons () {
    const id = useSelector((state)=>state.id);
    const list = useSelector((state)=>state.list);

    const dispatch = useDispatch();

    // Próximo tirar o botão quando não houver mais artigos depois;
    function AddNext(value, index){
        document.querySelector('#back').style.display = 'block';
        if (value === id){
            dispatch(addID(list[index + 1].id))
            if (list[index + 2] === undefined){
                document.querySelector('#next').style.display = 'none';    
            }
        } 
    }

    //Pular para o próximo artigo;
    function NextArticle(){
        list.forEach((e, index) => {
            AddNext(e.id, index);
        });
    }

    // Tirar o botão quando não houver artigos antes;
    function AddBack(value, index){
        document.querySelector('#next').style.display = 'block';
        if (value === id){
            dispatch(addID(list[index - 1].id))
            if (list[index - 2] === undefined){
                document.querySelector('#back').style.display = 'none';    
            }
        } 
    }

    // Voltar para o artigo anterior;
    function BackArticle(){
        list.forEach((e, index) => {
             AddBack(e.id, index);   
        });
    }

    return (
        <DivButtons>
            <button id='back' onClick={(()=>BackArticle())}><strong>ANTERIOR</strong></button>
            <button id='next' onClick={(()=>NextArticle())}><strong>PRÓXIMO</strong></button>
        </DivButtons>
    )
}
export default Buttons;

const DivButtons = styled.div`
width: 80%;
max-width: 500px;
margin: 0 auto;
justify-content: space-around;
display: flex;
height: 80px;
background: #4242423d;
align-items: center;
position: relative;
top: -19px;

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

    @media (max-width: 650px){
        button {
            width: 75px;
            height: 25px;
        }

        strong {
            font-size: 12px;
        }
    }

`