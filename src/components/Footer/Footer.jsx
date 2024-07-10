import styled from 'styled-components';

// Styled components
const StyledContainer = styled.div`
    background-color: #06d6a0;
    color: #fff;
    padding: 1rem;
`;

const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const StyledNavbarBrand = styled.h1`
    font-size: 1.8rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-left: 1rem;

    @media (min-width: 768px) {
        margin-left: 50px;
        margin-bottom: 0;
    }
`;

const StyledNavbarBrandList = styled.h3`
    font-size: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-left: 1rem;

    @media (min-width: 768px) {
        margin-left: 50px;
        margin-bottom: 0;
    }
`;

const StyledNavbarList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-right: 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 50px;
        margin-right: 50px;
    }
`;

const StyledNavbarItem = styled.li`
    font-size: 1.3rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0 1rem;
    cursor: pointer;
    color: #fff;

    &:hover {
        text-decoration: underline;
    }
`;

// StyledFooter component using styled-components
function StyledFooter() {
    return (
        <StyledContainer>
            <StyledNavbar>
                <div>
                    <StyledNavbarBrand>Covid ID</StyledNavbarBrand>
                    <StyledNavbarBrandList>Developed By Yaasir</StyledNavbarBrandList>
                </div>
                <StyledNavbarList>
                    <StyledNavbarItem>Global</StyledNavbarItem>
                    <StyledNavbarItem>Indonesia</StyledNavbarItem>
                    <StyledNavbarItem>Provinsi</StyledNavbarItem>
                    <StyledNavbarItem>About</StyledNavbarItem>
                </StyledNavbarList>
            </StyledNavbar>
        </StyledContainer>
    );
}

export default StyledFooter;
