import { StyledInput } from './TextInput.styles'
import { TextInputProps } from './TextInput.types'
import Message from './../Message'
import Label from '../Label'

const TextInput: React.FC<TextInputProps> = ({
    id,
    value,
    onChange,
    placeholder,
    type = 'text',
    error = null,
    label = '',
}) => {
    return (
        <>
            <Label label={label} htmlFor={id} />
            <StyledInput
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                hasError={error !== null}
            />
            {error && <Message isError={true} text={error} />}
        </>
    )
}

export default TextInput
