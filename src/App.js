import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Switch, Route } from "react-router-dom";

import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import ContactsView from "./views/ContactsView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import authOperations from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Switch>
          {/* <Route path="/" exact>
          <HomeView />
        </Route> */}
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          {/* <Route path="/contacts" exact>
          <ContactsView />
        </Route> */}
          <PrivateRoute path="/contacts" exact redirectTo="/login">
            <ContactsView />
          </PrivateRoute>

          {/* <Route path="/register" exact>
          <RegisterView />
        </Route> */}
          <PublicRoute path="/register" exact restricted>
            <RegisterView />
          </PublicRoute>

          {/* <Route path="/login" exact>
          <LoginView />
        </Route> */}
          <PublicRoute path="/login" exact restricted>
            <LoginView />
          </PublicRoute>
        </Switch>
      </>
    )
  );
}

export default App;
