import type { ReactNode } from "react";
import { Characters } from "./pages/Characters";
import { Home } from "./pages/Home";
import { StoryBoard } from "./pages/StoryBoard";

export interface AppRoute {
  path: string;
  label: string;
  element: ReactNode;
}

export const routes: AppRoute[] = [
  {
    path: "/",
    label: "Home",
    element: <Home />,
  },
  {
    path: "/storyboard",
    label: "Storyboard",
    element: <StoryBoard />,
  },
  {
    path: "/characters",
    label: "Characters",
    element: <Characters />,
  },
];

export const normalizePath = (path: string) => {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
};
