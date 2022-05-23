import { Drawer, DrawerOverlay } from "@chakra-ui/react"
import { LeftPanelI } from '../../interfaces/launchpad/LeftPanel.interface'

export const LeftPanel = ({ children, isOpen, onClose }: LeftPanelI) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
      <DrawerOverlay />
      {children}
    </Drawer>
  )
}

export default LeftPanel