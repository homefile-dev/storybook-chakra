import { ComponentMeta, ComponentStory } from '@storybook/react'
import FolderSharing from '../../components/homeBoard/FolderSharing'
import {
  FoldersDB,
  selectOptions,
} from '../../helpers/homeBoard/FolderSharing.helper'

export default {
  title: 'Components/HomeBoard',
  component: FolderSharing,
} as ComponentMeta<typeof FolderSharing>

const Template: ComponentStory<typeof FolderSharing> = () => {
  return (
    <FolderSharing
      folders={FoldersDB}
      handleFolderClick={() => {}}
      handleSelect={() => {}}
      initialSelectItem={selectOptions[0]}
      menuItems={[
        {
          label: 'Edit',
          handleClick: () => {},
        },
      ]}
      selectItems={selectOptions}
    />
  )
}

export const FolderSharingComponent = Template.bind({})
