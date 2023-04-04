import { ChangeEvent } from 'react'

export interface TextInputProps {
    id: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    type?: 'text' | 'password' | 'email'
    error?: string | null
    label?: string
}

export type TextInput = {
    id: string
    value: string
    placeholder?: string
    type?: 'text' | 'password' | 'email'
    error?: string | null
    label?: string
}
