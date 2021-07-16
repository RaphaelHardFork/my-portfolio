import "./App.css"
import LandingPage from "./pages/components/LandingPage"
import { Box, useColorModeValue } from "@chakra-ui/react"
import GlobalSettingContextProvider from "./contexts/GlobalSettingContext"

const App = () => {
  const bgAll = useColorModeValue("#111111", "white")
  return (
    <>
      <Box
        bg={bgAll}
        bgImage="https://ipfs.io/ipfs/QmeRTdGNCaQkcmSZnrZRTmUnqupsxNUL3fyUjC31exencq"
        bgSize="8rem"
        bgAttachment="fixed"
        zIndex={-2}
        className="app"
        minHeight="100vh"
      >
        <GlobalSettingContextProvider>
          <LandingPage />
        </GlobalSettingContextProvider>
      </Box>
    </>
  )
}

export default App
