// ui/paragraf.jsx
import styled from 'styled-components';

const Paragraf = styled.p`
  color: ${({ theme, variant }) => theme.colors[variant] || theme.colors.primary};
  font-size: 1rem; 
  line-height: 1.5;
`;

export default Paragraf;
