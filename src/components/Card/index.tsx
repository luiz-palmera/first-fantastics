import {
  CardContainer,
  CardImage,
  SubtitleImage,
  TitleContainer,
  TitleImage,
} from "./styled";

interface CardProps {
  area: string;
  titleImage: string;
  subtitleImage: string;
  cardImage: string;
  variant?: "vertical" | "horizontal";
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const Card = ({
  area,
  titleImage,
  subtitleImage,
  cardImage,
  onMouseEnter,
  onMouseLeave,
  variant = "vertical",
}: CardProps) => (
  <CardContainer
    $area={area}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    $variant={variant}
  >
    <TitleContainer $variant={variant}>
      <TitleImage src={titleImage} alt="Title" $variant={variant} />
      <SubtitleImage src={subtitleImage} alt="Subtitle" $variant={variant} />
    </TitleContainer>
    <CardImage src={cardImage} alt="Card Image" />
  </CardContainer>
);
