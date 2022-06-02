import {
  Box,
  Container,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  Text,
  Image,
  Stack,
  Center,
  SimpleGrid,
  IconButton,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { ProgressReport } from '../../assets/images'
import { DocumentPreviewI } from '../../interfaces/sendCommunication/DocumentPreview.interface'
import { FooterButtons, FooterDrawer } from '../footers'
import { PanelHeader } from '../headers'
import { CustomIcon } from '../icons/CustomIcon'
import { FaFacebookSquare } from 'react-icons/fa'
import { BeatLoader } from 'react-spinners'
import BackCircleButton from '../buttons/BackCircleButton'
const { REACT_APP_STORAGE_URL: storageUrl } = process.env

export const DocumentPreview = ({
  companyInfo,
  date,
  document,
  form,
  handleClose,
  handleSend,
  home,
  images,
  loading = false,
  userInfo,
}: DocumentPreviewI) => {
  const imageSize = '90px'
  const ButtonsFooter = {
    send: {
      buttonStyle: 'primaryFooter',
      label: t('createDocument.buttons.send'),
      onClick: handleSend,
    },
    cancel: {
      buttonStyle: 'secondaryFooter',
      label: t('createDocument.buttons.cancel'),
      onClick: handleClose,
    },
  }
  return (
    <DrawerContent bg="container.tertiary">
      <DrawerHeader p="0">
        <PanelHeader
          handleCloseButton={handleClose}
          icon={ProgressReport}
          title={t('createDocument.preview.title')}
        />
      </DrawerHeader>
      <DrawerBody p="base">
        {loading ? (
          <Center h="full" pb="8rem">
            <BeatLoader color="gray" size={8} />
          </Center>
        ) : (
          <Stack spacing="base" mb="8rem">
            <BackCircleButton handleClick={handleClose} />
            <Container minW="full" p="base">
              <Stack spacing="8">
                <Flex justify="space-between" align="center">
                  <Box>
                    {document && <Text fontWeight="semibold">{document}</Text>}
                    {home && <Text fontSize="sm">{home}</Text>}
                  </Box>
                  {companyInfo?.logoUrl && (
                    <Image
                      src={companyInfo?.logoUrl}
                      maxH="80px"
                      alt={companyInfo?.name || ''}
                    />
                  )}
                </Flex>
                {date && (
                  <Center h="2.5rem" w="full" bg="container.green">
                    <Text color="white" fontWeight="semibold">
                      {date}
                    </Text>
                  </Center>
                )}
                {form?.map(
                  (item) =>
                    (item.type === 'string' || 'text') && (
                      <Stack spacing="1" key={item.name}>
                        <Text fontWeight="semibold">{item.name}</Text>
                        <Text variant="info" lineHeight="1.2rem">
                          {item.value}
                        </Text>
                      </Stack>
                    )
                )}
                <SimpleGrid minChildWidth={imageSize} spacing="base">
                  {images?.map(
                    ({ bucketName, description, extension, fileName, _id }) => (
                      <Image
                        src={
                          bucketName
                            ? `${storageUrl}/${bucketName}/${fileName}.${extension}`
                            : ''
                        }
                        alt={description}
                        key={_id}
                        minH={imageSize}
                        maxH={imageSize}
                        objectFit="cover"
                        w="full"
                      />
                    )
                  )}
                </SimpleGrid>
                <Stack spacing="base">
                  <Text variant="info">
                    {t('createDocument.preview.message')}
                  </Text>
                  {(userInfo?.email || userInfo?.phone) && (
                    <Text variant="info">
                      {t('createDocument.preview.message2')}
                    </Text>
                  )}
                </Stack>
                <Box>
                  <Text variant="info">{userInfo?.name}</Text>
                  <Text variant="info">{userInfo?.phone}</Text>
                  <Text variant="info" mb="4">
                    {userInfo?.email}
                  </Text>
                </Box>
              </Stack>
            </Container>
            <Flex
              direction={['column', 'row']}
              gap="base"
              justifyContent="center"
              alignItems="center"
            >
              <Text variant="label">{companyInfo?.name}</Text>
              <Text variant="label">{companyInfo?.address}</Text>
              <Text variant="label">{companyInfo?.phone}</Text>
              <Text variant="label">
                <a target="_blank" href={companyInfo?.website}>
                  {companyInfo?.website}
                </a>
              </Text>
            </Flex>
            {companyInfo?.facebook && (
              <Center>
                <IconButton
                  variant="menuIcon"
                  aria-label="Facebook"
                  maxW="fit-content"
                  onClick={() => window.open(companyInfo?.facebook, '_blank')}
                  icon={<CustomIcon type={FaFacebookSquare} size="6" />}
                />
              </Center>
            )}
          </Stack>
        )}
      </DrawerBody>
      <DrawerFooter p="0" zIndex="dropdown">
        <FooterDrawer
          children={
            <FooterButtons
              button1={ButtonsFooter.send}
              button3={ButtonsFooter.cancel}
            />
          }
          isOpen
        />
      </DrawerFooter>
    </DrawerContent>
  )
}

export default DocumentPreview
