import {
  Box,
  Button,
  Container,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { AddHomeContentI } from '../../interfaces/myHomes/AddHomeContent.interface'
import SectionHeader from '../headers/SectionHeader'
import Address from './Address'
import FirstHomeHeader from './headers/FirstHomeHeader'
import RelationshipHome from '../../assets/images/relationship-home.svg'
import TextInput from '../inputs/TextInput'
import useAddHouseContent from '../../hooks/myHomes/useAddHomeContent'
import { isEmptyField } from '../../helpers/Validations'
import { FooterDrawer } from '../footers/FooterDrawer'
import { firstHomeProxy } from '../../proxies/firstHome.proxy'
import useHomeAddress from '../../hooks/myHomes/useHomeAddress'
import NewHomeHeader from '../headers/PanelHeader'
import House from '../../assets/images/house.svg'
import { useEffect } from 'react'

export const AddHomeContent = ({
  handleCreateHomeClick,
  handleSkipClick,
  isFirstHome = false,
  userFirstName = '',
  values,
}: AddHomeContentI) => {
  const {
    handleInputChange,
    isValidated,
    projectIdentifier,
    setIsValidated,
    setProjectIdentifier,
  } = useAddHouseContent()

  const {
    addressInputs,
    complements,
    counter,
    handleAddressAutoFill,
    handleAddComplements,
    handleAddressInputChange,
    handleDeleteComplements,
  } = useHomeAddress()

  useEffect(() => {
    if (values) {
      handleAddressAutoFill(values)
      setProjectIdentifier(values?.name)
    }
  }, [values])

  const { isOpen, onOpen } = useDisclosure()

  setTimeout(() => {
    onOpen()
  }, 1000)

  return (
    <DrawerContent
      bg={isFirstHome ? 'container.tertiary' : 'container.neutralBlue'}
    >
      <DrawerHeader p="0">
        {isFirstHome ? (
          <FirstHomeHeader
            firstName={userFirstName}
            handleClick={handleSkipClick}
          />
        ) : (
          <NewHomeHeader
            handleCloseButton={handleSkipClick}
            title={t('myHomes.newHome.title')}
            icon={House}
          />
        )}
      </DrawerHeader>
      <DrawerBody p="0" mb="6rem">
        <Container variant="ghost" h="full">
          <Box bg={isFirstHome ? 'white' : 'container.tertiary'} py="2">
            <Address
              complements={complements}
              counter={counter}
              handleInputChange={handleAddressInputChange}
              handleAddComplements={handleAddComplements}
              handleDeleteComplements={handleDeleteComplements}
              inputs={addressInputs}
              isDisabled={
                values?.city !== undefined && values?.state !== undefined
              }
              isValidated={isValidated}
            />
          </Box>
          <Box py="6" px="input.sm">
            <Stack spacing="input.sm">
              <SectionHeader
                title={t('myHomes.section2')}
                titleIcon={RelationshipHome}
              />
              <TextInput
                errorMessage={'This field ' + t('myHomes.form.required')}
                hasError={isValidated && isEmptyField(projectIdentifier)}
                id="projectName"
                placeholder={t('myHomes.form.projectName')}
                handleChange={(event) => handleInputChange(event)}
                value={values?.name || projectIdentifier}
              />
            </Stack>
          </Box>
        </Container>
      </DrawerBody>
      <DrawerFooter>
        <FooterDrawer
          children={
            <Button
              size="medium"
              onClick={() => {
                setIsValidated(true)
                if (
                  !isEmptyField(addressInputs.street) &&
                  !isEmptyField(addressInputs.zip) &&
                  !isEmptyField(projectIdentifier)
                ) {
                  handleCreateHomeClick(firstHomeProxy)
                }
              }}
            >
              {t('myHomes.saveBt')}
            </Button>
          }
          isOpen={isOpen}
        />
      </DrawerFooter>
    </DrawerContent>
  )
}

export default AddHomeContent
