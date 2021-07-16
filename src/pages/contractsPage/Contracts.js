import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useColorModeValue,
} from "@chakra-ui/react"
import Explanation from "./Explanation"

const Contracts = () => {
  const bgBox = useColorModeValue("white", "black")
  const bgTabs = useColorModeValue("gray.300", "gray.700")
  return (
    <Box minH="90vh" bg={bgBox} p="6">
      <Tabs
        bg={bgTabs}
        borderRadius="10"
        colorScheme="purple"
        isFitted
        variant="enclosed"
      >
        <TabList mb="1em">
          <Tab>Explanation of Smart Contracts</Tab>
          <Tab>Counter</Tab>
          <Tab>ERC20</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Explanation />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Contracts
