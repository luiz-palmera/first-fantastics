import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: ${({ theme }) => theme.fonts.body};
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        line-height: 1.5;
        transition: background-color 0.3s ease, color 0.3s ease;
        overflow: hidden;
        height: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        font-family: inherit;
        cursor: pointer;
        background-color: none;
        border: none;
    }
`