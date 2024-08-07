import { useEffect, useState } from "react";
import styled from "styled-components";
import CountItem from "../count/count.jsx";

const StyledCount = {
  Container: styled.div`
    background-color: #ebecec;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-bottom: 2rem;

    @media (max-width: 767px) {
      padding: 0.5rem;
    }

    @media (min-width: 768px) {
      padding: 0.5rem;
    }

    @media (min-width: 992px) {
      padding: 1rem;
    }
  `,
  Title: styled.h1`
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #06d6a0;

    @media (min-width: 992px) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  `,
  TitleDesc: styled.h4`
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #118AB2;
  `,
  CardContainer: styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  `,
  Card: styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 50px;
    width: 300px;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    @media (max-width: 767px) {
      width: 100%;
      padding: 20px;
      margin: 10px;
    }

    @media (min-width: 768px) {
      width: 300px;
      padding: 50px;
      margin: 20px;
    }

    @media (min-width: 992px) {
      width: 400px;
      padding: 50px;
      margin: 20px;
    }
  `,
  CardTitle: styled.h2`
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #06d6a0;

    @media (max-width: 767px) {
      font-size: 0.5rem;
    }
  `,
  CardDesc: styled.p`
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #EF476F;
    font-size: 1.2rem;
  `
};

function Count() {
  const [counts, setCounts] = useState([]);

  async function fetchCounts() {
    try {
      const response = await fetch("https://covid-fe-2023.vercel.app/api/global.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data && data.global) {
        const globalCounts = data.global.map(item => ({
          status: item.status,
          total: item.total.toLocaleString() 
        }));
        setCounts(globalCounts);
      } else {
        throw new Error('Data structure is not as expected');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setCounts([]); 
    }
  }

  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <StyledCount.Container>
      <div>
        <StyledCount.Title>Global Situation</StyledCount.Title>
        <StyledCount.TitleDesc>Data Covid Berdasarkan Global</StyledCount.TitleDesc>
      </div>
      <StyledCount.CardContainer>
        {counts.length > 0 ? (
          counts.map(count => (
            <CountItem key={count.status} count={count} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </StyledCount.CardContainer>
    </StyledCount.Container>
  );
}

export default Count;
