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
import {
  BlueFolder,
  VioletFolder,
  YellowFolder,
  YellowFolderUnshared,
} from '../../assets/images'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { FolderSharingI } from '../../interfaces/homeBoard/FolderSharing.interface'
import TextBagde from '../badge/TextBadge'
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
  const { width } = useWindowDimensions()
  const isDesktop = width > 800
  return (
    <Container variant="launchpad" minW={isDesktop ? '60%' : 'full'}>
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
      <Wrap py="8" px="base" spacing="base">
        {folders &&
          folders.map(
            ({ isNew = false, isShared = false, subTypes, type }, index) => {
              return (
                <WrapItem position="relative" key={type + index}>
                  <Button
                    variant="folder"
                    px="base"
                    pb="base"
                    pt="6"
                    onClick={() => handleFolderClick({ isNew, subTypes, type })}
                  >
                    <Flex gap="1" position="absolute" top="-1" left="base">
                      {isNew && <TextBagde />}
                      {isShared && (
                        <TextBagde
                          bgColor="container.blue"
                          text={t('badges.shared')}
                          width="3rem"
                        />
                      )}
                    </Flex>
                    <Flex direction="column" gap="base" align="center">
                      <Image
                        src={
                          isNew
                            ? VioletFolder
                            : isShared
                            ? BlueFolder
                            : YellowFolderUnshared
                        }
                        w="3.7rem"
                        h="auto"
                        alt={t('folderSharing.altIcon')}
                      />
                      <Text fontSize="sm">{type}</Text>
                    </Flex>
                  </Button>
                </WrapItem>
              )
            }
          )}
      </Wrap>
    </Container>
  )
}

export default FolderSharing
