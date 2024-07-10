import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components
const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-family: 'system-ui', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #06d6a0;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const Description = styled.h3`
  text-align: center;
  font-family: 'system-ui', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #EF476F;
  font-size: 1.2rem;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

function CountItem({ count }) {
  return (
    <ContainerCard>
      <StyledCard>
        <Title>{count.status}</Title>
        <Description>{count.total}</Description>
      </StyledCard>
    </ContainerCard>
  );
}

CountItem.propTypes = {
  count: PropTypes.shape({
    status: PropTypes.string.isRequired,
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default CountItem;
