import { Box } from "@chakra-ui/react"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"

const Footer = () => {
  const { lang } = useGlobalSetting()

  return (
    <Box
      py="4"
      as="footer"
      bg="black"
      color="white"
      textAlign="center"
      mt="auto"
    >
      {lang === "EN"
        ? "Made with React.js, Chakra-UI by @Raphael"
        : "Fait à l'aide de React.js, Chakra-UI par @Raphael"}
    </Box>
  )
}

export default Footer
