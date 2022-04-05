import { Flex, Text, Image, Select, Button } from '@chakra-ui/react'
import { t } from 'i18next'
import { useState } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import { CustomIcon } from '../icons/CustomIcon'

export const MyHomesHeader = () => {
  return (
    <Flex justifyContent="space-between" alignItems="start" pr="4" py="4">
      <Button
        size="md"
        onClick={() => {}}
        leftIcon={<CustomIcon type={HiOutlinePlus} color="white" size="7" />}
        variant="rightRounded"
      >
        {t('myHomes.addHome')}
      </Button>
      <Select placeholder={t('myHomes.select.title')} w="button.md">
        <option value="option1">{t('myHomes.select.option1')}</option>
        <option value="option2">{t('myHomes.select.option2')}</option>
      </Select>
    </Flex>
  )
}

export default MyHomesHeader
