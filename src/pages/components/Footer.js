import { Box, useColorModeValue } from "@chakra-ui/react"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"

const Footer = () => {
  const { lang } = useGlobalSetting()
  const border = useColorModeValue("0px", "1px")

  return (
    <Box
      py="4"
      as="footer"
      bg="black"
      color="white"
      textAlign="center"
      mt="auto"
      borderTopWidth={border}
      borderTopColor="white"
    >
      {lang === "EN"
        ? "Made with React.js, Chakra-UI by @Raphael"
        : "Fait à l'aide de React.js, Chakra-UI par @Raphael"}
    </Box>
  )
}

export default Footer
