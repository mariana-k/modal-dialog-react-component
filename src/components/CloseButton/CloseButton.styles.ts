import styled from 'styled-components'

export const StyledCloseButton = styled.button`
    font-size: var(--md-font-size-large);
    line-height: var(--md-line-height-large);
    font-family: var(--md-font-family);
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--md-color-grey-bright);
    transition: color 0.2s;

    &:hover,
    &:focus {
        color: var(--md-color-grey-dark);
        outline: none;
    }
`
