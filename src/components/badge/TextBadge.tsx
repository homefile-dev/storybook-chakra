import { Box } from '@chakra-ui/react'
import { t } from 'i18next'
import { useState, useLayoutEffect, useEffect } from 'react'
import { TextBadgeI } from '../../interfaces/badge/TextBadge.interface'

export const TextBagde = ({
  bgColor = 'container.violet',
  text = t('badges.new'),
  width = '2.2rem',
}: TextBadgeI) => {
  const [textBadge, setTextBadge] = useState(text)
  const [badgeWidth, setBadgeWidth] = useState(width)
  const singleLetterWidth = '1.4rem'

  useLayoutEffect(() => {
    setTimeout(() => {
      setTextBadge(text?.charAt(0))
      setBadgeWidth(singleLetterWidth)
    }, 3000)
  }, [])

  useEffect(() => {
    if (textBadge && textBadge?.length > 1) {
      setBadgeWidth(width)
    } else {
      setBadgeWidth(singleLetterWidth)
    }
  }, [textBadge])

  return (
    <Box
      bg={bgColor}
      borderRadius="base"
      w={badgeWidth}
      py="0.4rem"
      onMouseOver={() =>
        setTimeout(() => {
          setTextBadge(text)
        }, 150)
      }
      onMouseLeave={() => {
        setTimeout(() => {
          setTextBadge(text?.charAt(0))
        }, 100)
      }}
      overflow="hidden"
      textColor="white"
      fontSize="0.625rem"
      fontWeight="bold"
      textTransform="uppercase"
      _hover={{
        w: width,
      }}
      transition="all 0.3s ease-in-out"
    >
      {textBadge}
    </Box>
  )
}

export default TextBagde
