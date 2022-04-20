import {
  Box,
  Text,
  Container,
  Flex,
  Image,
  Stack,
  Badge,
} from '@chakra-ui/react'
import { t } from 'i18next'
import ProgressReport from '../../assets/images/progress-report.svg'
import { IUpdateList } from '../../interfaces/homeSummary/UpdateList.interface'

export const UpdateList = ({
  documentType = '',
  isOpened = false,
  handleProjectClick,
  projectName = '',
  updatedAt = '',
}: IUpdateList) => {
  return (
    <Container variant="list" p="4">
      <Box as="button" onClick={handleProjectClick} w="full">
        <Flex justify="space-between">
          <Flex alignItems="center" gap="3">
            <Box
              color={isOpened ? 'container.neutral' : 'white'}
              border="1px"
              borderColor={isOpened ? 'container.neutral' : 'warning'}
              bg={isOpened ? 'transparent' : 'container.warning'}
              w="5rem"
              py="1"
              borderRadius=".25rem"
              mr="4"
              fontSize=".7rem"
            >
              <Text
                variant="report"
                textTransform="uppercase"
                fontWeight="bold"
              >
                {isOpened
                  ? t('homeSummary.report.opened')
                  : t('homeSummary.report.unopened')}
              </Text>
            </Box>
            <Image
              src={ProgressReport}
              alt={`${projectName} ${t('homeSummary.altFolderIcon')}`}
              h="2.5rem"
              w="auto"
            />
            <Stack spacing="0">
              <Text variant="report" textAlign="left" textTransform="uppercase">
                {projectName}
              </Text>
              <Text>{documentType}</Text>
            </Stack>
          </Flex>
          <Text variant="report">{updatedAt}</Text>
        </Flex>
      </Box>
    </Container>
  )
}

export default UpdateList
