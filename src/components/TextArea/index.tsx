import { TextAreaProps } from './TextArea.types'
import { StyledTextArea } from './TextArea.styles'
import Message from './../Message'
import Label from '../Label'
const TextArea: React.FC<TextAreaProps> = ({ id, value, onChange, placeholder, error = null, label = '' }) => {
    return (
        <>
            <Label label={label} htmlFor={id} />
            <StyledTextArea
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                hasError={error !== null}
            />
            {error && <Message isError={true} text={error} />}
        </>
    )
}

export default TextArea
