import { ModalBodyProps } from './ModalBody.types'
import { StyledModalBody } from './ModalBody.styles'

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
    return <StyledModalBody>{children}</StyledModalBody>
}

export default ModalBody
