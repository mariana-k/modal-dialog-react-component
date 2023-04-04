import type { Meta, StoryObj } from '@storybook/react'
import Icon from '.'
import { IconProps } from './Icon.types'
import Link from '../../images/icons/link-s.svg'
import Code from '../../images/icons/code-s-fill.svg'
import Info from '../../images/icons/information-fill.svg'
const meta: Meta<IconProps> = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
      href: {
        options: [`${Link}#link-s`, `${Code}#code-s-fill`, `${Info}#information-fill`],
        control: { type: 'radio' },
      },
    },
    args: {
      href: `${Link}#link-s`
    }
}

export default meta
type Story = StoryObj<IconProps>

export const LinkIcon: Story = {
    args: {
        href: `${Link}#link-s`,
    },
}

export const CodeIcon: Story = {
  args: {
      href: `${Code}#code-s-fill`,
  },
}

export const InfoIcon: Story = {
  args: {
      href: `${Info}#information-fill`,
  },
}