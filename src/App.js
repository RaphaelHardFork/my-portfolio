import "./App.css"
import LandingPage from "./components/LandingPage"
import { Box } from "@chakra-ui/react"

const App = () => {
  return (
    <>
      <Box className="app" minHeight="100vh">
        <LandingPage />
      </Box>
    </>
  )
}

export default App
