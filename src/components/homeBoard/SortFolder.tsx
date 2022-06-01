import { Box, Button, Flex } from "@chakra-ui/react"
import { FiGrid } from "react-icons/fi"
import { CustomIcon } from "../icons/CustomIcon"
import SelectInput from "../inputs/SelectInput"

export const SortFolder = () => {
  return (
    <Box bg="container.neutralBlue" py="2" pl="base" w="100%">
      <Flex justify="space-between" align="center">
        <SelectInput
          handleClick={(form) => form}
          initailValue={'By date'}
          items={[]}
        />
        <Button maxW="4rem" h="2rem" variant="menuIcon">
          <CustomIcon type={FiGrid} size="7" />
        </Button>
      </Flex>
    </Box>
  )
}

export default SortFolder