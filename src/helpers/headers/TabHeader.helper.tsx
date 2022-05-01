import { Box, Stack, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import DetailsTab from '../../components/sendCommunication/DetailsTab'

export const createDocList = [
  {
    label: t('createDocument.tabs.tab1'),
    component: <DetailsTab />,
  },
  {
    label: t('createDocument.tabs.tab2'),
    component: (
      <Box p="base" w="full" h="100vh" bg="white">
        <Text>{t('createDocument.tabs.tab2')}</Text>
      </Box>
    ),
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
