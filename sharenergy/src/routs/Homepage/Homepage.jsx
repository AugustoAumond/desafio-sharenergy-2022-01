import styled from "styled-components";


import Title from "../../components/Homepage/Title/Title";
import Input from "../../components/Homepage/Input/Input";
import Select from "../../components/Homepage/Label/Label";
import Articles from "../../components/Homepage/Articles/Article";

function Homepage (){
 

    return (
        <DivHome >
            <Title/>
            <Input/>
            <Select/>
            <Articles/>
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