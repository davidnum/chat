import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export function App(props) {
  return (
    <AppWrapper>
      {React.Children.toArray(props.children)}
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
