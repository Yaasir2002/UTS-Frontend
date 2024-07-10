import styled from 'styled-components';
import gambar1 from "../../assets/images/gambar1.jpg";
import Button from "../ui/button/index.jsx";

// Styled components
const StyledContainer = styled.div`
    margin: 1rem;

    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;
    }
`;

const StyledHeroSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;

    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        margin: 0 1rem;
    }
`;

const StyledHeroLeft = styled.div`
    margin-bottom: 1rem;

    @media (min-width: 992px) {
        flex-basis: 40%;
        margin-right: 100px; /* Keep the right margin for larger screens */
    }
`;

const StyledHeroTitle = styled.h2`
    color: #06d6a0;
    margin-bottom: 1rem;
    font-size: 2.44rem;
`;

const StyledHeroGenre = styled.h3`
    color: #118AB2;
    margin-bottom: 1rem;
    font-size: 1.59rem;
`;

const StyledHeroDescription = styled.p`
    color: #64748b;
    margin-bottom: 2rem;
`;

const StyledHeroButton = styled(Button)`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
`;

const StyledHeroImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 25px;
`;

// StyledHero component using styled-components
function StyledHero() {
    return (
        <StyledContainer>
            <StyledHeroSection>
                <StyledHeroLeft>
                    <StyledHeroTitle>Covid ID</StyledHeroTitle>
                    <StyledHeroGenre>Monitoring Perkembangan Covid</StyledHeroGenre>
                    <StyledHeroDescription>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.
                    </StyledHeroDescription>
                    <StyledHeroButton>Vaccine</StyledHeroButton>
                </StyledHeroLeft>
                <div>
                    <StyledHeroImage src={gambar1} alt="placeholder" className="hero__image" />
                </div>
            </StyledHeroSection>
        </StyledContainer>
    );
}

export default StyledHero;
