import React from 'react';
import styled from "styled-components";
import GlobalStyle from "./theme";
import Container from "./components";
import {Provider} from "react-redux";
import store from "./store/store";

const AppWrapper = styled.div`
  background-color: #F1FCFF;
  height: 100%;
`

const App = () => {
  return (

          <Provider store={store}>
                  <GlobalStyle />
                  <AppWrapper>
                      <Container/>
                  </AppWrapper>
          </Provider>
  );
}

export default App;
