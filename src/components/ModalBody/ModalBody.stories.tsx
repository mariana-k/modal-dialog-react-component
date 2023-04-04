import type { Meta, StoryObj } from '@storybook/react'
import ModalBody from '.'
import { ModalBodyProps } from './ModalBody.types'
import Logo from '../Logo'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Paragraph from '../Paragraph'
import Icon from '../Icon'
import Info from '../../images/icons/information-fill.svg'
import { modalData } from '../../utils/mockData'
const meta: Meta<ModalBodyProps> = {
    title: 'Components/ModalBody',
    component: ModalBody,
    tags: ['autodocs'],
    args: {
        children: 'Some content',
    },
}

export default meta
type Story = StoryObj<ModalBodyProps>

export const Form: Story = {
    render: () => (
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
    ),
}

export const TextWithIcon: Story = {
    args: {
        children: modalData.confirm.text
    },
    render: (args) => (
        <ModalBody>
            <Paragraph>
                <Icon href={`${Info}#information-fill`} />
                {modalData.confirm.text}
            </Paragraph>
        </ModalBody>
    ),
}

export const Text: Story = {
    args: {
        children: modalData.alert.text
    },
    render: (args) => (
        <ModalBody>
            <Paragraph>{args.children}</Paragraph>
        </ModalBody>
    ),
}
