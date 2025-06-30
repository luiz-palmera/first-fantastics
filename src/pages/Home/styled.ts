import styled from "styled-components";


export const Title = styled.h1`
    display: flex;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    color: ${({ theme }) => theme.colors.primary};
    align-self: center;
    justify-content: center;
`