import { Drawer, DrawerOverlay } from "@chakra-ui/react"
import { ILeftPanel } from "../../interfaces/launchpad/LeftPanel.interface"

export const LeftPanel = ({ child, isOpen, onClose }: ILeftPanel) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
      <DrawerOverlay />
      {child}
    </Drawer>
  )
}

export default LeftPanel