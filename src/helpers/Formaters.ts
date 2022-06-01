export const formatDate = (date: any): string => {
  const timeFormat = new Intl.DateTimeFormat('en-US', {
    timeStyle: 'short',
    timeZone: 'UTC',
  })
    .format(new Date(date))
    .replaceAll(' ', '')

  const dateFormat = new Date(date)
    .toLocaleDateString('en-US')
    .replaceAll('/', '.')

  return dateFormat + ' ' + timeFormat
}
