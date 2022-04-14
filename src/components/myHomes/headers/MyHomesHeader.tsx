import { Flex, Select, Button } from '@chakra-ui/react'
import { t } from 'i18next'
import { HiOutlinePlus } from 'react-icons/hi'
import { IMyHomeHeader } from '../../../interfaces/myHomes/MyHomesHeader.interface'
import { CustomIcon } from '../../icons/CustomIcon'

export const MyHomesHeader = ({
  cardFilters,
  handleNewHomeClick,
}: IMyHomeHeader) => {
  return (
    <Flex justifyContent="space-between" alignItems="start" pr="4" py="4">
      <Button
        size="md"
        onClick={handleNewHomeClick}
        leftIcon={<CustomIcon type={HiOutlinePlus} color="white" size="7" />}
        variant="rightRounded"
      >
        {t('myHomes.addHome')}
      </Button>
      <Select placeholder={t('myHomes.select.title')} w="input.wSm">
        {cardFilters &&
          cardFilters.map(({ label, handleClick }) => (
            <option key={label} onClick={handleClick} value={label}>
              {label}
            </option>
          ))}
      </Select>
    </Flex>
  )
}

export default MyHomesHeader
