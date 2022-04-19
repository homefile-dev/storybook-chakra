import { Flex, Text, Image } from '@chakra-ui/react'
import { ISectionHeader } from '../../interfaces/headers/SectionHeader.inteface'

export const SectionHeader = ({
  leftElement = null,
  title = "",
  titleIcon,
}: ISectionHeader) => (
  <Flex justify="space-between">
    <Flex gap="4" w="full">
      <Image src={titleIcon} alt={title} w="auto" h="24px" />
      <Text textTransform="uppercase">{title}</Text>
    </Flex>
    {leftElement}
  </Flex>
)

export default SectionHeader
