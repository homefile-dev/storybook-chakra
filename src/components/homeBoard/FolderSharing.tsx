import {
  Box,
  Button,
  Container,
  Flex,
  Wrap,
  WrapItem,
  Image,
  Stack,
  Text,
  Badge,
  Center,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlinePlus } from 'react-icons/hi'
import { BlueFolder, VioletFolder, YellowFolder } from '../../assets/images'
import { FolderSharingI } from '../../interfaces/homeBoard/FolderSharing.interface'
import { ContainerHeader } from '../headers'
import { CustomIcon } from '../icons/CustomIcon'
import SelectInput from '../inputs/SelectInput'

export const FolderSharing = ({
  folders,
  handleFolderClick,
  handleSelect,
  initialSelectItem,
  menuItems,
  selectItems,
}: FolderSharingI) => {
  return (
    <Container variant="launchpad" maxW="35rem">
      <ContainerHeader
        title={t('folderSharing.title')}
        titleIcon={YellowFolder}
        menuItems={menuItems}
        icon={<CustomIcon type={FiMoreHorizontal} size="8" />}
      />
      <Box bg="container.neutralBlue" py="2" pl="base" w="100%">
        <Flex justify="space-between" align="center">
          <SelectInput
            handleClick={(form) => handleSelect(form)}
            initailValue={initialSelectItem.name}
            items={selectItems}
          />
          <Button maxW="4rem" h="2rem" variant="leftRounded">
            <CustomIcon type={HiOutlinePlus} color="white" size="7" />
          </Button>
        </Flex>
      </Box>
      <Center>
        <Wrap py="8" spacing="base">
          {folders &&
            folders.map(({ isNew = false, subTypes, type }, index) => {
              return (
                <WrapItem position="relative" key={type + index} >
                  {isNew && (
                    <Box
                      bg="container.violet"
                      borderRadius="base"
                      w="fit-content"
                      py="0.2rem"
                      px="0.4rem"
                      zIndex="docked"
                      position="absolute"
                      right="4"
                      top="-1"
                    >
                      <Text variant="bagde">
                        {t('folderSharing.newFolder')}
                      </Text>
                    </Box>
                  )}
                  <Button
                    variant="folder"
                    px="base"
                    pb="base"
                    pt="6"
                    onClick={() => handleFolderClick({ subTypes, type })}
                  >
                    <Flex direction="column" gap="base" align="center">
                      <Image
                        src={isNew ? VioletFolder : BlueFolder}
                        w="3.7rem"
                        h="auto"
                        alt={t('folderSharing.altIcon')}
                      />
                      <Text fontSize="sm">{type}</Text>
                    </Flex>
                  </Button>
                </WrapItem>
              )
            })}
        </Wrap>
      </Center>
    </Container>
  )
}

export default FolderSharing
