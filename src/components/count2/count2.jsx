import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraf from '../ui/paragraf'; 
import gambar1 from "../../assets/images/icons8-protection-mask-100 1.png";
import gambar2 from "../../assets/images/icons8-smiling-100 1.png";
import gambar3 from "../../assets/images/icons8-skull-100 1.png";

// Styled components
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #06d6a0;
  font-size: 1.2rem;
`;

const StyledDesc = styled.div`
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #EF476F;
  font-size: 1rem;
`;

const StyledConfirmed = styled(Paragraf)`
  color: #000;
  font-weight: bold;
`;

const StyledHeroImage = styled.img`
  width: 12%; 
  height: auto;
  margin-left: 10px; 
`;

const TextImageContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  margin-bottom: 10px; 
`;

function StyledCountItem({ count2 }) {
  const { name, numbers } = count2;

  return (
    <StyledContainer>
      <StyledCard>
        <StyledTitle>{name}</StyledTitle>
        <StyledDesc>
          <TextImageContainer>
            <div>
              <StyledConfirmed>Confirmed</StyledConfirmed>
              <Paragraf>{numbers.confirmed}</Paragraf>
            </div>
            <StyledHeroImage src={gambar1} alt="Confirmed" />
          </TextImageContainer>
          <TextImageContainer>
            <div>
              <StyledConfirmed>Recovered</StyledConfirmed>
              <Paragraf variant="secondary">{numbers.recovered}</Paragraf>
            </div>
            <StyledHeroImage src={gambar2} alt="Recovered" />
          </TextImageContainer>
          <TextImageContainer>
            <div>
              <StyledConfirmed>Death</StyledConfirmed>
              <Paragraf variant="danger">{numbers.death}</Paragraf>
            </div>
            <StyledHeroImage src={gambar3} alt="Death" />
          </TextImageContainer>
        </StyledDesc>
      </StyledCard>
    </StyledContainer>
  );
}

StyledCountItem.propTypes = {
  count2: PropTypes.shape({
    name: PropTypes.string.isRequired,
    numbers: PropTypes.shape({
      confirmed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      recovered: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      death: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default StyledCountItem;
