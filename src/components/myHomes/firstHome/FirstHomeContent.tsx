import {
  Box,
  Button,
  Container,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  FormControl,
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
import TextInput from '../../inputs/TextInput'
import useFirstHomeContent from '../../../hooks/myHomes/useFirstHomeContent'
import { isEmptyField } from '../../../helpers/Validations'
import { FooterDrawer } from '../../footers/FooterDrawer'
import { firstHomeProxy } from '../../../proxies/firstHome.proxy'
import useFirstHomeAddress from '../../../hooks/myHomes/useFirstHomeAddress'

export const FirstHomeContent = ({
  handleCreateHomeClick,
  handleSkipClick,
  userFirstName,
}: IFirstHomeContent) => {
  const {
    handleInputChange,
    handleSelectChange,
    inputs,
    isValidated,
    options,
    setIsValidated,
  } = useFirstHomeContent()

  const {
    addressInputs,
    complements,
    counter,
    handleAddComplements,
    handleAddressInputChange,
    handleDeleteComplements,
  } = useFirstHomeAddress()

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
            <Address
              isValidated={isValidated}
              complements={complements}
              counter={counter}
              handleInputChange={handleAddressInputChange}
              handleAddComplements={handleAddComplements}
              handleDeleteComplements={handleDeleteComplements}
              inputs={addressInputs}
            />
          </Box>
          <Box py="6" px="input.sm">
            <Stack spacing="input.sm">
              <SectionHeader
                title={t('myHomes.section2')}
                titleIcon={RelationshipHome}
              />
              <FormControl
                isInvalid={isValidated && isEmptyField(inputs.relationship)}
              >
                <Select
                  placeholder={t('myHomes.selectRelationship.title')}
                  onChange={handleSelectChange}
                  value={inputs.relationship}
                >
                  {options.map((option) => (
                    <option
                      key={option}
                      value={
                        t(`myHomes.selectRelationship.${option}`) as string
                      }
                    >
                      {t(`myHomes.selectRelationship.${option}`)}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <TextInput
                errorMessage={'This field ' + t('myHomes.form.required')}
                hasError={isValidated && isEmptyField(inputs.projectIdentifier)}
                id="projectName"
                placeholder={t('myHomes.form.projectName')}
                handleChange={(event) => handleInputChange(event)}
                value={inputs.projectIdentifier}
              />
            </Stack>
          </Box>
        </Container>
      </DrawerBody>
      <DrawerFooter>
        <FooterDrawer
          children={
            <Button
              variant="secondary"
              size="medium"
              onClick={() => {
                setIsValidated(true)
                if (
                  !isEmptyField(addressInputs.address) &&
                  !isEmptyField(addressInputs.zipCode) &&
                  !isEmptyField(inputs.projectIdentifier) &&
                  !isEmptyField(inputs.relationship)
                ) {
                  handleCreateHomeClick(firstHomeProxy)
                }
              }}
            >
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
