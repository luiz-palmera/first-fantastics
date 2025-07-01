import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Link = styled.a`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: ${({ theme }) => theme.fonts.monospace};
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }

`
export const Underline = styled.span`
    display: block;
    transform: scaleX(0);
    height: 3px;
    background-color: transparent;
    border-top: 2px dashed ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s ease-in-out;

    ${Wrapper}:hover & {
        transform: scaleX(1);
    }
`
