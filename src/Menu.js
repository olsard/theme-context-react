import React from "react";
import { withTheme } from "./ThemeContext/withTheme";
const Menu = ({ themeContext }) => (
  <div style={{ backgroundColor: themeContext.color }}>Menu</div>
);
export default withTheme(Menu);
