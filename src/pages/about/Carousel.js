import {
  Box,
  Heading,
  Text,
  Container,
  Image,
  Center,
  Button,
} from "@chakra-ui/react"
import { useState } from "react"
import { ChevronRightIcon, ChevronLeftIcon, MinusIcon } from "@chakra-ui/icons"

const Carousel = () => {
  const imgList = [
    "QmaZ2aKviUZ9fYi1jDjnaybf5zJqZ8KQkDBfs53rPH4mLx",
    "QmYMFvYnT8Wd67m9MMYmridth57jPj6AGnkj1MoWLDZpZY",
    "QmUnHpjH9h1fD7ZaX5kcf8J8UYt9LD8EKUuZnVjeSgyPo7",
    "QmZ5YLvsNvzYFtgE87RpjuKGrjhCNBf8kePCWdZeYFNaWr",
    "QmNNtie2MdAKMbhPkCMZghJhYtSP25VLo6oMn3nKZE4DEi",
    "QmQESFTL4CvxprDw1pBYC6i1aNVnsRzaQQPyvfiw3TP2eT",
    "QmfT7LiXiKTA3xoPcTGg69JAMfSsV1Dn1CVjeLScSHzKHg",
    "QmTZ7LoCYzYb2W5B1pWoYg5ZgFTsVjRxKFVRW4yoDgRuuu",
    "QmZQyjubYcMDeNADBvYjbB5cDR4PbuLRwjy5URHgqrnNXp",
    "Qmdqz5y61fNZ5ZK7m9CaY5jNNQPPwXH5UbLWEi8SCCWJKm",
    "QmSqMuaaTSiFH3nLLW1SA3EnS2wNi7bR5oydVAofg3dBGM",
    "QmWyWv5ZEB9EoEAtwQmz9FLxzpXkvxuBCdcKy9nctg14Td",
    "QmNw8fri1wKssTn8vBeKwPsPMfaoYDUiQJMLLkxpKNPjui",
  ]
  const [img, setImg] = useState(Math.round(Math.random() * imgList.length))

  const debug = () => {
    console.log(img)
    console.log(imgList[img])
    console.log(imgList.length)
  }

  function handleTurnPhoto(e) {
    console.log(e)
    console.log(e.target.id)
    if (e.target.value === 0) {
      setImg((a) => a - 1)
    } else {
      setImg((a) => a + 1)
    }
    //() => setImg((a) => (a + 1) % imgList.length)
  }
  return (
    <>
      <Box>
        <Center>
          <Button onClick={handleTurnPhoto} left="20" position="relative">
            <ChevronLeftIcon id="plus" />
          </Button>
          <Image
            width="auto"
            maxH="70vh"
            borderRadius="5"
            borderWidth="0.75rem"
            borderStyle="solid"
            borderColor="black"
            src={`https://ipfs.io/ipfs/${imgList[img]}`}
          ></Image>
          <Button onClick={handleTurnPhoto} right="20" position="relative">
            <ChevronRightIcon id="minus" />
          </Button>
          <Button onClick={debug}>
            <MinusIcon />
          </Button>
        </Center>
      </Box>
    </>
  )
}

export default Carousel
