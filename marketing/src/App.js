import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = ({ history }) => {
  return (
    <MuiThemeProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
