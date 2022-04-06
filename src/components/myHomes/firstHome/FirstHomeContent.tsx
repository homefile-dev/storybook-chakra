import {
  Box,
  Container,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Select,
  Stack,
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

export const FirstHomeContent = ({
  handleSkipClick,
  userFirstName,
}: IFirstHomeContent) => {
  const { handleInputChange, inputs, isValidated, options, setIsValidated } = useFirstHomeContent()
  return (
    <DrawerContent>
      <DrawerHeader p="0">
        <FirstHomeHeader
          firstName={userFirstName}
          handleClick={handleSkipClick}
        />
      </DrawerHeader>
      <DrawerBody p="0">
        <Container variant="tertiary" h="full">
          <Box bg="white" py="2">
            <Address />
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
    </DrawerContent>
  )
}

export default FirstHomeContent
