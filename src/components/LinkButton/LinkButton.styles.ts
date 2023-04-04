import styled from 'styled-components'

export const StyledLinkButton = styled.button<{ hasIcon: boolean }>`
    font-size: var(--md-font-size-small);
    line-height: var(--md-line-height-small);
    font-family: var(--md-font-family);
    text-decoration: none;
    color: var(--md-color-primary);
    cursor: pointer;
    background: transparent;
    border: none;
    display: ${({ hasIcon }) => (hasIcon ? 'flex' : 'block')};
    align-items: center;

    &:hover {
        text-decoration: underline;
    }
`
