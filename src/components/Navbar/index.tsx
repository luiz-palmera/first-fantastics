import { Button, ButtonWrapper, MenuButton, NavLinks, TitleContainer, TitleLogo, TitleText, ToggleButton, Wrapper } from "./styled"
import logoLight from "../../assets/logo.png"
import logoDark from "../../assets/dark-logo.png"
import textLight from "../../assets/header-text.png" 
import textDark from "../../assets/dark-header.png"
import { NavLink } from "../ui/NavLink"
import { MenuIcon, Moon, Sun } from "lucide-react"
import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const Navbar = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const {mode, toggleTheme} = useContext(ThemeContext);

    const logoSrc = mode === 'light' ? logoLight : logoDark;
    const textSrc = mode === 'light' ? textLight : textDark;

    const handleImageLoad = () => {
        setImagesLoaded(true);
    }

    return(
        <Wrapper>
            <TitleContainer>
                <TitleLogo
                    src={logoSrc}
                    alt="Logo"
                    onLoad={handleImageLoad}
                    $isVisible={imagesLoaded}
                />
                <TitleText
                    src={textSrc}
                    alt="Header Text"
                    onLoad={handleImageLoad}
                    $isVisible={imagesLoaded}
                />
            </TitleContainer>
            <NavLinks>
                <NavLink title="Home" link="/" />
                <NavLink title="Storyboard" link="/" />
                <NavLink title="Characters" link="/" />
            </NavLinks>
            <ButtonWrapper>
                <Button>
                    MEET THE FAMILY
                </Button>
            </ButtonWrapper>
            <ToggleButton onClick={toggleTheme}>
                {mode === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </ToggleButton>
            <MenuButton>
                <MenuIcon size={24}/>
            </MenuButton>
        </Wrapper>
    )
}