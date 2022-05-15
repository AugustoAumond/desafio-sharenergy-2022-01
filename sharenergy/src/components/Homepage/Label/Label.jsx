import styled from 'styled-components';
import {useDispatch} from 'react-redux';

import {addcounter} from './../../../services/redux/store/counter/counter.actions';


function Select(){

    const dispatch = useDispatch();  

    function AddCounter(value){

        dispatch(addcounter(value));

        if (document.querySelector('#select').value !== undefined){
            document.querySelector('#value').style.display = 'none';
        }    
    }

    return (
        <DivSelect className='divselect'>
            <h3>Defina o número de artigos:</h3>
            <select id='select' onChange={ e => AddCounter(e.currentTarget.value)}>
                <option id='value' value=''> Escolha um valor </option>
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
max-width: 830px;
margin: 0 auto;
position: relative;
top: 103px;
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
        padding: 5px;
        cursor: pointer;
    }

    select:hover {
        transition-duration: 1s;
        background: gray;
        color: white;
    }

    option:hover {
        background: gray;
        color: white;
        cursor: pointer;
    }

`