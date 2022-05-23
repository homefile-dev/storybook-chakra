import { FormControl, Text, Input } from '@chakra-ui/react'
import { InputI } from '../../interfaces/inputs/Input.interface'

export const TextInput = ({
  errorMessage,
  id,
  isDisabled,
  handleChange,
  hasError,
  placeholder,
  value = '',
}: InputI) => {
  return (
    <FormControl isInvalid={hasError}>
      <Input
        id={id}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={handleChange}
        isInvalid={hasError}
        isDisabled={isDisabled}
      />
      {hasError && <Text variant="error">{errorMessage}</Text>}
    </FormControl>
  )
}

export default TextInput
