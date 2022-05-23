import { Center, Container, Slide } from '@chakra-ui/react'
import { FooterDrawerI } from '../../interfaces/footers/FooterDrawer.interface'

export const FooterDrawer = ({ children, isOpen }: FooterDrawerI) => {
  return (
    <Slide direction="bottom" in={isOpen}>
      <Container variant="footer" minW="full">
        <Center py="2rem">{children}</Center>
      </Container>
    </Slide>
  )
}

export default FooterDrawer