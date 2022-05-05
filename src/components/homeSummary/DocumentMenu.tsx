import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  Image,
  MenuItem,
  Flex,
  Text,
  Circle,
} from '@chakra-ui/react'
import { CustomIcon } from '../icons/CustomIcon'
import { RiArrowRightSLine } from 'react-icons/ri'

import { IDocumentList } from '../../interfaces/homeSummary/DocumentMenu.interface'
import { t } from 'i18next'
import { IconAndText } from '../buttons/IconAndText'

export const DocumentMenu = ({ documents, isDisabled, title }: IDocumentList) => {
  return (
    <Menu gutter={0} matchWidth>
      {({ isOpen }) => (
        <>
          <MenuButton as={Button} variant="menu" disabled={isDisabled}>
            <Flex alignItems="center" justifyContent="space-between" px="4">
              <IconAndText title={title} />
              <Circle
                size="40px"
                bg="button.primary-300"
                color="white"
                transform={isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
                transition="all 0.2s ease-in-out"
              >
                <CustomIcon type={RiArrowRightSLine} color="white" size="7" />
              </Circle>
            </Flex>
          </MenuButton>
          <MenuList borderTopRadius="0" boxShadow="lg">
            {documents &&
              documents.map(({ onClick, icon, active = true, label }) => (
                <MenuItem
                  minH="3rem"
                  onClick={onClick}
                  isDisabled={!active}
                  key={label}
                  _hover={{
                    bg: 'container.secondary',
                  }}
                  _focus={{
                    bg: 'container.secondary',
                  }}
                >
                  <Image
                    boxSize="2rem"
                    src={icon}
                    alt={`${label} ${t('images.altIcon')}`}
                    mr="12px"
                  />
                  <Text>{label}</Text>
                </MenuItem>
              ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default DocumentMenu
