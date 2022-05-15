import styled from 'styled-components';

function Title(){
    return (
        <DivTitle>
            <h1>Artigos Recentes</h1>
        </DivTitle>
    )
}
export default Title;

const DivTitle = styled.div`
position: relative;
top: 40px;
width: 97%;
display: flex;
height: 95px;
margin: 0 auto;
background: #4242423d;
align-items: center;
justify-content: center;
border-radius: 10px;

    h1 {
        color: #ffffffc2;
    }
`