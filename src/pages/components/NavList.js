import {
  FormControl,
  FormLabel,
  List,
  ListItem,
  Switch,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"
import { ReactComponent as FranceIcon } from "../../img/france.svg"
import { ReactComponent as EnglandIcon } from "../../img/united-kingdom.svg"

const NavList = ({ isOpen, onClose }) => {
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
        >
          <Link to="/contact">
            {lang === "EN" ? "Contact me" : "Me contacter"}
          </Link>
        </ListItem>
        <ListItem mx={isOpen ? "auto" : ""}>
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
    </>
  )
}

export default NavList
