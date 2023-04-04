import type { Meta, StoryObj } from '@storybook/react'
import TextInput from '.'
import { TextInputProps } from './TextInput.types'

const meta: Meta<TextInputProps> = {
    title: 'Components/TextInput',
    component: TextInput,
    tags: ['autodocs'],
    args: {
      id: 'id-3',
      value: 'This is some text input content'
    }
}

export default meta
type Story = StoryObj<TextInputProps>

export const Regualr: Story = {
    args: {
      id: 'id-3',
      value: 'This is some text input content'
    },
}

export const WithError: Story = {
    args: {
      id: 'id-4',
      value: 'This is some text input content',
      error: 'This is an error'
    },
}
export const WithLabel: Story = {
  args: {
    id: 'id-5',
    label: 'This is a label',
    value: 'This is some text input content',
  },
}

export const WithPlaceholder: Story = {
  args: {
    id: 'id-6',
    label: 'This is a label',
    value: '',
    placeholder: 'This is a placeholder'
  }
}