import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { StyledModal, StyledModalOverlay } from './Modal.styles'
import { ModalProps } from './Modal.types'

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    closeOnOverlayClick = true,
    closeOnEscapePress = true,
    ariaLabelledby,
    ariaDescribedby,
}) => {
    useEffect(() => {
        const handleEscapePress = (event: KeyboardEvent) => {
            if (closeOnEscapePress && event.key === 'Escape') {
                onClose()
            }
        }
        document.addEventListener('keydown', handleEscapePress)

        return () => {
            document.removeEventListener('keydown', handleEscapePress)
        }
    }, [onClose, closeOnEscapePress])
    const handleClickOutside = (event: React.MouseEvent) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) {
            onClose()
        }
    }

    if (!isOpen) {
        return null
    }
    return ReactDOM.createPortal(
        <StyledModalOverlay onClick={handleClickOutside}>
            <StyledModal role="dialog" aria-labelledby={ariaLabelledby} aria-describedby={ariaDescribedby}>
                {children}
            </StyledModal>
        </StyledModalOverlay>,
        document.getElementById('root')!,
    )
}
export default Modal
