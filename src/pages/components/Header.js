import {
  Box,
  Text,
  Heading,
  Container,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react"
import NavList from "./NavList"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"
import { useMediaQuery } from "@chakra-ui/react"

const Header = () => {
  const { lang } = useGlobalSetting()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLarger1050] = useMediaQuery("(min-width: 1050px)")

  return (
    <>
      <Box bg="blackAlpha.900">
        <Container maxW="90%">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h1" py="10" color="white">
              Rapha{lang === "EN" ? "e" : "ë"}l Pellet
            </Heading>
            {isLarger1050 ? (
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
