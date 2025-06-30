import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.surface};   
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
`;

export const TitleLogo = styled.img`
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;   
`;

export const TitleText = styled.img`
    width: 192px;
    height: 32px;
    margin: 0;
    padding: 0;   
`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 100%;
`;

export const ButtonWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100%;
    text-decoration: none;
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
`;