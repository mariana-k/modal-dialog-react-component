import { StyledIcon } from './Icon.styles'
import { IconProps } from './Icon.types'

const Icon: React.FC<IconProps> = ({ href }) => {
    return (
        <StyledIcon>
            <svg><use href={`${href}`}></use></svg>
        </StyledIcon>
    )
}

export default Icon
