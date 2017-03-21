import React from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#025baa',
    primary2Color: '#1462b3',
    accent1Color: '#ff7e25',
  },
});

const AppWrapper = styled.div`
  max-width: 550px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export function App(props) {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppWrapper>
        {React.Children.toArray(props.children)}
      </AppWrapper>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
