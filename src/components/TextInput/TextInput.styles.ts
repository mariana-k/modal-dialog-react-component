import styled from 'styled-components'

export const StyledInput = styled.input<{ hasError: boolean }>`
    display: block;
    width: 100%;
    padding: var(--md-padding-vertical) var(--md-padding-horizontal);
    font-size: var(--md-font-size-medium);
    line-height: var(--md-line-height-medium);
    font-family: var(--md-font-family);
    color: var(--md-color-grey-bright);
    border: 1px solid ${({ hasError }) => (hasError ? 'var(--md-color-error)' : 'var(--md-color-grey-light)')};
    border-radius: var(--md-border-radius-regular);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: ${({ hasError }) => (hasError ? 'var(--md-color-error)' : 'var(--md-color-grey-light)')};
        box-shadow: ${({ hasError }) =>
            hasError ? '0 0 0 0.2rem rgba(220, 53, 69, 0.25)' : '0 0 0 0.2rem rgba(0, 123, 255, 0.25)'};
    }
`
