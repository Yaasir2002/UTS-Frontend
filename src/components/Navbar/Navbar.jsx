import styled from 'styled-components';

// Styled components for Navbar
const StyledContainer = styled.div`
    background-color: #06d6a0;
    padding: 1rem;
    color: #fff;
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
    font-size: 2.4rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 1rem;
    font-weight: bold;
    margin-left: 50px;

    @media (min-width: 768px) {
        margin-left: 0;
        margin-bottom: 0;
    }
`;

const StyledNavbarList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-right: 50px;

    @media (min-width: 768px) {
        flex-direction: row;
        margin-right: 0;
    }
`;

const StyledNavbarItem = styled.li`
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media (min-width: 768px) {
        margin-bottom: 0;
        margin-left: 1rem;
    }
`;

const StyledNavbarLink = styled.a`
    text-decoration: none;
    color: inherit;
    cursor: pointer;
`;

// Navbar component using styled-components
function StyledNavbarComponent() {
    return (
        <StyledContainer>
            <StyledNavbar>
                <div>
                    <StyledNavbarBrand>Covid ID</StyledNavbarBrand>
                </div>
                <StyledNavbarList>
                    <StyledNavbarItem><StyledNavbarLink href="/">Home</StyledNavbarLink></StyledNavbarItem>
                    <StyledNavbarItem><StyledNavbarLink href="/Covid/Indonesia">Indonesia</StyledNavbarLink></StyledNavbarItem>
                    <StyledNavbarItem><StyledNavbarLink href="/Covid/Provinsi">Provinsi</StyledNavbarLink></StyledNavbarItem>
                    <StyledNavbarItem><StyledNavbarLink href="/Covid/About">About</StyledNavbarLink></StyledNavbarItem>
                </StyledNavbarList>
            </StyledNavbar>
        </StyledContainer>
    );
}

export default StyledNavbarComponent;
