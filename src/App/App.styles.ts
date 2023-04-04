import styled from 'styled-components'
import { breakpoints } from '../styles/breakpoints'

export const StyledApp = styled.div`
    margin: var(--md-margin-vertical) auto;
    padding: var(--md-padding-vertical) var(--md-padding-horizontal);

    @media only screen and (min-width: ${breakpoints.large}) {
        width: ${breakpoints.large};
    }
`
export const StyledButtonsWrapper = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    gap: var(--md-margin-vertical) var(--md-margin-horizontal);
    width: 30%;
    margin: auto;
`
