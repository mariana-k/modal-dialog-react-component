import { ParagraphProps } from './Paragraph.types'
import { StyledParagraph } from './Paragraph.styles'
const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
    return <StyledParagraph>{children}</StyledParagraph>
}

export default Paragraph
