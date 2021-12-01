import { Route, Switch } from "react-router-dom";
import Franchise from "./Franchise";

const AppContainer = () => {
  return (
    <Switch>
      <Route path="/" exact component={Franchise} />
    </Switch>
  );
};

export default AppContainer;
