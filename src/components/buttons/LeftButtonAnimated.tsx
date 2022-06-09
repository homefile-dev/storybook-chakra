import { Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import { CustomIcon } from '../icons/CustomIcon'

interface LeftButtonAnimatedI {
  handleClick: () => void
  label: string
}

export const LeftButtonAnimated = ({
  handleClick,
  label,
}: LeftButtonAnimatedI) => {
  const labelWidth = label.length * 18 + 20
  const iconWidth = 64
  const [buttonWidth, setButtonWidth] = useState(labelWidth)
  const isCollapsed = buttonWidth === iconWidth

  useEffect(() => {
    setTimeout(() => {
      setButtonWidth(iconWidth)
    }, 2000)
  }, [labelWidth])

  return (
    <Button
      h="36px"
      variant="leftRounded"
      w={`${buttonWidth}px`}
      pl={isCollapsed ? '4px' : '0'}
      onMouseEnter={() => setButtonWidth(labelWidth)}
      onMouseLeave={() => setButtonWidth(iconWidth)}
      onClick={handleClick}
    >
      <CustomIcon type={HiOutlinePlus} color="white" size="1.5rem" />
      {!isCollapsed && label}
    </Button>
  )
}
