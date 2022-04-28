import { useState } from 'react'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css'
import Calendar, {
  DayRange,
} from '@hassanmojab/react-modern-calendar-datepicker'
import { Flex, Input } from '@chakra-ui/react'
import { FiCalendar } from 'react-icons/fi'
import '../../styles/Calendar.module.css'
import { CustomIcon } from '../icons/CustomIcon'

const DateRangePicker = ({handleClick}: {handleClick: (date: string) => void}) => {
  const defaultRange = {
    from: null,
    to: null,
  }

  const [selectedDayRange, setSelectedDayRange] =
    useState<DayRange>(defaultRange)

  const formatInputValue = () => {
    if (!selectedDayRange) return ''
    const monthList = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    const newValue = `${monthList[(selectedDayRange.from?.month as number) - 1]} ${
      selectedDayRange.from?.day
    }-${selectedDayRange.to?.day} ${selectedDayRange.to?.year}`
    handleClick(newValue)
    return newValue
  }

  const renderCustomInput = ({ ref }: { ref: any }) => (
    <Flex align="center" justify="end" gap="base">
      <CustomIcon type={FiCalendar} color="font.link" />
      <Input
        value={
          selectedDayRange.from && selectedDayRange.to ? formatInputValue() : ''
        }
        readOnly
        ref={ref}
        placeholder="Select date range"
        variant="date"
        size="sm"
        maxW="9rem"
      />
    </Flex>
  )

  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      renderInput={renderCustomInput}
      calendarClassName="custom-calendar"
      colorPrimary="#2488C6"
      colorPrimaryLight="#bce0f6"
      wrapperClassName="custom-calendar-wrapper"
    />
  )
}

export default DateRangePicker
