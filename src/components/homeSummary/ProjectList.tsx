import { Box, Text, Container, Flex, Image } from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import YellowFolder from '../../assets/images/yellow-folder.svg'
import { IProjectList } from '../../interfaces/homeSummary/ProjectList.interface'
import { CustomIcon } from '../icons/CustomIcon'
import { IconMenu } from '../launchpad'

export const ProjectList = ({
  handleProjectClick,
  key = '',
  menuItems,
  title,
}: IProjectList) => {
  return (
    <Container variant="list" p="4" key={key}>
      <Flex justify="space-between">
        <Box as="button" onClick={handleProjectClick}>
          <Flex alignItems="center" gap="3">
            <Image
              src={YellowFolder}
              alt={`${title} ${t('homeSummary.altFolderIcon')}`}
              h="2rem"
              w="auto"
            />
            <Text>{title}</Text>
          </Flex>
        </Box>
        <IconMenu
          icon={<CustomIcon type={FiMoreHorizontal} size="8" />}
          menuItems={menuItems}
        />
      </Flex>
    </Container>
  )
}

export default ProjectList
