import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  FormControl,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IInput } from '../../interfaces/inputs/Input.interface'

export const PasswordInput = ({
  errorMessage,
  id,
  handleChange,
  hasError,
  placeholder,
  value = "",
}: IInput) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <FormControl isInvalid={hasError}>
      <InputGroup>
        <Input
          id={id}
          placeholder={placeholder}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={handleChange}
        />
        <InputRightElement width="3rem">
          <IconButton
            variant="icon"
            aria-label="Enter password"
            icon={show ? <ViewIcon /> : <ViewOffIcon />}
            onClick={handleClick}
          >
            {show ? 'Hide' : 'Show'}
          </IconButton>
        </InputRightElement>
      </InputGroup>
      {hasError && <Text variant="error">{errorMessage}</Text>}
    </FormControl>
  )
}

export default PasswordInput
