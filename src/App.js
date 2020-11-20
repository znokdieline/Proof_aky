import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Catalog from "./components/Catalog";
import Favoritos from "./components/Favoritos";
import Search from "./components/SearchComponent";
import Navbar from "./components/Navibar";
import { Layout } from "antd";
import "antd/dist/antd.css";
//import "./styles.css";

export default function App() {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout className="layout">
      <Router>
        <div>
          <Header>
            <Navbar />
          </Header>
          <Content>
            <Search />
            <Switch>
              <Route path="/favorites">
                <h1>Favorites</h1>
              </Route>
              <Route path="/">
                <Catalog />
              </Route>
              <Route path="/favorites">
                <Favoritos />
              </Route>
            </Switch>
          </Content>
        </div>
      </Router>
    </Layout>
  );
}
