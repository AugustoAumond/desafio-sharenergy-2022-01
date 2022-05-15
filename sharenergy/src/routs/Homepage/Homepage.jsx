import styled from "styled-components";

import Title from "../../components/Homepage/Title/Title";
import Input from "../../components/Homepage/Input/Input";
import Select from "../../components/Homepage/Label/Label";
import Articles from "../../components/Homepage/Articles/Article";

function Homepage (){

    return (
        <DivHome id="divhome">
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
max-width: 1440px;
margin: 0 auto;
height: 1600px;
background: #403c3c87;
`