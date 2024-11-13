import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Define custom colors and fonts
const colors = {
  primary: "#a37cfc", // Brand primary color
  secondary: "#1e1e1e", // Secondary color for text
  accentPink: "#fd8dae", // Accent color for highlights
  accentTeal: "#2ed4ef", // Teal accent for call-to-actions
  grayText: "#8E989F", // Gray for muted text
  darkPurple: "#1431c6", // Dark purple for headers or emphasis
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
};

// Extend the Chakra theme with custom configurations
const theme = extendTheme({ colors, fonts });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// Measure performance if needed
reportWebVitals();
