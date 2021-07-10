import { Box, Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react"
import Explanation from "./Explanation"

const Contracts = () => {
  return (
    <Box bg="black" p="6">
      <Tabs
        bg="gray.800"
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
