import type { Meta, StoryObj } from '@storybook/react'
import ActionButton from '.'
import { ActionButtonProps } from './ActionButton.types'

const meta: Meta<ActionButtonProps> = {
    title: 'Components/ActionButton',
    component: ActionButton,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        options: ['primary', 'secondary'],
        control: { type: 'radio' },
      },
    },
    args: {
      variant: 'primary'
    }
}

export default meta
type Story = StoryObj<ActionButtonProps>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Button',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Button',
    },
}
