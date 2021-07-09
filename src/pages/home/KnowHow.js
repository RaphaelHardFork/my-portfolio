import {
  Box,
  Text,
  Heading,
  Flex,
  Badge,
  Container,
  Button,
  Center,
} from "@chakra-ui/react"

import { Link } from "react-router-dom"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"

const KnowHow = () => {
  const { lang } = useGlobalSetting()

  const boxes = [
    {
      title: lang === "EN" ? "Languages" : "Langages",
      content: ["HTML", "CSS", "JavaScript", "Solidity"],
    },
    {
      title: "Frameworks",
      content: ["React.js", "Bootstrap", "Chakra-UI", "Hardhat"],
    },
    {
      title: "Blockchain",
      content: ["Web3.0", "Ethereum", "MetaMask", "Ethers.js", "ERC20", "ICO"],
    },
  ]

  return (
    <Box shadow="dark-lg" mb="80" bg="black" py="20">
      <Container maxW="container.xl">
        <Heading fontFamily="Carter One,cursive" py="6" color="white" as="h1">
          {lang === "EN" ? "What I can do" : "Ce que je sais faire :"}
        </Heading>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={{ base: "center", lg: "space-between" }}
          alignItems="center"
          color="white"
        >
          {boxes.map((elem) => {
            return (
              <Box
                key={elem.title}
                mb="4"
                me="4"
                maxW="500"
                borderRadius="10"
                bg="gray"
              >
                <Heading
                  borderTopRadius="10"
                  bg="gray.400"
                  py="3"
                  textAlign="center"
                >
                  {elem.title}
                </Heading>
                <Box p="6">
                  {elem.content.map((el) => {
                    return (
                      <Badge
                        key={el}
                        fontSize="xl"
                        borderRadius="20"
                        m="1"
                        p="2"
                      >
                        {el}
                      </Badge>
                    )
                  })}
                </Box>
              </Box>
            )
          })}
        </Flex>
        <Center>
          <Link to="/realisations">
            <Button colorScheme="orange" mt="6">
              {lang === "EN" ? "See my realisations" : "Voir mes réalisations"}
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  )
}

export default KnowHow
