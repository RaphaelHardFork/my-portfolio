import { Box, Flex, Heading, Text, Container } from "@chakra-ui/react"

const Realisations = () => {
  const realisations = [
    { title: "Gradients", img: "", link: "" },
    { title: "Gradients", img: "", link: "" },
    { title: "Gradients", img: "", link: "" },
  ]
  return (
    <Box>
      <Container>
        <Heading>My réalisations:</Heading>
        <Box>
          <Heading>Title</Heading>
        </Box>
      </Container>
    </Box>
  )
}

export default Realisations
