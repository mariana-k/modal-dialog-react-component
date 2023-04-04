import styled from 'styled-components'

export const StyledMessage = styled.span<{ isError: boolean }>`
    font-size: var(--md-font-size-small);
    line-height: var(--md-line-height-small);
    font-family: var(--md-font-family);
    margin-top: var(--md-margin-vertical);
    color: ${({ isError }) => (isError ? 'var(--md-color-error)' : 'var(--md-color-grey-bright)')};
`
