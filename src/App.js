import "./App.css"
import LandingPage from "./pages/components/LandingPage"
import { Box } from "@chakra-ui/react"
import GlobalSettingContextProvider from "./contexts/GlobalSettingContext"

const App = () => {
  return (
    <>
      <Box className="app" minHeight="100vh">
        <GlobalSettingContextProvider>
          <LandingPage />
        </GlobalSettingContextProvider>
      </Box>
    </>
  )
}

export default App
