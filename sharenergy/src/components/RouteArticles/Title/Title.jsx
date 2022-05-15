import styled from 'styled-components';

function Title (props) {
    const title = props.title

    return (
        <DivTitle>
            <h1>{title}</h1>
        </DivTitle>
    )
}
export default Title;

const DivTitle = styled.div`
height: 141px;
align-items: center;
display: flex;

    h1 {
        background: #4242423d;
        position: relative;
        margin: 0 auto;
        width: 80%;
        text-align: center;
        color: white;
    }

    @media (max-width: 650px){
        h1 {
            font-size: 20px;
            top: 20px;
        }
    }

`