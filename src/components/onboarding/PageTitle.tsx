import { Container, Text } from "@chakra-ui/react"
import { IPageTitle } from "../../interfaces/onboarding/PageTitle.interface"

export const PageTitle = ({title}: IPageTitle) => {
  return (
    <Container variant="ghost" centerContent h="4rem">
      <Text variant="title">{title}</Text>
    </Container>
  )
}

export default PageTitle
