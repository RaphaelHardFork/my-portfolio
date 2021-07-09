import {
  Box,
  Text,
  Heading,
  Container,
  Flex,
  List,
  ListItem,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"
import { ReactComponent as FranceIcon } from "../../img/france.svg"
import { ReactComponent as EnglandIcon } from "../../img/united-kingdom.svg"

import { Link } from "react-router-dom"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"

const Header = () => {
  const { lang, setLang } = useGlobalSetting()

  function handleChangeLang() {
    if (lang === "EN") {
      setLang("FR")
    } else {
      setLang("EN")
    }
  }
  return (
    <>
      <Box bg="blackAlpha.900">
        <Container maxW="90%">
          <Flex alignItems="center" justifyContent="space-between">
            <Heading as="h1" py="10" color="white">
              Rapha{lang === "EN" ? "e" : "ë"}l Pellet
            </Heading>
            <List fontSize="xl" display="flex">
              <ListItem me="4">
                <Link to="/">{lang === "EN" ? "Home" : "Acceuil"}</Link>
              </ListItem>
              <ListItem me="4">
                <Link to="/about">{lang === "EN" ? "About" : "A propos"}</Link>
              </ListItem>
              <ListItem me="4">
                <Link to="/realisations">
                  R{lang === "EN" ? "e" : "é"}alisations
                </Link>
              </ListItem>
              <ListItem me="4">
                <Link to="/contracts">
                  {lang === "EN" ? "Contracts" : "Contrats"}
                </Link>
              </ListItem>
              <ListItem me="8">
                <Link to="/contact">
                  {lang === "EN" ? "Contact me" : "Me contacter"}
                </Link>
              </ListItem>
              <ListItem>
                <FormControl display="flex" alignItems="center">
                  <Switch me="2" onChange={handleChangeLang} id="lang" />
                  <FormLabel htmlFor="lang" mb="0">
                    {lang === "EN" ? (
                      <EnglandIcon width="2rem" />
                    ) : (
                      <FranceIcon width="2rem" />
                    )}
                  </FormLabel>
                </FormControl>
              </ListItem>
            </List>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default Header
