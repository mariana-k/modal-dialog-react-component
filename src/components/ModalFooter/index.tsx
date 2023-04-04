import { ModalFooterProps } from './ModalFooter.types'
import { StyledModalFooter } from './ModalFooter.styles'
import ActionButton from '../ActionButton'
import LinkButton from '../LinkButton'
import Link from '../../images/icons/link-s.svg'
import Code from '../../images/icons/code-s-fill.svg'
const ModalFooter: React.FC<ModalFooterProps> = ({
    copyText,
    embedText,
    cancelText,
    applyText,
    confirmText,
    onCopy,
    onEmbed,
    onCancel,
    onApply,
    onConfirm,
}) => {
    return (
        <StyledModalFooter>
            {onCopy && <LinkButton iconHref={`${Link}#link-s`} onClick={onCopy} text={copyText} />}
            {onEmbed && <LinkButton iconHref={`${Code}#code-s-fill`} onClick={onEmbed} text={embedText} />}
            {onCancel && (
                <ActionButton onClick={onCancel} variant="secondary">
                    {cancelText}
                </ActionButton>
            )}
            {onApply && (
                <ActionButton onClick={onApply} variant="primary">
                    {applyText}
                </ActionButton>
            )}
            {onConfirm && (
                <ActionButton onClick={onConfirm} variant="primary">
                    {confirmText}
                </ActionButton>
            )}
        </StyledModalFooter>
    )
}

export default ModalFooter
