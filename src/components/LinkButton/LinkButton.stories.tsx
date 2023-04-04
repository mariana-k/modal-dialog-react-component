import type { Meta, StoryObj } from '@storybook/react'
import LinkButton from '.'
import { LinkButtonProps } from './LinkButton.types'
import Link from '../../images/icons/link-s.svg'
import Code from '../../images/icons/code-s-fill.svg'

const meta: Meta<LinkButtonProps> = {
    title: 'Components/LinkButton',
    component: LinkButton,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<LinkButtonProps>

export const CopyLink: Story = {
    args: {
        text: 'Copy link',
        iconHref: `${Link}#link-s`,
    },
}

export const EmbedCode: Story = {
    args: {
        text: 'Get embed code',
        iconHref: `${Code}#code-s-fill`,
    },
}
