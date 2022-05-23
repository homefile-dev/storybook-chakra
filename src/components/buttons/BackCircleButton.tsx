import { Circle } from '@chakra-ui/react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { CustomIcon } from '../icons/CustomIcon'

export const BackCircleButton = ({
  handleClick,
}: {
  handleClick: () => void
}) => {
  return (
    <Circle
      size="40px"
      bg="white"
      color="white"
      as="button"
      onClick={handleClick}
      transition="all 0.2s ease-in-out"
      _hover={{ boxShadow: 'lg' }}
    >
      <CustomIcon type={AiOutlineArrowLeft} color="button.primary" size="7" />
    </Circle>
  )
}

export default BackCircleButton
