import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { ITabsHeader } from '../../interfaces/headers/TabsHeader.interface'

export const TabsHeader = ({ tabList }: ITabsHeader) => {
  return (
    <Tabs variant="unstyled">
      <TabList px={4} bg="white">
        {tabList?.map(({ label }) => (
          <Tab
            key={label}
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="md"
            fontFamily="secondary"
            color="font.link"
            _hover={{ cursor: 'pointer' }}
            _focus={{ outline: 'none' }}
            _selected={{
              color: 'font.linkHover',
              borderBottom: '3px solid',
            }}
          >
            {label}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabList?.map(({ label, component }) => (
          <TabPanel key={label}>{component}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default TabsHeader
