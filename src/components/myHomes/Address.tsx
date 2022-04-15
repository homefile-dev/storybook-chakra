import {
  Center,
  Container,
  IconButton,
  InputGroup,
  Stack,
} from '@chakra-ui/react'
import SectionHeader from '../headers/SectionHeader'
import HomeAddres from '../../assets/images/home-address.svg'
import TextInput from '../inputs/TextInput'
import { t } from 'i18next'
import { isEmptyField } from '../../helpers/Validations'
import { AddIcon } from '@chakra-ui/icons'
import { AiOutlineMinus } from 'react-icons/ai'
import {
  IAddress,
  IAddressForm,
} from '../../interfaces/myHomes/Address.interface'
import { CustomIcon } from '../icons/CustomIcon'

export const Address = ({
  complements,
  counter,
  handleInputChange,
  handleAddComplements,
  handleDeleteComplements,
  inputs,
  isDisabled = true,
  isValidated,
  leftElement = null,
  title = t('myHomes.section1'),
  titleIcon = HomeAddres,
}: IAddress) => {
  return (
    <Container variant="ghost" p="4">
      <Stack spacing="input.sm">
        <SectionHeader
          title={title}
          titleIcon={titleIcon}
          leftElement={leftElement}
        />
        <InputGroup gap="input.sm">
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
            maxH="input.md"
          />
        </InputGroup>
        {complements.length > 0 &&
          complements.map((complement, index) => {
            return (
              <InputGroup key={complement} gap="input.sm">
                <TextInput
                  id={complement}
                  placeholder={`${t('myHomes.form.address')} ${index + 1}`}
                  value={inputs[complement as keyof IAddressForm]}
                  handleChange={(event) => handleInputChange(event)}
                />
                <Center w="3.5rem">
                  <IconButton
                    w="2rem"
                    minH="2rem"
                    aria-label="Delete address line"
                    variant="iconOutlined"
                    icon={<CustomIcon type={AiOutlineMinus} />}
                    onClick={() => handleDeleteComplements(complement)}
                  />
                </Center>
              </InputGroup>
            )
          })}
        <InputGroup gap="input.sm">
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
          <TextInput
            id="city"
            placeholder={t('myHomes.form.city')}
            value={inputs.city}
            handleChange={(event) => handleInputChange(event)}
            isDisabled={isDisabled}
          />
          <TextInput
            id="state"
            placeholder={t('myHomes.form.state')}
            value={inputs.state}
            handleChange={(event) => handleInputChange(event)}
            isDisabled={isDisabled}
          />
        </InputGroup>
      </Stack>
    </Container>
  )
}

export default Address
