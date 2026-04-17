import { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { ImageCarousel } from "../../components/ImageCarousel";
import { Navbar } from "../../components/Navbar";
import { ThemeContext } from "../../context/themeContextValue";
import {
  homeCards,
  homeCarouselImages,
  type HomeCardArea,
} from "../../data/home";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Content, Grid, CarouselPanel } from "./styled";

type HoveredArea = HomeCardArea | "top" | null;

export const Home = () => {
  const { mode } = useContext(ThemeContext);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hoveredArea, setHoveredArea] = useState<HoveredArea>(null);

  return (
    <Content>
      <Navbar />
      <Grid $hovered={hoveredArea}>
        {homeCards.map((card) => (
          <Card
            key={card.area}
            area={card.area}
            titleImage={card.titleImage[mode]}
            subtitleImage={card.subtitleImage[mode]}
            cardImage={card.cardImage}
            onMouseEnter={() => setHoveredArea(card.area)}
            onMouseLeave={() => setHoveredArea(null)}
            variant={
              isMobile && card.area === "left" ? "horizontal" : card.variant
            }
          />
        ))}

        <CarouselPanel
          onMouseEnter={() => setHoveredArea("top")}
          onMouseLeave={() => setHoveredArea(null)}
        >
          <ImageCarousel
            autoPlay
            autoPlayInterval={2000}
            height="100%"
            images={homeCarouselImages}
          />
        </CarouselPanel>
      </Grid>
    </Content>
  );
};
