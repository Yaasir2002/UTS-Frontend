import styled from "styled-components";
import data from "../../utils/constants/provinces.js";

// Styled components
const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 10px;
`;

const ContainerTitle = styled.h1`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #06d6a0;
`;

const ContainerTitleDesc = styled.h4`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #118AB2;
  margin-bottom: 10px;
`;

const ContainerTable = styled.div`
  padding: 10px;
`;

const Table = styled.table`
  width: 80%;
  max-width: 80%;
  border-collapse: collapse;
  padding: 20px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 95%;
    max-width: 95%;
  }

  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 85%;
  }

  @media screen and (min-width: 992px) {
    width: 80%;
    max-width: 80%;
  }
`;

const TableHead = styled.thead`
  color: #06d6a0;
  text-align: center;
`;

const TableHeader = styled.th`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
`;

const TableRow = styled.tr`
  background-color: ${props => props.even ? "#fff" : "#f0f0f0"};
`;

function StyledTable() {
  return (
    <Container>
      <div>
        <ContainerTitle>Indonesia</ContainerTitle>
        <ContainerTitleDesc>Data Covid Berdasarkan Provinsi</ContainerTitleDesc>
      </div>
      <ContainerTable>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>No</TableHeader>
              <TableHeader>Kota</TableHeader>
              <TableHeader>Positif</TableHeader>
              <TableHeader>Sembuh</TableHeader>
              <TableHeader>Dirawat</TableHeader>
              <TableHeader>Meninggal</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {data.provinces.map((province, index) => (
              <TableRow key={index} even={index % 2 === 0}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{province.kota}</TableCell>
                <TableCell>{province.kasus}</TableCell>
                <TableCell>{province.sembuh}</TableCell>
                <TableCell>{province.dirawat}</TableCell>
                <TableCell>{province.meninggal}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </ContainerTable>
    </Container>
  );
}

export default StyledTable;
