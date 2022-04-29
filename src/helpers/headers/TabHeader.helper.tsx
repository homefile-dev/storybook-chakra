import { Box, Text } from '@chakra-ui/react'

export const createDocList = [
  {
    label: 'Detail',
    component: (
      <Box p="base" w="full" h="100vh" bg="white">
        <Text>Detail</Text>
      </Box>
    ),
  },
  {
    label: 'Images & media',
    component: (
      <Box p="base" w="full" h="100vh" bg="white">
        <Text>Images and media</Text>
      </Box>
    ),
  },
  {
    label: 'Recipients',
    component: (
      <Box p="base" w="full" h="100vh" bg="white">
        <Text>Recipients</Text>
      </Box>
    ),
  },
  {
    label: 'Last report',
    component: (
      <Box p="base" w="full" h="100vh" bg="white">
        <Text>Last report</Text>
      </Box>
    ),
  },
]
