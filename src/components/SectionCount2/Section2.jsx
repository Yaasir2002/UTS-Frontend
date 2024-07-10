import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CountItem from '../count2/count2.jsx';

// Styled components
const StyledCount2 = {
  Container: styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    @media (max-width: 767px) {
      padding: 0.5rem;
    }

    @media (min-width: 992px) {
      padding: 1rem;
    }
  `,
  ContainerTitle: styled.h1`
    text-align: center;
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #06d6a0;
    font-size: 2rem;
    margin-bottom: 0.5rem;

    @media (min-width: 992px) {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  `,
  ContainerTitleDesc: styled.h4`
    text-align: center;
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #118AB2;
    font-size: 1.5rem;
    margin-bottom: 2rem;

    @media (min-width: 992px) {
      font-size: 1.8rem;
    }
  `,
  ContainerCard: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `
};

function Count2() {
  const [indonesiaData, setIndonesiaData] = useState([]);

  async function fetchIndonesiaData() {
    try {
      const response = await fetch('https://covid-fe-2023.vercel.app/api/global.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data && data.regions) {
        setIndonesiaData(data.regions);
      } else {
        throw new Error('Data structure is not as expected');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setIndonesiaData([]);
    }
  }

  useEffect(() => {
    fetchIndonesiaData();
  }, []);

  return (
    <StyledCount2.Container>
      <div>
        <StyledCount2.ContainerTitle>Situation By Region</StyledCount2.ContainerTitle>
        <StyledCount2.ContainerTitleDesc>Bacaan Pilihan Covid</StyledCount2.ContainerTitleDesc>
      </div>
      <StyledCount2.ContainerCard>
        {indonesiaData.length > 0 ? (
          indonesiaData.map(region => (
            <CountItem key={region.name} count2={region} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </StyledCount2.ContainerCard>
    </StyledCount2.Container>
  );
}

export default Count2;
