import { Box, Container, IconButton, InputGroup, Stack } from '@chakra-ui/react'
import SectionHeader from '../headers/SectionHeader'
import HomeAddres from '../../assets/images/home-address.svg'
import TextInput from '../onboarding/TextInput'
import { t } from 'i18next'
import { isEmptyField } from '../../helpers/Validations'
import useAddress from '../../hooks/myHomes/useAddress'
import { AddIcon } from '@chakra-ui/icons'
import { IAddress } from '../../interfaces/myHomes/Address.interface'

export const Address = () => {
  const {
    complements,
    counter,
    handleInputChange,
    handleAddComplements,
    inputs,
    isValidated,
    setIsValidated,
  } = useAddress()
  return (
    <Container variant="ghost" p="4">
      <Stack spacing="input.sm">
        <SectionHeader
          title={t('myHomes.section1')}
          titleIcon={HomeAddres}
        />
        <InputGroup gap="input.sm">
          <Box w="12rem">
            <TextInput
              errorMessage={
                t('myHomes.form.zip') + ' ' + t('myHomes.form.required')
              }
              hasError={isValidated && isEmptyField(inputs.zipCode)}
              id="zipCode"
              placeholder={t('myHomes.form.zip')}
              value={inputs.zipCode}
              handleChange={(event) => handleInputChange(event)}
            />
          </Box>
          <TextInput
            errorMessage={
              t('myHomes.form.address') + ' ' + t('myHomes.form.required')
            }
            hasError={isValidated && isEmptyField(inputs.address)}
            id="address"
            placeholder={t('myHomes.form.address')}
            value={inputs.address}
            handleChange={(event) => handleInputChange(event)}
          />
          <IconButton
            aria-label="Add new address line"
            variant="iconOutlined"
            icon={<AddIcon w="5" h="5" />}
            onClick={() => handleAddComplements()}
            isDisabled={counter === 2}
          />
        </InputGroup>
        {complements.length > 0 &&
          complements.map((complement, index) => {
            return (
              <InputGroup key={complement}>
                <TextInput
                  errorMessage={
                    t('myHomes.form.complement') +
                    ' ' +
                    t('myHomes.form.required')
                  }
                  hasError={
                    isValidated &&
                    isEmptyField(inputs[complement as keyof IAddress])
                  }
                  id={complement}
                  placeholder={`${t('myHomes.form.complement')} ${index + 1}`}
                  value={inputs[complement as keyof IAddress]}
                  handleChange={(event) => handleInputChange(event)}
                />
              </InputGroup>
            )
          })}
        <InputGroup gap="input.sm">
          <TextInput
            errorMessage={
              t('myHomes.form.city') + ' ' + t('myHomes.form.required')
            }
            hasError={isValidated && isEmptyField(inputs.city)}
            id="city"
            placeholder={t('myHomes.form.city')}
            value={inputs.city}
            handleChange={(event) => handleInputChange(event)}
          />
          <TextInput
            errorMessage={
              t('myHomes.form.state') + ' ' + t('myHomes.form.required')
            }
            hasError={isValidated && isEmptyField(inputs.state)}
            id="state"
            placeholder={t('myHomes.form.state')}
            value={inputs.state}
            handleChange={(event) => handleInputChange(event)}
          />
        </InputGroup>
      </Stack>
    </Container>
  )
}

export default Address
