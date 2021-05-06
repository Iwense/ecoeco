import { Switch, Route } from "react-router-dom";
import { routes } from "../index";

import Main from '../../components/organisms/Main'

const AppRoutes = () => (
    <Switch>
      <Route component={Main} path={routes.main} />
    </Switch>
);
  

export default AppRoutes;