import { Box, Button, Container, Flex, Text, Circle } from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'
import ContainerHeader from '../headers/ContainerHeader'
import SendDoc from '../../assets/images/send.svg'
import { MyHomeMenuItems } from '../../helpers/launchpad/MenuItems.helper'
import { HiOutlinePlus } from 'react-icons/hi'
import { RiArrowRightSLine } from 'react-icons/ri'
import { ISendCommunication } from '../../interfaces/sendCommunication/SendCommunication.interface'

export const SendCommunication = ({ handleBtClick }: ISendCommunication) => {
  return (
    <Container variant="launchpad" minW="full">
      <ContainerHeader
        title={t('sendCommunication.title')}
        titleIcon={SendDoc}
        menuItems={MyHomeMenuItems}
        icon={<CustomIcon type={FiMoreHorizontal} size="8" />}
      />
      <Box w="full" p="4">
        <Button onClick={handleBtClick}>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            px="4"
            w="full"
          >
            <Flex alignItems="center" gap="4">
              <CustomIcon type={HiOutlinePlus} color="white" size="7" />
              <Text color="white">{t('sendCommunication.btLabel')}</Text>
            </Flex>
            <Circle size="40px" bg="button.primary-300" color="white">
              <CustomIcon type={RiArrowRightSLine} color="white" size="7" />
            </Circle>
          </Flex>
        </Button>
      </Box>
    </Container>
  )
}

export default SendCommunication
