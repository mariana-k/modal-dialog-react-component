import type { Meta, StoryObj } from '@storybook/react'
import Paragraph from '.'
import { ParagraphProps } from './Paragraph.types'
import Icon from '../Icon'
import Info from '../../images/icons/information-fill.svg'

const meta: Meta<ParagraphProps> = {
    title: 'Components/Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
    args: {
        children: 'This is a regular paragraph',
    },
}

export default meta
type Story = StoryObj<ParagraphProps>

export const Regular: Story = {
    args: {
        children: 'This is a regular paragraph',
    },
}

export const WithIcon: Story = {
    args: {
        children: 'This is a paragraph with an icon',
    },
    render: (args) => (
        <Paragraph>
            <Icon href={`${Info}#information-fill`} />
            {args.children}
        </Paragraph>
    ),
}
