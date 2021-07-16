import {
  Box,
  Heading,
  Container,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react"
import NavList from "./NavList"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"
import { useMediaQuery } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Header = () => {
  const { lang } = useGlobalSetting()
  const boxBg = useColorModeValue("white", "black")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLarger1100] = useMediaQuery("(min-width: 1100px)")

  return (
    <>
      <Box bg={boxBg}>
        <Container maxW="90%">
          <Flex justifyContent="space-between" alignItems="center">
            <Link to="/">
              <Heading textShadow="1px 1px #01fadc" as="h1" py="10">
                Rapha{lang === "EN" ? "e" : "ë"}l Pellet
              </Heading>
            </Link>
            {isLarger1100 ? (
              <NavList />
            ) : (
              <>
                <Button onClick={onOpen}>Menu</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader fontSize="2xl" textAlign="center">
                      Navigation
                    </ModalHeader>
                    <ModalBody py="10">
                      <NavList onClose={onClose} isOpen={isOpen} />
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </>
            )}
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default Header
