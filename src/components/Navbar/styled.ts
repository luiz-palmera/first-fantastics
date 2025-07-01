import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.surface}; 
    transition: all 0.5s ease; 
    
    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
        height: 35px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        justify-content: space-between;
        align-items: center;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height: 100%;
    width: 25%;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.5s ease;

    &:hover {
        width: 30%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
        width: 10%;
        justify-content: center;
        clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);

        &:hover {
            width: 25%;
            clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 85%;
        justify-content: start;

        &:hover {
            width: 85%;
            clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
        }
    }
`;

export const TitleLogo = styled.img`
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;   
    transition: all 0.5s ease;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
        width: calc(50px * 0.8);
        height: calc(50px * 0.8);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: calc(50px * 0.7);
        height: calc(50px * 0.7);
    }
`;

export const TitleText = styled.img`
    width: 192px;
    height: 32px;
    margin: 0;
    padding: 0;
    opacity: 1;
    visibility: visible;
    transition: 
        opacity 0.5s ease, 
        visibility 0.5s ease, 
        width 0.5s ease, 
        height 0.5s ease;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
        opacity: 0;
        visibility: hidden;
        width: 0;
        height: 0;

        ${TitleContainer}:hover & {
            opacity: 1;
            visibility: visible;
            width: calc(192px * 0.8);
            height: calc(32px * 0.8);
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        opacity: 1;
        visibility: visible;
        width: calc(192px * 0.8);
        height: calc(32px * 0.8);
    }
`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
        width: 55%; 
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;

export const ButtonWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100%;
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 35%;
        height: 100%;
    }
`;

export const Button = styled.button`
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-family: ${({ theme }) => theme.fonts.monospace};
    color: ${({ theme }) => theme.colors.surface};
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
    font-style: italic;
    align-items: center;
    align-self: center;
    height: 80%;

    &:hover {
        height: 100%;
        font-size: ${({ theme }) => theme.fontSizes.lg};
        padding: 15px 25px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        padding: 10px 15px;

        &:hover {
            height: 100%;
            font-size: ${({ theme }) => theme.fontSizes.md};
            padding: 15px 25px;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;

export const MenuButton = styled.button`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: flex;
        background: none;
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary};
        align-self: center;
    }
`;