import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Switch, Route } from "react-router-dom";

import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import ContactsView from "./views/ContactsView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import authOperations from "./redux/auth/auth-operations";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/contacts" exact>
          <ContactsView />
        </Route>

        <Route path="/register" exact>
          <RegisterView />
        </Route>

        <Route path="/login" exact>
          <LoginView />
        </Route>
      </Switch>
    </>
  );
}

export default App;
