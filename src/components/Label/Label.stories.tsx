import type { Meta, StoryObj } from '@storybook/react'
import Label from '.'
import { LabelProps } from './Label.types'

const meta: Meta<LabelProps> = {
    title: 'Components/Label',
    component: Label,
    tags: ['autodocs'],
    
    args: {
        label: 'Input label',
    },
}

export default meta
type Story = StoryObj<LabelProps>

export const InputLabel: Story = {
    args: {
        label: 'Input label',
        htmlFor: 'id-1',
    },
}

export const TextareaLabel: Story = {
  args: {
      label: 'Textarea label',
      htmlFor: 'id-2',
  },
}
