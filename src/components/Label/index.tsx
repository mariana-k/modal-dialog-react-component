import { StyledLabel } from './Label.styles'
import { LabelProps } from './Label.types'

const Label: React.FC<LabelProps> = ({ label, htmlFor }) => {
    return <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
}

export default Label
