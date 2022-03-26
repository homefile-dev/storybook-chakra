import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FullButton } from './FullButton'

export default {
    title: 'Buttons/FullButton',
    component: FullButton,
} as ComponentMeta<typeof FullButton>

const Template: ComponentStory<typeof FullButton> = (args) => (
    <FullButton {...args} />
)

const labelValue = 'ADD CLIENTS'

export const Primary = Template.bind({})
Primary.args = {
    label: labelValue,
    variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: labelValue,
    variant: 'secondary',
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: 'Add Clients',
    variant: 'primary',
    isDisabled: true,
}
