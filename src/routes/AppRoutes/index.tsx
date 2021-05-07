import { Switch, Route } from "react-router-dom";
import { routes } from "../index";
import MainLayout from '../../layouts/MainLayout'
import Main from '../../components/organisms/Main'
import Sales from '../../components/organisms/Sales'
import Analytics from '../../components/organisms/Analytics'
import List from '../../components/organisms/List'
import Profile from '../../components/organisms/Profile'
import BottomNavBar from '../../components/organisms/BottomNavBar'

const AppRoutes = () => (
  <MainLayout footer={<BottomNavBar />}>
     <Switch>
      <Route component={Main} exact path={routes.main} />
      <Route component={Sales} path={routes.sales} />
      <Route component={Analytics} path={routes.analytics} />
      <Route component={List} path={routes.list} />
      <Route component={Profile} path={routes.profile} />
    </Switch>
  </MainLayout>
);
  

export default AppRoutes;