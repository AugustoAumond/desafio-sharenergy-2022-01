import styled from 'styled-components';
import {useState} from 'react';

import {useSelector, useDispatch } from "react-redux";

import { addID } from '../../../services/redux/store/id/id.actions';

function Buttons () {
    const [newId, setNewId] = useState('');

    const id = useSelector((state)=>state.id);

    const list = useSelector((state)=>state.list);

    const dispatch = useDispatch();

    function NextArticle(){
        list.forEach((e, index) => {
            if (newId === ''){
                if (e.id === id){
                setNewId(list[index + 1].id);
                dispatch(addID(list[index + 1].id))
                } 
            } 
            if (e.id === newId){
                setNewId(list[index + 1].id);
                dispatch(addID(list[index + 1].id))
            }   
        });
    }

    function BackArticle(){
        list.forEach((e, index) => {
            if (newId === ''){
                if (e.id === id){
                setNewId(list[index - 1].id);
                dispatch(addID(list[index + 1].id))
                } 
            } 
            if (e.id === newId){
                setNewId(list[index - 1].id);
                dispatch(addID(list[index + 1].id))
            }   
        });
    }

    return (
        <DivButtons>
            <button onClick={(()=>BackArticle())}><strong>ANTERIOR</strong></button>
            <button onClick={(()=>NextArticle())}><strong>PRÓXIMO</strong></button>
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

`