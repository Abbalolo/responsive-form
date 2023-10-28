import Login from "./Login"
import styled from "styled-components";

const AppContainer = styled.div`
  height:100vh;
  width:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

function App() {


  return (
    <AppContainer>
      <Login/>
    </AppContainer>
  )
}

export default App
