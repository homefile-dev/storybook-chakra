import { Box, Button } from "@chakra-ui/react"
import { t } from "i18next"

export const BackHeader = ({ handleClick }: {handleClick: () => void}) => {
  return (
    <Box bg="white" py="2" pl="4">
      <Button variant="text" onClick={handleClick}>
        {t('forms.return')}
      </Button>
    </Box>
  )
}

export default BackHeader