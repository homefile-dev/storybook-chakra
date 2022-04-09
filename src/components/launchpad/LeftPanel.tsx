import { Drawer, DrawerOverlay } from "@chakra-ui/react"
import { ILeftPanel } from "../../interfaces/launchpad/LeftPanel.interface"

export const LeftPanel = ({ children, isOpen, onClose }: ILeftPanel) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
      <DrawerOverlay />
      {children}
    </Drawer>
  )
}

export default LeftPanel