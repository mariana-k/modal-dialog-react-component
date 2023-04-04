import type { Meta, StoryObj } from '@storybook/react'
import ModalHeader from '.'
import { ModalHeaderProps } from './ModalHeader.types'
import { modalData } from '../../utils/mockData'

const meta: Meta<ModalHeaderProps> = {
    title: 'Components/ModalHeader',
    component: ModalHeader,
    tags: ['autodocs'],
    args: {
        title: modalData.edit.title,
    },
}

export default meta
type Story = StoryObj<ModalHeaderProps>

export const Regular: Story = {
    args: {
        title: modalData.edit.title
    },
    render: (args) => (
        <ModalHeader title={args.title} onClose={() => null} />
    ),
}

export const WithoutCloseButton: Story = {
    args: {
        title: modalData.edit.title,
        hideCloseButton: true
    },
    render: (args) => (
        <ModalHeader title={args.title} hideCloseButton={args.hideCloseButton} onClose={() => null} />
    ),
}