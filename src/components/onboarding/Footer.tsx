import { Flex, Text } from '@chakra-ui/react'
import { t } from 'i18next'

export const Footer = () => {
  return (
    <Flex
      w={['container.full', 'container.sm', 'container.md']}
      direction={['column', 'row']}
      mx="auto"
      my={4}
      justifyContent={['center', 'space-between']}
      alignItems="center"
    >
      <Text variant="label">{t('footer.copyright')}</Text>
      <Flex gap={2}>
        <Text variant="label">
          <a target="_blank" href={t('footer.termsUrl')}>
            {t('footer.termsLink')}
          </a>
        </Text>
        <Text variant="label">
          <a target="_blank" href={t('footer.privacyUrl')}>
            {t('footer.privacyLink')}
          </a>
        </Text>
      </Flex>
    </Flex>
  )
}

export default Footer
