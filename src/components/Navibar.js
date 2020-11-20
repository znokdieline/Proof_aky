import React from "react";
import { Menu } from "antd";
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item key="1" >Home</Menu.Item>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </Menu>
  );
};

export default Navbar;
