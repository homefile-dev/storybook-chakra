import { Container, Text, Center } from '@chakra-ui/react'
import { IPageTitle } from '../../interfaces/onboarding/PageTitle.interface'

export const PageTitle = ({ title }: IPageTitle) => {
  return (
    <Container variant="ghost" mt={4} mb={6}>
      <Text variant="title" textAlign="center" px={[10, 0]} noOfLines={[2, 1]}>
        {title}
      </Text>
    </Container>
  )
}

export default PageTitle