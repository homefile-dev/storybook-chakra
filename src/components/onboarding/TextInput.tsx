import { FormControl, Text, Input } from '@chakra-ui/react'
import { IInput } from "../../interfaces/onboarding/Input.interface"

export const TextInput = ({
  errorMessage,
  id,
  handleChange,
  hasError,
  placeholder,
  value,
}: IInput) => {
  return (
    <FormControl isInvalid={hasError}>
      <Input
        id={id}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={handleChange}
        isInvalid={hasError}
      />
      {hasError && <Text variant="error">{errorMessage}</Text>}
    </FormControl>
  )
}

export default TextInput
