import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const StyledModal = styled.div`
    margin: 0 auto;
    border-radius: var(--md-border-radius-regular);
    background: var(--md-color-white);

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 50%;
    }
`
export const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`
