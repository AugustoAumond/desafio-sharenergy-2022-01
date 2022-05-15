import styled from 'styled-components';

function IMG (props) {
    const img = props.img;

    return (
        <DivImg >
            <img src={`${img}`} alt="" />
        </DivImg>
    )
}
export default IMG;

const DivImg = styled.div`
position: relative;
width: 100%;
margin: 0 auto;
text-align: center;
margin-top: 15px;

    img {
        max-width: 500px;
        width: 80%;
        text-aligne: center;
    }
`