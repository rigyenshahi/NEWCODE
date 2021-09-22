import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Registration from "./pages/RegistrationPage";
import FavouritesPage from "./pages/Favourites";
import FaqPage from "./pages/Faq";
import CommunityPage from "./pages/Community";
import Layout from "./components/layout/Layout";
import AboutUsPage from "./pages/AboutUs";
import Choice from "./pages/Choice";
import ChildAge from "./pages/ChildAge";
import SwimLevel from "./pages/SwimLevel";
import EndLevel from "./pages/End";
import Enroll from "./pages/Enrollment";

class App extends React.Component {
  state = {
    articles: [],
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about-us">
              <AboutUsPage />
            </Route>
            <Route path="/contact-us">
              <FavouritesPage />
            </Route>
            <Route path="/faq">
              <FaqPage />
            </Route>
            <Route path="/community">
              <CommunityPage />
            </Route>
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/choice">
              <Choice />
            </Route>
            <Route path="/childAge">
              <ChildAge />
            </Route>
            <Route path="/endLevel">
              <EndLevel />
            </Route>
            <Route path="/level">
              <SwimLevel />
            </Route>
            <Route path="/enrol">
              <Enroll />
            </Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
