import cardBackground from "../assets/card-background-1.jpg";
import horizontalCardBackground from "../assets/card-background-2.jpg";
import historySubtitleDark from "../assets/subtitle-dark-1.png";
import historySubtitleLight from "../assets/subtitle-light-1.png";
import meetSubtitleDark from "../assets/subtitle-dark-2.png";
import meetSubtitleLight from "../assets/subtitle-light-2.png";
import historyTitleDark from "../assets/title-1-dark.png";
import historyTitleLight from "../assets/title-1-light.png";
import meetTitleDark from "../assets/title-2-dark.png";
import meetTitleLight from "../assets/title-2-light.png";

export type ThemeMode = "light" | "dark";
export type HomeCardArea = "left" | "bottom";

type ThemedImage = Record<ThemeMode, string>;

export interface HomeCardContent {
  area: HomeCardArea;
  titleImage: ThemedImage;
  subtitleImage: ThemedImage;
  cardImage: string;
  variant: "vertical" | "horizontal";
}

export const homeCards: HomeCardContent[] = [
  {
    area: "left",
    titleImage: {
      light: historyTitleLight,
      dark: historyTitleDark,
    },
    subtitleImage: {
      light: historySubtitleLight,
      dark: historySubtitleDark,
    },
    cardImage: cardBackground,
    variant: "vertical",
  },
  {
    area: "bottom",
    titleImage: {
      light: meetTitleLight,
      dark: meetTitleDark,
    },
    subtitleImage: {
      light: meetSubtitleLight,
      dark: meetSubtitleDark,
    },
    cardImage: horizontalCardBackground,
    variant: "horizontal",
  },
];

export const homeCarouselImages = [
  {
    id: "history-card",
    src: cardBackground,
    alt: "Fantastic Four history artwork",
  },
  {
    id: "family-card",
    src: horizontalCardBackground,
    alt: "Fantastic Four family artwork",
  },
];
