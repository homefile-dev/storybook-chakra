import { Container, Text } from '@chakra-ui/react'
import { PageTitleI } from '../../interfaces/onboarding/PageTitle.interface'

export const PageTitle = ({ title }: PageTitleI) => {
  return (
    <Container variant="ghost" mt={4} mb={6}>
      <Text variant="title" textAlign="center" px={[10, 0]} noOfLines={[2, 1]}>
        {title}
      </Text>
    </Container>
  )
}

export default PageTitle
