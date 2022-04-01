import { Box, Container, Text, Button } from '@chakra-ui/react'
import { ICardFooter } from '../../interfaces/onboarding/CardFooter.interface'

export const CardFooter = ({
  title = '',
  buttonLabel,
  handleButtonClick,
}: ICardFooter) => {
  return (
    <Container variant="secondary" centerContent>
      <Box
        w="full"
        px={['container.sm', 'container.md', 'container.lg']}
        my="auto"
        py="2rem"
      >
        {title !== '' && (
          <Text mb={4} textAlign="center" variant="body">
            {title}
          </Text>
        )}
        <Button mb={2} variant="secondary" onClick={handleButtonClick}>
          {buttonLabel}
        </Button>
      </Box>
    </Container>
  )
}

export default CardFooter
