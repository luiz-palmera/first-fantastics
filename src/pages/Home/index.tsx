import historyTitleLight from "../../assets/title-1-light.png"
import historyTitleDark from "../../assets/title-1-dark.png"
import historySubtitleLight from "../../assets/subtitle-light-1.png"
import historySubtitleDark from "../../assets/subtitle-dark-1.png"
import meetTitleLight from "../../assets/title-2-light.png"
import meetTitleDark from "../../assets/title-2-dark.png"
import meetSubtitleLight from "../../assets/subtitle-light-2.png"
import meetSubtitleDark from "../../assets/subtitle-dark-2.png"
import cardBackground from "../../assets/card-background-1.jpg"
import horizontalCardBackground from "../../assets/card-background-2.jpg"
import { Card } from "../../components/Card"
import { Navbar } from "../../components/Navbar"
import { Content, Grid } from "./styled"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { fetchCharacters } from "../../services/marvel"

export const Home = () => {

    const {mode} = useContext(ThemeContext);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const historyTitle = mode === "dark" ? historyTitleDark : historyTitleLight; 
    const historySubtitle = mode === "dark" ? historySubtitleDark : historySubtitleLight;
    const meetTitle = mode === "dark" ? meetTitleDark : meetTitleLight;
    const meetSubtitle = mode === "dark" ? meetSubtitleDark : meetSubtitleLight;

    const [hoveredCard, setHoveredCard] = useState<'left' | 'top' | 'bottom' | null>(null);

    useEffect(() => {
        const loadCharacters = async () => {
            const characters = await fetchCharacters();
            console.log(characters);
        }
        loadCharacters();
    }, []);

    return (
        <Content>
            <Navbar/>
            <Grid hovered={hoveredCard}>
                <Card 
                    area="left"
                    titleImage={historyTitle}
                    cardImage={cardBackground}
                    subtitleImage={historySubtitle}
                    onMouseEnter={() => setHoveredCard('left')}
                    onMouseLeave={() => setHoveredCard(null)}
                    variant={isMobile ? "horizontal" : "vertical"}
                />
                <Card 
                    area="top"
                    variant="horizontal"
                />
                <Card
                    titleImage={meetTitle}
                    subtitleImage={meetSubtitle}
                    cardImage={horizontalCardBackground}
                    area="bottom"
                    onMouseEnter={() => setHoveredCard('bottom')}
                    onMouseLeave={() => setHoveredCard(null)}
                    variant="horizontal"
                />
            </Grid>
        </Content>
    )
}