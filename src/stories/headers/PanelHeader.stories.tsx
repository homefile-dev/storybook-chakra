import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { t } from 'i18next'
import PanelHeader from '../../components/headers/PanelHeader'
import { ProgressReport } from '../../assets/images'

export default {
  title: 'Components/Headers',
  component: PanelHeader,
} as ComponentMeta<typeof PanelHeader>

const Template: ComponentStory<typeof PanelHeader> = () => {
  return (
    <Box w="50%">
      <PanelHeader
        handleCloseButton={() => {}}
        icon={ProgressReport}
        title={t('createDocument.title')}
      />
    </Box>
  )
}

export const PanelHeaderComponent = Template.bind({})
