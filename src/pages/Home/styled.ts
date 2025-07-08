import styled from "styled-components";

type GridProps = {
  hovered: 'left' | 'top' | 'bottom' | null;
};

export const Content = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-areas:
    "left top"
    "left bottom";

  grid-template-columns: ${({ hovered }) =>
    hovered === "left" ? "1.4fr 2.6fr" : "0.9fr 2.3fr"};

  grid-template-rows: ${({ hovered }) =>
    hovered === "top" ? "1.6fr 0.4fr"
    : hovered === "bottom" ? "0.75fr 1.25fr"
    : "1fr 1fr"};

  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: grid-template-columns 0.4s ease, grid-template-rows 0.4s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    padding: ${({ theme }) => theme.spacing.md};
    & > * {
      flex: 1 1 0;
      min-height: 0;
      min-width: 0;
    }
  }
`;