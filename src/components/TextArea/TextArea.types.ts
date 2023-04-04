import { ChangeEvent } from 'react'

export interface TextAreaProps {
    id: string
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    placeholder?: string
    error?: string | null
    label?: string
}

export type TextArea = {
    id: string
    value: string
    placeholder?: string
    error?: string | null
    label?: string
}
