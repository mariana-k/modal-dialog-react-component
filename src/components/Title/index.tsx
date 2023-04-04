import { StyledTitle } from './Title.styles'
import { TitleProps } from './Title.types'

const Title: React.FC<TitleProps> = ({ text }) => {
    return <StyledTitle>{text}</StyledTitle>
}

export default Title
