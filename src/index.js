import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react"
import { BrowserRouter as Router } from "react-router-dom"

const theme = extendTheme({
  fonts: {
    heading: "Carter One, cursive",
    body: "Heebo, sans-serif",
  },
  styles: {
    global: {
      p: {
        fontSize: "xl",
      },
    },
  },
  initialColorMode: "system",
  useSystemColorMode: false,
})

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
