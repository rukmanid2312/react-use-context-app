import React, { useContext } from "react";

import { ThemeContext, UserContext } from "../App";
import './Header.css';

const Header = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  return <div className="header">
    <h1>{`demo of useContext in ${theme.dark} theme`}</h1>
    <span>logged in user is {user.name}</span>
  </div>;
};

export default Header;
