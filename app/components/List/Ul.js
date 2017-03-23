import styled from 'styled-components';
import AutoScroll from '../../utils/AutoScroll';

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  overflow-y: auto;
  max-height: 100%; 
  padding: 0;
  position: ${(props) => props.bottom ? 'absolute' : 'relative'};
  bottom: 0;
`;

export default AutoScroll(Ul, 'count');
