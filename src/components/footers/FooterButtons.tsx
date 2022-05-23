import { Button, Flex } from '@chakra-ui/react'
import { FooterButtonsI } from '../../interfaces/footers/FooterButtons.interface'

export const FooterButtons = ({ button1, button2, button3 }: FooterButtonsI) => {
  return (
    <Flex align="center" justifyContent="space-between" w="full" px="base">
      <Flex align="center" gap="2">
        <Button
          variant={button1.buttonStyle}
          onClick={button1.onClick}
          size="small"
        >
          {button1.label}
        </Button>
        {button2 && (
          <Button
            variant={button2.buttonStyle}
            onClick={button2.onClick}
            maxW="fit-content"
          >
            {button2.label}
          </Button>
        )}
      </Flex>
      <Button
        variant={button3.buttonStyle}
        onClick={button3.onClick}
        maxW="fit-content"
      >
        {button3.label}
      </Button>
    </Flex>
  )
}

export default FooterButtons
