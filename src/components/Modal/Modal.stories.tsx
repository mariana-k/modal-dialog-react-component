import type { Meta, StoryObj } from '@storybook/react'
import Modal from '.'
import { ModalProps } from './Modal.types'
import ModalHeader from '../ModalHeader'
import ModalBody from '../ModalBody'
import ModalFooter from '../ModalFooter'
import Logo from '../Logo'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Paragraph from '../Paragraph'
import Icon from '../Icon'
import Info from '../../images/icons/information-fill.svg'
import { modalData } from '../../utils/mockData'

const meta: Meta<ModalProps> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            options: [true, false],
            control: { type: 'boolean' },
        },
    },
    args: {
        isOpen: true,
    },
}

export default meta
type Story = StoryObj<ModalProps>

export const Edit: Story = {
    args: {
        isOpen: true,
    },
    render: (args) => (
        <Modal onClose={() => null} isOpen={args.isOpen}>
            <ModalHeader title={modalData.edit.title} onClose={() => null} />
            <ModalBody>
                <Logo src={modalData.edit.logo.src} alt={modalData.edit.logo.alt} />
                <TextInput
                    id={modalData.edit.input.id}
                    value={modalData.edit.textarea.value}
                    placeholder={modalData.edit.input.placeholder}
                    label={modalData.edit.input.label}
                    error={modalData.edit.input.error}
                    onChange={() => null}
                />
                <TextArea
                    id={modalData.edit.textarea.id}
                    value={modalData.edit.textarea.value}
                    placeholder={modalData.edit.textarea.placeholder}
                    label={modalData.edit.textarea.label}
                    error={modalData.edit.textarea.error}
                    onChange={() => null}
                />
            </ModalBody>
            <ModalFooter
                onCopy={() => null}
                onEmbed={() => null}
                onCancel={() => null}
                onApply={() => null}
                copyText={modalData.edit.footer.copyText}
                embedText={modalData.edit.footer.embedText}
                cancelText={modalData.edit.footer.cancelText}
                applyText={modalData.edit.footer.applyText}
            />
        </Modal>
    ),
}

export const Confirm: Story = {
    args: {
        isOpen: false,
    },
    render: (args) => (
        <Modal onClose={() => null} isOpen={args.isOpen}>
            <ModalHeader title={modalData.confirm.title} onClose={() => null} />
            <ModalBody>
                <Paragraph>
                    <Icon href={`${Info}#information-fill`} />
                    {modalData.confirm.text}
                </Paragraph>
            </ModalBody>
            <ModalFooter
                onApply={() => null}
                onCancel={() => null}
                applyText={modalData.confirm.footer.applyText}
                cancelText={modalData.confirm.footer.cancelText}
            />
        </Modal>
    ),
}

export const Alert: Story = {
    args: {
        isOpen: false,
    },
    render: (args) => (
        <Modal onClose={() => null} isOpen={args.isOpen}>
            <ModalHeader title={modalData.alert.title} onClose={() => null} />
            <ModalBody>
                <Paragraph>{modalData.alert.text}</Paragraph>
            </ModalBody>
            <ModalFooter onApply={() => null} applyText={modalData.alert.footer.applyText} />
        </Modal>
    ),
}
