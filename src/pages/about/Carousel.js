import { Box, Image, Center, Button } from "@chakra-ui/react"
import { useState } from "react"
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons"

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

  function handleTurnPhoto(e) {
    console.log(e.target.id)
    if (e.target.id === "plus") {
      setImg((a) => (a + 1 + imgList.length) % imgList.length)
    } else if (e.target.id === "minus") {
      setImg((a) => (a - 1 + imgList.length) % imgList.length)
    }
  }
  //() => setImg((a) => (a + 1) % imgList.length)

  return (
    <>
      <Box>
        <Center>
          <Button
            id="minus"
            onClick={handleTurnPhoto}
            left="20"
            position="relative"
          >
            <ChevronLeftIcon id="minus" />
          </Button>
          <Image
            width="auto"
            maxH="70vh"
            borderRadius="5"
            borderWidth="0.75rem"
            borderStyle="solid"
            borderColor="black"
            src={`https://ipfs.io/ipfs/${imgList[img]}`}
            fallbackSrc="https://via.placeholder.com/3000?Text=Loading..."
          ></Image>
          <Button
            id="plus"
            onClick={handleTurnPhoto}
            right="20"
            position="relative"
          >
            <ChevronRightIcon id="plus" />
          </Button>
        </Center>
      </Box>
    </>
  )
}

export default Carousel
