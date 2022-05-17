import styled from "styled-components";

import {useDispatch, useSelector } from "react-redux";
import {addcounter} from './../../services/redux/store/counter/counter.actions';

import Title from "../../components/Homepage/Title/Title";
import Input from "../../components/Homepage/Input/Input";
import Select from "../../components/Homepage/Select/Select";
import Articles from "../../components/Homepage/Articles/Article";

function Homepage (){
    const counter = useSelector((state)=>state.counter); 

    const dispatch = useDispatch();

    function More(){

        const more = counter + counter;

        dispatch(addcounter(more));

    }
 
    return (
        <DivHome >
            <Title/>
            <Input/>
            <Select/>
            <Articles/>
            <DivButton>
                <button onClick={(()=> More())}> VER MAIS </button>
            </DivButton>
        </DivHome>
    )
}
export default Homepage;

const DivHome = styled.div `
position: relative;
top: 50px;
width: 80%;
height: 100%;
max-width: 1440px;
margin: 0 auto;

   

    @media (max-width: 650px){
        width: 100%;
    }

`

const DivButton = styled.div`
position: relative;
display: flex;
top: 126px;
height: 150px;
width: 100%;
align-items: center;
justify-content: center;

    button  {
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

    @media (max-width: 850px){
        top: 190px;
    }
`