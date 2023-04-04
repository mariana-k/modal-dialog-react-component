import CloseButton from './../CloseButton'
import { StyledModalHeader } from './ModalHeader.styles'
import Title from '../Title'
import { ModalHeaderProps } from './ModalHeader.types'

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose, hideCloseButton = false }) => {
    return (
        <StyledModalHeader>
            <Title text={title} />
            {!hideCloseButton && <CloseButton onClick={onClose} />}
        </StyledModalHeader>
    )
}

export default ModalHeader
