import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  overflow-y: auto;
  padding: 0;
  position: ${(props) => props.bottom ? 'absolute' : 'relative'};
  bottom: 0;
`;

export default Ul;
