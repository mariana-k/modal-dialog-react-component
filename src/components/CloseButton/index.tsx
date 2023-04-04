import { CloseButtonProps } from './CloseButton.types'
import { StyledCloseButton } from './CloseButton.styles'
const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
    return (
        <StyledCloseButton onClick={onClick} aria-label="Close modal">
            &times;
        </StyledCloseButton>
    )
}

export default CloseButton
