import { Switch, Route } from "react-router-dom";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import AuthNav from "./components/AuthNav";
import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import ContactsView from "./views/ContactsView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";

import "./App.css";

function App() {
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

      {/* <h1>Phonebook</h1>
      <ContactForm />

      <h3>Find contacts   by name</h3>
      <Filter />

      <h2>Contacts</h2>
      <ContactList /> */}
    </>
  );
}

export default App;
