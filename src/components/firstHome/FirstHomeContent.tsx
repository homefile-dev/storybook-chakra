import { DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@chakra-ui/react"
import FirstHomeHeader from "./FirstHomeHeader"

export const FirstHomeContent = () => {
  return (
    <DrawerContent>
      <DrawerHeader p="0">
        <FirstHomeHeader />
      </DrawerHeader>
      <DrawerBody>
        <p>Some contents...</p>
      </DrawerBody>
      <DrawerFooter>
        <p>Some footer...</p>
      </DrawerFooter>
    </DrawerContent>
  )
}

export default FirstHomeContent