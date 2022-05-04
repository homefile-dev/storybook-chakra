import { Box, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import DetailsTab from '../../components/sendCommunication/DetailsTab'
import AddMedia from '../../components/sendCommunication/AddMedia'

export const createDocList = [
  {
    label: t('createDocument.tabs.tab1'),
    component: <DetailsTab />,
  },
  {
    label: t('createDocument.tabs.tab2'),
    component: <AddMedia />,
  },
  {
    label: t('createDocument.tabs.tab3'),
    component: (
      <Box p="base" w="full" h="100vh" bg="white">
        <Text>{t('createDocument.tabs.tab3')}</Text>
      </Box>
    ),
  },
]
