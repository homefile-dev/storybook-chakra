import { DrawerBody, DrawerContent, DrawerHeader, Text } from "@chakra-ui/react"
import { t } from "i18next"
import { BlueFolder } from "../../assets/images"
import { PanelHeader } from "../headers"

export const FolderDetail = () => {
  return (
    <DrawerContent bg="container.tertiary">
      <DrawerHeader p="0">
        <PanelHeader
          handleCloseButton={() => {}}
          icon={BlueFolder}
          title={'Drawings'}
        />
      </DrawerHeader>
      <DrawerBody p="base">
        <Text>Content</Text>
      </DrawerBody>
    </DrawerContent>
  )
}

export default FolderDetail