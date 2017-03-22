import React from 'react';
import styled from 'styled-components';
import CircularProgress from 'material-ui/CircularProgress';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Loading = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
);

Loading.propTypes = {

};

export default Loading;
