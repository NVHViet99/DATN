import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/page-one">
            <PageOne />
          </Route>
          <Route path="/page-two">
            <PageTwo />
          </Route>
          <Route path="/page-three">
            <PageThree />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
