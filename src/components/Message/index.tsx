import { StyledMessage } from './Message.styles'
import { MessageProps } from './Message.types'

const Message: React.FC<MessageProps> = ({ text, isError = false }) => {
    return <StyledMessage isError={isError}>{text}</StyledMessage>
}

export default Message
