import { BorderLogo, CardContainer, CardImage, SubtitleImage, TitleContainer, TitleImage } from "./styled";


interface CardInterface {
    area: string;
    titleImage?: string;
    subtitleImage?: string;
    cardImage?: string;
    variant?: "vertical" | "horizontal";
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const Card = ({area, titleImage, subtitleImage, cardImage, onMouseEnter, onMouseLeave, variant}: CardInterface) => {
    return(
        <CardContainer area={area} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} variant={variant}>
            {/* <BorderLogo src={'placeholder'} alt="Border Logo" /> */}
            <TitleContainer variant={variant}>
                <TitleImage src={titleImage} alt="Title" />
                <SubtitleImage src={subtitleImage} alt="Subtitle" />
            </TitleContainer>
            <CardImage src={cardImage} alt="Card Image" />
        </CardContainer>
    )
}