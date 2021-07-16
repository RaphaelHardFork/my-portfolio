import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  List,
  ListItem,
  Switch,
  useColorMode,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"
import { ReactComponent as FranceIcon } from "../../img/france.svg"
import { ReactComponent as EnglandIcon } from "../../img/united-kingdom.svg"
import { ReactComponent as Sun } from "../../img/sun.svg"
import { ReactComponent as Moon } from "../../img/moon.svg"
import { ReactComponent as Vision } from "../../img/vision.svg"

const NavList = ({ isOpen, onClose }) => {
  const { lang, setLang } = useGlobalSetting()
  const { colorMode, toggleColorMode } = useColorMode()

  function handleChangeLang() {
    if (lang === "EN") {
      setLang("FR")
    } else {
      setLang("EN")
    }
  }
  return (
    <>
      {" "}
      <List
        flexDirection={isOpen ? "column" : "row"}
        fontSize="xl"
        display="flex"
        textAlign={isOpen ? "center" : ""}
      >
        <ListItem
          borderRadius="10"
          _hover={isOpen ? { background: "gray" } : ""}
          py={isOpen ? "4" : ""}
          textAlign={isOpen ? "center" : ""}
          me={isOpen ? "" : "4"}
          mb={isOpen ? "4" : ""}
          onClick={onClose}
          alignSelf={isOpen ? "" : "center"}
        >
          <Link to="/">{lang === "EN" ? "Home" : "Acceuil"}</Link>
        </ListItem>
        <ListItem
          borderRadius="10"
          _hover={isOpen ? { background: "gray" } : ""}
          py={isOpen ? "4" : ""}
          textAlign={isOpen ? "center" : ""}
          me={isOpen ? "" : "4"}
          mb={isOpen ? "4" : ""}
          onClick={onClose}
          alignSelf={isOpen ? "" : "center"}
        >
          <Link to="/about">{lang === "EN" ? "About" : "A propos"}</Link>
        </ListItem>
        <ListItem
          borderRadius="10"
          _hover={isOpen ? { background: "gray" } : ""}
          py={isOpen ? "4" : ""}
          textAlign={isOpen ? "center" : ""}
          me={isOpen ? "" : "4"}
          mb={isOpen ? "4" : ""}
          onClick={onClose}
          alignSelf={isOpen ? "" : "center"}
        >
          <Link to="/realisations">R{lang === "EN" ? "e" : "é"}alisations</Link>
        </ListItem>
        <ListItem
          borderRadius="10"
          _hover={isOpen ? { background: "gray" } : ""}
          py={isOpen ? "4" : ""}
          textAlign={isOpen ? "center" : ""}
          me={isOpen ? "" : "4"}
          mb={isOpen ? "4" : ""}
          onClick={onClose}
          alignSelf={isOpen ? "" : "center"}
        >
          <Link to="/contracts">
            {lang === "EN" ? "Contracts" : "Contrats"}
          </Link>
        </ListItem>
        <ListItem
          borderRadius="10"
          _hover={isOpen ? { background: "gray" } : ""}
          py={isOpen ? "4" : ""}
          textAlign={isOpen ? "center" : ""}
          me={isOpen ? "" : "4"}
          mb={isOpen ? "4" : ""}
          onClick={onClose}
          alignSelf={isOpen ? "" : "center"}
        >
          <Link to="/contact">
            {lang === "EN" ? "Contact me" : "Me contacter"}
          </Link>
        </ListItem>
        <ListItem mx={isOpen ? "auto" : ""}>
          <Flex>
            <FormControl display="flex" alignItems="center">
              <Switch me="2" onChange={handleChangeLang} id="lang" />
              <FormLabel htmlFor="lang" mb="1.25">
                {lang === "EN" ? (
                  <EnglandIcon width="2rem" />
                ) : (
                  <FranceIcon width="2rem" />
                )}
              </FormLabel>
            </FormControl>
            <Button
              color={colorMode === "light" ? "white" : "black"}
              size="lg"
              leftIcon={
                colorMode === "light" ? (
                  <Moon height="3rem" width="3rem" />
                ) : (
                  <Sun height="3rem" width="3rem" />
                )
              }
              onClick={toggleColorMode}
            ></Button>
          </Flex>
        </ListItem>
      </List>
    </>
  )
}

export default NavList
