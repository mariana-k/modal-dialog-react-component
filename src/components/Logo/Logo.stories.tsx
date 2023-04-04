import type { Meta, StoryObj } from '@storybook/react'
import Logo from '.'
import { LogoProps } from './Logo.types'
import { modalData } from '../../utils/mockData'

const meta: Meta<LogoProps> = {
    title: 'Components/Logo',
    component: Logo,
    tags: ['autodocs'],
    args: {
        src: modalData.edit.logo.src,
        alt: modalData.edit.logo.alt,
    },
}

export default meta
type Story = StoryObj<LogoProps>

export const Regular: Story = {
    args: {
        src: modalData.edit.logo.src,
        alt: modalData.edit.logo.alt,
    },
}
