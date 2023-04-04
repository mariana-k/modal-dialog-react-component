import { LinkButtonProps } from './LinkButton.types'
import { StyledLinkButton } from './LinkButton.styles'
import Icon from '../Icon'

const LinkButton: React.FC<LinkButtonProps> = ({ onClick, text, iconHref }) => {
    return (
        <StyledLinkButton hasIcon={typeof iconHref !== undefined} onClick={onClick} aria-label={text}>
            {iconHref && <Icon href={iconHref} />}
            {text}
        </StyledLinkButton>
    )
}

export default LinkButton
