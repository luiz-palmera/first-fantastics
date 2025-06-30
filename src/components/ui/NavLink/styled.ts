import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.none};
`
export const Link = styled.a`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: ${({ theme }) => theme.fonts.monospace};
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
`
export const Underline = styled.span`
    display: block;
    transform: scaleX(0);
    height: 3px;
    background-color: transparent;
    border-bottom: 2px dashed ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s ease-in-out;

    ${Wrapper}:hover & {
        transform: scaleX(1);
    }
`
