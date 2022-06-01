import {
  WrapItem,
  Button,
  Flex,
  Image,
  Text,
  Box,
  Progress,
  Center,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BeatLoader } from 'react-spinners'
import { PdfIcon, DocIcon, ImgIcon, VideoIcon } from '../../assets/images'
import { FileI } from '../../interfaces/homeBoard/FolderDetail.interface'
import { TextBagde } from '../badge/TextBadge'
import { CustomIcon } from '../icons/CustomIcon'
import { IconMenu } from '../launchpad'

export const FolderFile = ({
  handleClick,
  isNew = false,
  isShared = false,
  menu,
  title,
  type,
  updatedAt,
  uploaded,
  uploading,
  _id,
}: FileI) => {
  const fileTypes = {
    pdf: PdfIcon,
    doc: DocIcon,
    docx: DocIcon,
    jpeg: ImgIcon,
    jpg: ImgIcon,
    png: ImgIcon,
    video: VideoIcon,
  }

  const titleFormatted = title.split('.')[0]

  return (
    <WrapItem maxW="7rem" position="relative">
      {menu && (
        <Box position="absolute" top="-0.5rem" right="base" zIndex="docked">
          <IconMenu
            disabled={uploading}
            icon={<CustomIcon type={FiMoreHorizontal} size="7" />}
            menuItems={menu}
            itemForm={{
              _id,
              name: title || '',
            }}
          />
        </Box>
      )}
      <Button
        variant="folder"
        px="base"
        pb="base"
        pt="6"
        onClick={() => handleClick(_id)}
        disabled={uploading && !uploaded}
      >
        <Flex direction="column" gap="base" align="center">
          <Flex gap="1" position="absolute" top="4" left="base">
            {isNew && <TextBagde />}
            {isShared && (
              <TextBagde
                bgColor="container.blue"
                text={t('badges.shared')}
                width="3rem"
              />
            )}
          </Flex>
          <Image
            src={fileTypes[type as keyof typeof fileTypes] || DocIcon}
            w="auto"
            h="4rem"
            alt={t('folderSharing.altIcon')}
            transition="all 0.2s ease-in-out"
          />
          {uploading && !uploaded ? (
            <Center mt="-2">
              <BeatLoader color="gray" size={6} />
            </Center>
          ) : (
            <>
              <Text isTruncated maxWidth="5rem" fontSize="sm">
                {titleFormatted}
              </Text>
              <Text variant="date" mt="-0.8rem">
                {updatedAt}
              </Text>
            </>
          )}
        </Flex>
      </Button>
    </WrapItem>
  )
}
