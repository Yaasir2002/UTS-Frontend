import styled from 'styled-components';
import gambar2 from "../../assets/images/gambar2.jpg";

// Styled components
const AddMovieContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 80px;
    background-color: #ebecec;

    @media (max-width: 767px) {
        flex-direction: column;
        padding: 20px;
    }
`;

const LeftSection = styled.div`
    width: 60%;
    align-items: center;
    padding: 20px;

    @media (max-width: 767px) {
        width: 100%;
        margin: 0 auto;
    }
`;

const Kotak = styled.div`
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-left: 20%;

    @media (max-width: 767px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const RightSection = styled.div`
    width: 40%;
    margin-right: 30px;

    @media (max-width: 767px) {
        width: 100%;
        margin-right: 0;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 3px solid #06d6a0;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #06d6a0;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    width: 100%;

    &:hover {
        background-color: #04976f;
    }
`;

const Heading1 = styled.h1`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #06d6a0;
`;

const Heading2 = styled.h2`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #06d6a0;
`;

// Form component using styled-components
const Form = () => {
    return (
        <AddMovieContainer>
            <LeftSection>
                <Kotak />
                <img src={gambar2} alt="placeholder" />
            </LeftSection>
            <RightSection>
                <Heading1>Form Covid</Heading1>
                <Heading2>Provinsi</Heading2>
                <Input type="text" placeholder="" />
                <Heading2>Status</Heading2>
                <Input type="text" placeholder="" />
                <Heading2>Jumlah</Heading2>
                <Input type="text" placeholder="" />
                <Button>Submit</Button>
            </RightSection>
        </AddMovieContainer>
    );
}

export default Form;
