import { Container, Text } from '@chakra-ui/react'
import { IPageTitle } from '../../interfaces/onboarding/PageTitle.interface'

export const PageTitle = ({ title }: IPageTitle) => {
  return (
    <Container variant="ghost" h="4rem">
      <Text variant="title" textAlign="center" px={[10, 0]} noOfLines={[2, 1]}>
        {title}
      </Text>
    </Container>
  )
}

export default PageTitle
