import {
  Box,
  Flex,
  Heading,
  Text,
  Container,
  Badge,
  Grid,
  Link,
  Center,
  useColorModeValue,
} from "@chakra-ui/react"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"
import { realisationsList } from "./realisationsList"
import { ReactComponent as GithubIcon } from "../../img/github.svg"
import { ReactComponent as GithubIcon2 } from "../../img/signe-github.svg"

const Realisations = () => {
  const { lang } = useGlobalSetting()
  const bgBox = useColorModeValue("whiteAlpha.400", "blackAlpha.400")

  return (
    <Box bg={bgBox} minH="100vh">
      <Container maxW="container.xl">
        <Heading py="6">
          {lang === "EN" ? "My realisations" : "Mes réalisations"}
        </Heading>
        <Grid gap="4" templateColumns="repeat(3,1fr)">
          {realisationsList.map((elem) => {
            return (
              <Box key={elem.title} borderRadius="20" pb="6" bg="darkgray">
                <Heading borderTopRadius="20" p="6" bg="brown">
                  {elem.title}
                </Heading>
                <Container maxW="container.xl">
                  <Badge p="2" borderRadius="10" fontSize="lg" mt="2">
                    {elem.creation.map((el) => {
                      return (
                        <Text key={el} me="2" as="b">
                          {el}
                        </Text>
                      )
                    })}
                  </Badge>
                  <Text py="2">{elem.description}</Text>
                  {elem.team.length !== 0 ? (
                    <>
                      <Text>Contributors:</Text>
                      <Flex mb="4">
                        {elem.team.map((link) => {
                          return (
                            <Link
                              key={link}
                              _hover={{ fill: "brown" }}
                              me="4"
                              href={link}
                            >
                              <GithubIcon height="2rem" width="2rem" />
                            </Link>
                          )
                        })}
                      </Flex>
                    </>
                  ) : (
                    ""
                  )}

                  <Text mb="4">
                    Website:{" "}
                    {elem.website ? (
                      <Link color="brown">{elem.website}</Link>
                    ) : (
                      "Not deployed yet"
                    )}
                  </Text>
                  <Center>
                    <Link _hover={{ fill: "brown" }} href={elem.repo}>
                      <GithubIcon2 width="3rem" height="3rem" />
                    </Link>
                  </Center>
                </Container>
              </Box>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default Realisations
