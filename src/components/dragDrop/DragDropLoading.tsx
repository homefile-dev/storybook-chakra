import { Center, Stack } from "@chakra-ui/react"
import { BeatLoader } from "react-spinners"
import { DragDropLoadingI } from "../../interfaces/dragDrop/DragDropLoading.interface"

export const DragDropLoading = ({ children, isLoading = false }: DragDropLoadingI) => {
  return (
    <Stack gap="base">
      {isLoading ? (
        <Center h="8rem">
          <BeatLoader color="gray" size={8} />
        </Center>
      ) : (
        children
      )}
    </Stack>
  )
}
