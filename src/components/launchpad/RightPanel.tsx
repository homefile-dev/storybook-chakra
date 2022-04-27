import { Drawer, DrawerOverlay } from '@chakra-ui/react'
import { IRightPanel } from '../../interfaces/launchpad/RightPanel.interface'

export const RightPanel = ({
  children,
  isOpen,
  onClose,
  size = 'md',
}: IRightPanel) => {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size={size}>
      <DrawerOverlay />
      {children}
    </Drawer>
  )
}

export default RightPanel
