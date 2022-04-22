import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Center,
} from '@chakra-ui/react'
import { BsChevronDown, BsFilter } from 'react-icons/bs'
import { t } from 'i18next'
import { HiOutlinePlus } from 'react-icons/hi'
import { IMyHomeHeader } from '../../../interfaces/myHomes/MyHomesHeader.interface'
import { CustomIcon } from '../../icons/CustomIcon'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

export const MyHomesHeader = ({
  cardFilters,
  handleNewHomeClick,
}: IMyHomeHeader) => {
  const { width } = useWindowDimensions()
  const isMobile = width < 460
  return (
    <Flex justifyContent="space-between" alignItems="start" pr="base" py="4">
      <Button
        size="md"
        onClick={handleNewHomeClick}
        leftIcon={<CustomIcon type={HiOutlinePlus} color="white" size="7" />}
        variant="rightRounded"
      >
        {t('myHomes.addHome')}
      </Button>
      <Menu>
        <MenuButton
          w={isMobile ? '3rem' : '10rem'}
          border="1px"
          borderColor={isMobile ? 'button.primary' : 'input.border'}
          borderRadius="sm"
          bg="white"
          _hover={{
            borderColor: 'button.primary',
          }}
        >
          <Center h="3rem" gap={3}>
            {isMobile ? '' : t('myHomes.select.title')}
            <CustomIcon
              type={isMobile ? BsFilter : BsChevronDown}
              size={isMobile ? 8 : undefined}
              color={isMobile ? 'button.primary' : undefined}
            />
          </Center>
        </MenuButton>
        <MenuList>
          {cardFilters &&
            cardFilters.map(({ label, handleClick }) => (
              <MenuItem
                key={label}
                onClick={handleClick}
                value={label}
                _hover={{
                  bg: 'container.secondary',
                }}
                _focus={{
                  bg: 'container.secondary',
                }}
              >
                {label}
              </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default MyHomesHeader
