import { Stack, Flex, Text, Button, Image, Box } from '@chakra-ui/react'
import { t } from 'i18next'
import { useState } from 'react'
import { fileDetailProxy } from '../../proxies/fileDetail.proxy'
import { TextInput } from '../inputs'
import { folderHeaderProxy } from '../../proxies/folderHeader.proxy'

interface DetailsTab {
  handleEditFileName: (id: string) => void
}

export const DetailsTab = ({ handleEditFileName }: DetailsTab) => {
  const { addedAt, addedBy, description: descriptionProxy, icon, name, _id } = fileDetailProxy
  const [fileName, setFileName] = useState(name)
  const [description, setDescription] = useState(descriptionProxy)
  const [editing, setEditing] = useState(false)

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
          onClick={() => {
            handleEditFileName(_id)
            folderHeaderProxy.handleCloseButton()
          }}
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
          px="2"
        >
          <Text variant="info" flex="0.2">
            {t('folderSharing.details.description')}
          </Text>
          <Flex w="100%" gap="base" flex="0.8">
            {editing ? (
              <TextInput
                handleChange={(event) => {
                  setDescription(event.target.value)
                  fileDetailProxy.description = event.target.value
                }}
                id={name || _id}
                placeholder={t('addMedia.description')}
                value={description || ''}
              />
            ) : (
              <Text w="100%" variant="info">
                {description}
              </Text>
            )}
            <Button
              disabled={!description}
              variant="tertiary"
              h="input.md"
              onClick={() => setEditing(!editing)}
            >
              {editing ? 'Add' : 'Edit'}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Stack>
  )
}
