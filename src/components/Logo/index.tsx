import { StyledLogo } from './Logo.styles'
import { LogoProps } from './Logo.types'

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
    return <StyledLogo src={src} alt={alt} />
}

export default Logo
