import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

import Dashboard from "../containers/views/Dashboard"
import User from "../containers/views/User";
import Login from "../containers/views/Login"

export const history = createBrowserHistory();

function AppRouter() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PublicRouter exact path="/" component={Login}  />
          <PrivateRouter  keyNum="1"
          title={"Dashboard"} path="/dashboard" component={Dashboard}  /> 
          <PrivateRouter  keyNum="2"
        title={"User"} path="/user" component={User}  /> 
          {/* <PrivateRouter
          path="/accountsBank"
          keyNum="31"
          title={"Contas - Banco"}
          component={AccountBanks}
        />
        <PrivateRouter
          path="/accountsWallet"
          keyNum="32"
          title={"Contas - Wallet"}
          component={AccountWallets}
        /> */}
          
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
