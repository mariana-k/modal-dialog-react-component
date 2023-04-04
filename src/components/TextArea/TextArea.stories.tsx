import type { Meta, StoryObj } from '@storybook/react'
import TextArea from '.'
import { TextAreaProps } from './TextArea.types'

const meta: Meta<TextAreaProps> = {
    title: 'Components/TextArea',
    component: TextArea,
    tags: ['autodocs'],
    args: {
      id: 'id-3',
      value: 'This is some text area content'
    }
}

export default meta
type Story = StoryObj<TextAreaProps>

export const Regualr: Story = {
    args: {
      id: 'id-3',
      value: 'This is some text area content'
    },
}

export const WithError: Story = {
    args: {
      id: 'id-4',
      value: 'This is some text area content',
      error: 'This is an error'
    },
}
export const WithLabel: Story = {
  args: {
    id: 'id-5',
    label: 'This is a label',
    value: 'This is some text area content',
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