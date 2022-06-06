import { Stack, Flex, Text, Button, Image, Box } from '@chakra-ui/react'
import { t } from 'i18next'
import { useState } from 'react'
import { FileDetailI } from '../../interfaces/homeBoard/File.interface'
import { fileDetailProxy } from '../../proxies/fileDetail.proxy'
import { TextInput } from '../inputs'
import { folderHeaderProxy } from '../../proxies/folderHeader.proxy';

export const DetailsTab = ({ handleEditFileName }: FileDetailI) => {
  const { addedAt, addedBy, icon, name, _id } = fileDetailProxy
  const [fileName, setFileName] = useState(name)

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
          variant="secondaryFooter"
          maxW="fit-content"
          maxH="input.md"
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
      </Box>
    </Stack>
  )
}
