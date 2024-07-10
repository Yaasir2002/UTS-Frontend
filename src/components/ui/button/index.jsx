import styled from 'styled-components';

const Button = styled.button`
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  background-color: ${({ theme, variant }) => theme.colors[variant] || theme.colors.primary};
`;

export default Button;
