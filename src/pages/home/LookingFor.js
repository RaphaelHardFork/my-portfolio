import {
  Box,
  Heading,
  Container,
  Text,
  Link,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react"
import { useGlobalSetting } from "../../hooks/useGlobalSetting"

const LookingFor = () => {
  const { lang } = useGlobalSetting()
  const bgBox = useColorModeValue("white", "black")

  return (
    <Box shadow="dark-lg" py="20" mb="80" bg={bgBox}>
      <Container maxW="container.xl">
        <Heading fontFamily="Carter One,cursive" py="6" as="h1">
          {lang === "EN"
            ? "What I'm looking for:"
            : "Qu'est ce que je recherche :"}
        </Heading>
        {lang === "EN" ? (
          <>
            <Text>
              I'm currently looking for perfectionning my knowlegde and skills
              in Solidity, ReactJS (in their application to the Web3) and as
              well in Rust (despite my low level).
            </Text>
            <Text>
              So I'm looking for a job position in a company which is close the
              blockchain ecosystem. Indeed, my goal is to enrich my knowledge
              about this technology, to be more accurate, I'm looking for
              companies that work on Solidity but have a broader vision
              integrating, for exemple, the Polkadot environment (therefore a
              possible use of MoonBeam to migrate current contracts on
              Polkadot). And why not to be introduced to Rust and Substrate to
              develop blockchain. I want to integrate this type of companies as
              well as to work on the front-end part if it's work with ReactJS.
            </Text>

            <Text>
              Secondly, I'm looking for companies converting Web2 to Web3
              through the use of blockchain but also IPFS or other technology
              related to decentralization
            </Text>
          </>
        ) : (
          <>
            <Text>
              Je cherche à parfaire mes connaissances en Solidity, Rust et React
              JS (notamment appliqué au Web3 et aux Dapp).{" "}
            </Text>
            <Text>
              Je recherche un emploi dans une entreprise qui touche à la
              blockchain en premier lieu. En effet, mon objectif est d’enrichir
              mes connaissances sur cette technologie, pour être plus précis je
              recherche des entreprises qui travaille sur Solidity mais qui ont
              une vision plus large intégrant par exemple l’environnement
              Polkadot (donc une possible utilisation de MoonBeam pour migrer
              des contrats actuel sur Polkadot). Et pourquoi pas être initié à
              Rust & Substrate pour développer des blockchain. Je recherche à
              intégrer ce type d’entreprise pour travailler sur l’aspect smart
              contract/ blockchain tout autant que je cherche à travailler sur
              l’aspect Web3.0 par le biais d’interface front-end réaliser avec
              React JS.
            </Text>
            <Text>
              Dans un deuxième temps je recherche des entreprises en conversion
              du Web2 vers le Web3 par l’utilisation de la blockchain mais aussi
              de l’IPFS ou autre technologie en relation avec la
              décentralisation.
            </Text>
          </>
        )}
        {lang === "EN" ? (
          <Heading mb="4" as="h3">
            Explications & links
          </Heading>
        ) : (
          <Heading mb="4" as="h3">
            Explications & liens
          </Heading>
        )}
        <Flex fontSize="1.2rem" fontWeight="bold" flexDirection="column">
          <Link
            isExternal
            href="https://www.freecodecamp.org/news/what-is-web3/"
          >
            Web3
          </Link>
          <Link isExternal href="https://decrypt.co/resources/dapps">
            Dapp
          </Link>
          <Link isExternal href="https://ipfs.io/">
            IPFS
          </Link>

          <Link isExternal href="https://soliditylang.org/">
            Solidity
          </Link>
          <Link isExternal href="https://polkadot.network/">
            Polkadot
          </Link>
          <Link isExternal href="https://substrate.dev/">
            Substrate
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default LookingFor
