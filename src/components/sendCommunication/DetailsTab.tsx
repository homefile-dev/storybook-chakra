import { Box, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import {
  templateForm,
  TemplateFields,
} from '../../helpers/sendCommunication/PublicTemplate.helper'
import { TextInput } from '../inputs'

export const DetailTab = () => {
  const [inputs, setInputs] = useState(TemplateFields)
  return (
    <Box p="base" w="full" h="100vh" bg="white">
      {templateForm?.map(({ label, id }) => {
        return (
          <Stack key={id} mt="6">
            <Text>{label}</Text>
            <TextInput
              handleChange={(event) =>
                setInputs({
                  ...inputs,
                  [event.target.id]: event.target.value,
                })
              }
              id={id}
              placeholder="Enter Content"
              value={inputs[id as keyof typeof inputs]}
            />
          </Stack>
        )
      })}
    </Box>
  )
}

export default DetailTab
