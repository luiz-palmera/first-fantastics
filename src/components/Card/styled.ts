import styled from "styled-components";

type titleProps = {
    variant?: "vertical" | "horizontal";
    area?: string;
}

export const CardContainer = styled.div<titleProps>`
    display: flex;
    flex-direction: ${({variant}) => variant === "horizontal" ? "row-reverse" : "column"};
    align-items: ${({ variant }) => variant === "horizontal" ? null : "center"};
    grid-area: ${({ area }) => area};
    position: relative;
    background-size: cover;
    background-position: center;
    background-color: ${({ theme }) => theme.colors.primary};
    overflow: hidden;
    transition: all 0.4s ease, transform 0.4s ease;
    will-change: transform;
    cursor: pointer;
`

export const TitleContainer = styled.div<titleProps>`
    width: ${({ variant }) => variant === "horizontal" ? "40%" : "100%"};
    display: flex;
    flex-direction: ${({ variant }) => variant === "horizontal" ? "column"  : "row" };
    gap: 0.2rem;
    align-items: ${({ variant }) => variant === "horizontal" ? "flex-start" : "end"};
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => theme.spacing.sm};
`;

export const TitleImage = styled.img<titleProps>`
    width: auto;
    max-height: 15vh;
    object-fit: cover;
    transition: all 0.4s ease-in-out;
    margin-left: ${({ variant, theme }) => variant === "horizontal" ? theme.spacing.xl : "0"};

    ${CardContainer}:hover & {
        margin: ${({ variant, theme }) => variant === "horizontal" ? theme.spacing.xl : "0"};
    }
`;

export const SubtitleImage = styled.img<titleProps>`
    visibility: hidden;
    width: auto;
    height: 8.5vh;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
    z-index: 2;
    transform: translateX(-30px);
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;

    ${CardContainer}:hover & {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
    }
`

export const BorderLogo = styled.img`
    position: absolute;
    top: 90px;
    left: 250px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.2;
    z-index: 200;
    transition: opacity 0.3s ease;
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
`