import { Drawer, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"
import { ILeftPanel } from "../../interfaces/launchpad/LeftPanel.interface"

export const LeftPanel = ({ child }: ILeftPanel) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    onOpen()
    }, [])
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
      <DrawerOverlay />
      {child}
    </Drawer>
  )
}

export default LeftPanel