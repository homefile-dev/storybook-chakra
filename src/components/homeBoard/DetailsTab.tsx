import { Stack, Flex, Text, Button, Image, Box } from '@chakra-ui/react'
import { t } from 'i18next'
import { useState } from 'react'
import { fileDetailProxy } from '../../proxies/fileDetail.proxy'
import { TextInput } from '../inputs'

interface DetailsTab {
  handleEditDescription: (id: string) => void
  handleEditFileName: (id: string) => void
}

export const DetailsTab = ({
  handleEditDescription,
  handleEditFileName,
}: DetailsTab) => {
  const {
    addedAt,
    addedBy,
    description: descriptionProxy,
    icon,
    name,
    _id,
  } = fileDetailProxy
  const [fileName, setFileName] = useState(name)
  const [description, setDescription] = useState(descriptionProxy)

  return (
    <Stack spacing="base">
      <Flex gap="base" align="center">
        <Image src={icon} w="auto" h="3rem" alt={t('folderSharing.altIcon')} />
        <TextInput
          handleChange={(event) => {
            setFileName(event.target.value)
            fileDetailProxy.name = event.target.value
          }}
          id={_id}
          placeholder=""
          value={fileName}
        />
        <Button
          variant="tertiary"
          h="input.md"
          onClick={() => fileName && handleEditFileName(_id)}
          disabled={fileName.length === 0}
        >
          {t('createDocument.buttons.save')}
        </Button>
      </Flex>
      <Box>
        <Flex borderY="1px solid" borderColor="input.border" py="base" px="2">
          <Text variant="info" flex="0.2">
            {t('folderSharing.details.added')}
          </Text>
          <Text variant="info" flex="0.8">
            {addedAt}
          </Text>
        </Flex>
        <Flex
          borderBottom="1px solid"
          borderColor="input.border"
          py="base"
          px="2"
        >
          <Text variant="info" flex="0.2">
            {t('folderSharing.details.addedBy')}
          </Text>
          <Text variant="info" color="font.linkHover" flex="0.8">
            {addedBy}
          </Text>
        </Flex>
        <Flex
          borderBottom="1px solid"
          borderColor="input.border"
          py="base"
          pl="2"
          align="center"
        >
          <Text variant="info" flex="0.2">
            {t('folderSharing.details.description')}
          </Text>
          <Flex gap="base" flex="0.8">
            <TextInput
              handleChange={(event) => {
                setDescription(event.target.value)
                fileDetailProxy.description = event.target.value
              }}
              id={name || _id}
              placeholder={t('addMedia.description')}
              value={description || ''}
            />
            <Button
              disabled={!description}
              variant="tertiary"
              h="input.md"
              onClick={() => description && handleEditDescription(_id)}
            >
              {t('createDocument.buttons.save')}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Stack>
  )
}
