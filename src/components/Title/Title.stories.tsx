import type { Meta, StoryObj } from '@storybook/react'
import Title from '.'
import { TitleProps } from './Title.types'

const meta: Meta<TitleProps> = {
    title: 'Components/Title',
    component: Title,
    tags: ['autodocs'],
    args: {
        text: 'Some Title',
    },
}

export default meta
type Story = StoryObj<TitleProps>

export const InputTitle: Story = {
    args: {
        text: 'Some Title',
    },
}