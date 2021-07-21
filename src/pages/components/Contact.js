import { Box, Link } from "@chakra-ui/react"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"

const Contact = () => {
  const { lang } = useGlobalSetting()

  return (
    <Box>
      <Link
        isExternal
        href={
          lang === "EN"
            ? "https://www.linkedin.com/in/rapha%C3%ABl-pellet-7757ab129/?locale=fr_FR"
            : "https://www.linkedin.com/in/rapha%C3%ABl-pellet-7757ab129/?locale=en_US"
        }
      >
        LinkedIn
      </Link>
    </Box>
  )
}

export default Contact
