export interface ModalFooterProps {
    copyText?: string
    embedText?: string
    cancelText?: string
    applyText?: string
    confirmText?: string
    onCopy?: () => void
    onEmbed?: () => void
    onCancel?: () => void
    onApply?: () => void
    onConfirm?: () => void
}

export type ModalFooter = {
    copyText?: string
    embedText?: string
    cancelText?: string
    applyText?: string
    confirmText?: string
}
