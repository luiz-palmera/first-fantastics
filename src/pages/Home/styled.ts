import styled from "styled-components";

type GridProps = {
  hovered: 'left' | 'top' | 'bottom' | null;
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-areas:
    "left top"
    "left bottom";

  grid-template-columns: ${({ hovered }) =>
    hovered === "left" ? "1.4fr 2.6fr" : "0.9fr 2.3fr"};

  grid-template-rows: ${({ hovered }) =>
    hovered === "top" ? "1.6fr 0.4fr" :
    hovered === "bottom" ? "0.75fr 1.25fr" :
    "1fr 1fr"};

  gap: ${({ theme }) => theme.spacing.md};
  height: 93vh;
  width: 95vw;
  padding: ${({ theme }) => theme.spacing.lg};
  transition: grid-template-columns 0.4s ease, grid-template-rows 0.4s ease;
`;