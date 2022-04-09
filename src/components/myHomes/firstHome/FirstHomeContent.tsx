import {
  Box,
  Button,
  Container,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Select,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { IFirstHomeContent } from '../../../interfaces/myHomes/FirstHomeContent.interface'
import SectionHeader from '../../headers/SectionHeader'
import Address from '../Address'
import FirstHomeHeader from './FirstHomeHeader'
import RelationshipHome from '../../../assets/images/relationship-home.svg'
import TextInput from '../../onboarding/TextInput'
import useFirstHomeContent from '../../../hooks/myHomes/useFirstHomeContent'
import { isEmptyField } from '../../../helpers/Validations'
import { FooterDrawer } from '../../footers/FooterDrawer'
import { useEffect } from 'react'

export const FirstHomeContent = ({
  handleSkipClick,
  userFirstName,
}: IFirstHomeContent) => {
  const { handleInputChange, inputs, isValidated, options, setIsValidated } =
    useFirstHomeContent()
  const { isOpen, onOpen, onClose } = useDisclosure()

  setTimeout(() => {
    onOpen()
  }, 1000)

  return (
    <DrawerContent bg="container.tertiary">
      <DrawerHeader p="0">
        <FirstHomeHeader
          firstName={userFirstName}
          handleClick={handleSkipClick}
        />
      </DrawerHeader>
      <DrawerBody p="0" mb="6rem">
        <Container variant="ghost" h="full">
          <Box bg="white" py="2">
            <Address isValidated={isValidated} />
          </Box>
          <Box py="6" px="input.sm">
            <Stack spacing="input.sm">
              <SectionHeader
                title={t('myHomes.section2')}
                titleIcon={RelationshipHome}
              />
              <Select placeholder={t('myHomes.selectRelationship.title')}>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {t(`myHomes.selectRelationship.${option}`)}
                  </option>
                ))}
              </Select>
              <TextInput
                errorMessage={'This field ' + t('myHomes.form.required')}
                hasError={isValidated && isEmptyField(inputs.projectName)}
                id="projectName"
                placeholder={t('myHomes.form.projectName')}
                handleChange={(event) => handleInputChange(event)}
                value={inputs.projectName}
              />
            </Stack>
          </Box>
        </Container>
      </DrawerBody>
      <DrawerFooter>
        <FooterDrawer
          children={
            <Button variant="secondary" size="medium">
              {t('myHomes.addHome')}
            </Button>
          }
          isOpen={isOpen}
          onClose={onClose}
        />
      </DrawerFooter>
    </DrawerContent>
  )
}

export default FirstHomeContent
