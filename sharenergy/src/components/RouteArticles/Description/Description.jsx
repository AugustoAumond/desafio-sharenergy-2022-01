import styled from 'styled-components';

function Description (props){
    const description = props.description;
    const published = props.published;
    const updated = props.updated;

    return (
        <DivDescription>
            <p>{description}</p>
            <DivPublished>
                <p id='published'><strong>Publicado em:</strong> {published}</p>
                <p id='published'><strong>Publicado em:</strong> {updated}</p>
            </DivPublished>
        </DivDescription>
    )
}
export default Description;

const DivDescription = styled.div`
width: 80%;
margin: 0 auto;
position: relative;
max-width: 500px;
top: -19px;
background: #4242423d;

    p {
        font-size: 26px;
        color: white;        
        text-align: justify;
        margin: 15px;   
    }
`

const DivPublished = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

    #published {
        font-size: 16px;
        width: 40%;
    }

    strong {
        font-size: 18px;
        color: #9e9e9e;
    }
`