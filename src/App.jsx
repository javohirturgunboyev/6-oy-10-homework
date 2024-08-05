import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { ThemeContext } from "./ThemeContext";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import "./App.css"

const lightTheme = {
  body: "#fff",
  text: "#000",
  highlight: "#e74c3c",
  primary: "#f39c12",
  secondary: "#e74c3c",
  background: "#f9f9f9",
};

const darkTheme = {
  body: "#1c1c1c",
  text: "#fff",
  highlight: "#f39c12",
  primary: "#e74c3c",
  secondary: "#f39c12",
  background: "#2c2c2c",
};

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
`;

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes here */}
          </Routes>
          <button onClick={toggleTheme}>Dark mode</button>
        </Router>
      </Container>
    </StyledThemeProvider>
  );
};

export default App;
