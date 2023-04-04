import type { Meta, StoryObj } from '@storybook/react'
import Message from '.'
import { MessageProps } from './Message.types'

const meta: Meta<MessageProps> = {
    title: 'Components/Message',
    component: Message,
    tags: ['autodocs'],
    argTypes: {
      isError: {
        options: [true, false],
        control: { type: 'boolean' },
      },
    },
    args: {
      isError: false,
      text: 'This is an errors',
    }
}

export default meta
type Story = StoryObj<MessageProps>

export const Error: Story = {
    args: {
      isError: false,
      text: 'This is an errors',
    },
}
