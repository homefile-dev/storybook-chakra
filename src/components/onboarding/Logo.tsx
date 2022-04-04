import { Center, Container, Image } from '@chakra-ui/react'
import ImgLogo from '../../assets/images/logo.svg'

export const Logo = () => {
  return (
    <Container variant="ghost" size="full">
      <Center h="container.xxs">
        <Image src={ImgLogo} alt="Homefile" h="image.logo" />
      </Center>
    </Container>
  )
}

export default Logo
