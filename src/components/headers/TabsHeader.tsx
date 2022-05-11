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
            fontWeight="medium"
            fontSize="sm"
            fontFamily="primary"
            color="font.linkHover"
            _hover={{ cursor: 'pointer' }}
            _focus={{ outline: 'none' }}
            _selected={{
              color: 'font.linkSelected',
              borderBottom: '3px solid',
            }}
          >
            {label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabList?.map(({ label, component }) => (
          <TabPanel p="base" key={label}>
            {component}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default TabsHeader
