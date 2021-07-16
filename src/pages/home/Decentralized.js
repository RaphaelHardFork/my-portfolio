import {
  Box,
  Text,
  Button,
  Center,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"
import DecentralizedModal from "./DecentralizedModal"

const Decentralized = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { lang } = useGlobalSetting()
  const cid = useColorModeValue(
    "QmNTmf1YMbr1xSQFg9AFwXGDYc1pH5SQN6Xb4Ud51hbHQq",
    "QmNsT7NF7LKuXuWJ6PJ6h9a9dANaC6aqwcXwVYoq5ZCrF8"
  )

  return (
    <>
      <Box
        shadow="dark-lg"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        mb="80"
        bgImage={`https://ipfs.io/ipfs/${cid}`}
        py="60"
        backgroundBlendMode="difference"
      >
        <Text fontSize="3xl" mb="6" textAlign="center">
          {lang === "EN"
            ? "This is (soon) a fully decentralized website."
            : `Ceci est (bientôt) un site complètement décentralisé`}
        </Text>
        <Center>
          <Button onClick={onOpen} as="a">
            {lang === "EN" ? "Read More" : "En savoir plus"}
          </Button>
        </Center>
      </Box>
      <DecentralizedModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Decentralized
