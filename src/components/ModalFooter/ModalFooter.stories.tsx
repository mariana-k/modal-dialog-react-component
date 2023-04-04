import type { Meta, StoryObj } from '@storybook/react'
import ModalFooter from '.'
import { ModalFooterProps } from './ModalFooter.types'
import { modalData } from '../../utils/mockData'

const meta: Meta<ModalFooterProps> = {
    title: 'Components/ModalFooter',
    component: ModalFooter,
    tags: ['autodocs'],
    args: {
        applyText: 'Apply',
    },
}

export default meta
type Story = StoryObj<ModalFooterProps>

export const Edit: Story = {
    args: {
        copyText: modalData.edit.footer.copyText,
        embedText: modalData.edit.footer.embedText,
        cancelText: modalData.edit.footer.cancelText,
        applyText: modalData.edit.footer.applyText,
    },
    render: (args) => (
        <ModalFooter
            onCopy={() => null}
            onEmbed={() => null}
            onCancel={() => null}
            onApply={() => null}
            copyText={args.copyText}
            embedText={args.embedText}
            cancelText={args.cancelText}
            applyText={args.applyText}
        />
    ),
}

export const Confirm: Story = {
    args: {
        cancelText: modalData.edit.footer.cancelText,
        applyText: modalData.edit.footer.applyText,
    },
    render: (args) => (
        <ModalFooter
            onApply={() => null}
            onCancel={() => null}
            cancelText={args.cancelText}
            applyText={args.applyText}
        />
    ),
}

export const Alert: Story = {
    args: {
        applyText: modalData.edit.footer.applyText,
    },
    render: (args) => <ModalFooter onApply={() => null} applyText={args.applyText} />,
}
