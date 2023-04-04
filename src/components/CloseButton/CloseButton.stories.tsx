import type { Meta, StoryObj } from '@storybook/react'
import CloseButton from '.'
import { CloseButtonProps } from './CloseButton.types'

const meta: Meta<CloseButtonProps> = {
    title: 'Components/CloseButton',
    component: CloseButton,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<CloseButtonProps>

export const RegualCloseButton: Story = {
    args: {
    
    },
}
