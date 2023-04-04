import styled from 'styled-components'

export const StyledActonButton = styled.button<{ variant: 'primary' | 'secondary' }>`
    background-color: ${({ variant }) => (variant === 'primary' ? 'var(--md-color-primary)' : 'var(--md-color-white)')};
    border: 1px solid transparent;
    border-color: ${({ variant }) => (variant === 'primary' ? 'var(--md-color-white)' : 'var(--md-color-primary)')};
    color: ${({ variant }) => (variant === 'primary' ? 'var(--md-color-white)' : 'var(--md-color-primary)')};
    padding: var(--md-padding-vertical) var(--md-padding-horizontal);
    font-size: var(--md-font-size-medium);
    line-height: var(--md-line-height-medium);
    font-family: var(--md-font-family);
    border-radius: var(--md-border-radius-regular);
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        border-color: ${({ variant }) => (variant === 'primary' ? 'var(--md-color-primary)' : 'var(--md-color-white)')};
        background-color: ${({ variant }) => (variant === 'primary' ? 'var(--md-color-white)' : 'var(--md-color-primary)')};
        color: ${({ variant }) => (variant === 'primary' ? 'var(--md-color-primary)' : 'var(--md-color-white)')};

    &:focus {
        outline: none;
    }

    &:disabled {
        background-color: var(--md-color-grey-light);
        cursor: not-allowed;
    }
`
