import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Link,Switch} from "react-router-dom";
import HomeHeader from "./components/home-header";
import styled from "styled-components"
import SideBar from "./components/side-bar";
import Chat from "./components/chat";

function App() {
  return (
      <div className="app">
        {/*  <h1> Building Slack Clone Application</h1>*/}
        <Router>
          <>
              <HomeHeader/>
                  <AppBody>
                      <SideBar/>
            <Switch>
              <Route path="/" exact>
                  <Chat/>
              </Route>
            </Switch>
                  </AppBody>
          </>
        </Router>
      </div>
  );
}

export default App;
const AppBody=styled.div`
    display:flex;
    height:100vh;
`;


