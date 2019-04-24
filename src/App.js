import React from "react";
import ThemeProvider from "./ThemeContext/ThemeProvider";
import Menu from "./Menu";
import SetColor from "./SetColor";

const App = () => (
  <ThemeProvider>
    <Menu />
    <br />
    <SetColor />
  </ThemeProvider>
);

export default App;
