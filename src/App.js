import React from 'react';
import {Container} from "react-bootstrap"
import NavBarTop from "./components/NavBarTop";
import Home from "./views/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Details from "./views/Details"
import DetailsPlanets from "./views/DetailsPlanets"
import injectContext from "./store/appContext"

function App() {
  return (
        <Container fluid>
            <BrowserRouter>
              <NavBarTop />
                <div>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/Details/:name" component={Details} />
                      <Route exact path="/Details-Planets/:name" component={DetailsPlanets} />
                      <Route render={() => <h1>ERROR 404</h1> } />
                    </Switch>
                </div>
            </BrowserRouter>
        </Container>
  );
}

export default injectContext(App);
