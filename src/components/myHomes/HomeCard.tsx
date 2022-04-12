import { Container } from "@chakra-ui/react"
import { FiMoreHorizontal } from "react-icons/fi"
import ContainerHeader from "../headers/ContainerHeader"
import { CustomIcon } from "../icons/CustomIcon"

export const HomeCard = () => {
  return (
    <Container
    >
      <ContainerHeader
        menuItems={[]}
        icon={<CustomIcon type={FiMoreHorizontal} size="8" />}
      />
    </Container>
  )
}

export default HomeCard