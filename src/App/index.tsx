import { useState } from 'react'
import Modal from '../components/Modal'
import { modalData, appData } from '../utils/mockData'
import ActionButton from '../components/ActionButton'
import { StyledApp, StyledButtonsWrapper } from './App.styles'
import ModalBody from '../components/ModalBody'
import Logo from '../components/Logo'
import ModalFooter from '../components/ModalFooter'
import ModalHeader from '../components/ModalHeader'
import TextArea from '../components/TextArea'
import TextInput from '../components/TextInput'
import Paragraph from '../components/Paragraph'
import Info from '../images/icons/information-fill.svg'
import Icon from '../components/Icon'

const App = () => {
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false)
    const [isConfirmOpen, setIsConfrimOpen] = useState<boolean>(false)
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false)
    const [textAreaValue, setTextAreaValue] = useState<string>(modalData.edit.textarea.value)
    const [inputValue, setInputValue] = useState<string>(modalData.edit.input.value)
    const [inputError, setInputError] = useState<string | null>(null)
    const [textAreaError, setTextAreaError] = useState<string | null>(null)
    const handleCloseAllModals = () => {
        setIsEditOpen(false)
        setIsConfrimOpen(false)
        setIsAlertOpen(false)
    }
    const handleEditModal = () => {
        handleCloseAllModals()
        setIsEditOpen(!isEditOpen)
    }
    const handleConfirmModal = () => {
        handleCloseAllModals()
        setIsConfrimOpen(!isConfirmOpen)
    }
    const handleAlertModal = () => {
        handleCloseAllModals()
        setIsAlertOpen(!isAlertOpen)
    }
    const onClose = () => {
        setIsEditOpen(false)
    }
    const onCancel = () => {
        setIsEditOpen(false)
    }
    const onApply = () => {
        setIsEditOpen(false)
    }
    const onCopy = () => {
        setIsEditOpen(false)
    }
    const onEmbed = () => {
        setIsEditOpen(false)
    }
    const handleOnChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setTextAreaValue(e.target.value)
        textAreaValue.length < 3 ? setTextAreaError(modalData.edit.textarea.error) : setTextAreaError(null)
    }
    const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value)
        inputValue.length < 3 ? setInputError(modalData.edit.input.error) : setInputError(null)
    }
    const onConfirmClose = () => {
        setIsConfrimOpen(false)
    }
    const onConfirmApply = () => {
        setIsConfrimOpen(false)
    }
    const onConfirmCancel = () => {
        setIsConfrimOpen(false)
    }
    const onAlertClose = () => {
        setIsAlertOpen(false)
    }
    const onAlertApply = () => {
        setIsAlertOpen(false)
    }

    return (
        <StyledApp>
            <StyledButtonsWrapper>
                <ActionButton onClick={handleEditModal}>{appData.buttons.edit}</ActionButton>
                <ActionButton onClick={handleConfirmModal}>{appData.buttons.confirm}</ActionButton>
                <ActionButton onClick={handleAlertModal}>{appData.buttons.alert}</ActionButton>
            </StyledButtonsWrapper>
            {isEditOpen && (
                <Modal onClose={handleEditModal} isOpen={isEditOpen}>
                    <ModalHeader title={modalData.edit.title} onClose={onClose} />
                    <ModalBody>
                        <Logo src={modalData.edit.logo.src} alt={modalData.edit.logo.alt} />
                        <TextInput
                            id={modalData.edit.input.id}
                            value={inputValue}
                            placeholder={modalData.edit.input.placeholder}
                            label={modalData.edit.input.label}
                            error={inputError}
                            onChange={handleOnChangeInput}
                        />
                        <TextArea
                            id={modalData.edit.textarea.id}
                            value={textAreaValue}
                            placeholder={modalData.edit.textarea.placeholder}
                            label={modalData.edit.textarea.label}
                            error={textAreaError}
                            onChange={handleOnChangeTextArea}
                        />
                    </ModalBody>
                    <ModalFooter
                        onCopy={onCopy}
                        onEmbed={onEmbed}
                        onCancel={onCancel}
                        onApply={onApply}
                        copyText={modalData.edit.footer.copyText}
                        embedText={modalData.edit.footer.embedText}
                        cancelText={modalData.edit.footer.cancelText}
                        applyText={modalData.edit.footer.applyText}
                    />
                </Modal>
            )}
            {isConfirmOpen && (
                <Modal onClose={handleConfirmModal} isOpen={isConfirmOpen}>
                    <ModalHeader title={modalData.confirm.title} onClose={onConfirmClose} />
                    <ModalBody>
                        <Paragraph>
                            <Icon href={`${Info}#information-fill`} />
                            {modalData.confirm.text}
                        </Paragraph>
                    </ModalBody>
                    <ModalFooter
                        onApply={onConfirmApply}
                        onCancel={onConfirmCancel}
                        applyText={modalData.confirm.footer.applyText}
                        cancelText={modalData.confirm.footer.cancelText}
                    />
                </Modal>
            )}
            {isAlertOpen && (
                <Modal onClose={handleAlertModal} isOpen={isAlertOpen}>
                    <ModalHeader title={modalData.alert.title} onClose={onAlertClose} />
                    <ModalBody>
                        <Paragraph>{modalData.alert.text}</Paragraph>
                    </ModalBody>
                    <ModalFooter onApply={onAlertApply} applyText={modalData.alert.footer.applyText} />
                </Modal>
            )}
        </StyledApp>
    )
}

export default App
