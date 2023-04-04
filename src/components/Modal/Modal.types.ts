export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    closeOnOverlayClick?: boolean
    closeOnEscapePress?: boolean
    ariaLabelledby?: string
    ariaDescribedby?: string
}
