import { ActionButtonProps } from './ActionButton.types'
import { StyledActonButton } from './ActionButton.styles'
const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children, variant = 'primary' }) => {
    return (
        <StyledActonButton onClick={onClick} variant={variant}>
            {children}
        </StyledActonButton>
    )
}

export default ActionButton
