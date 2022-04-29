import { Center, Container, Slide } from '@chakra-ui/react'
import { IFooterDrawer } from '../../interfaces/footers/FooterDrawer.interface'

export const FooterDrawer = ({ children, isOpen }: IFooterDrawer) => {
  return (
    <Slide direction="bottom" in={isOpen}>
      <Container variant="footer" minW="full">
        <Center py="2rem">{children}</Center>
      </Container>
    </Slide>
  )
}

export default FooterDrawer