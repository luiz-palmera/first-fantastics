import { Button, ButtonWrapper, MenuButton, NavLinks, TitleContainer, TitleLogo, TitleText, ToggleButton, Wrapper } from "./styled"
import logoLight from "../../assets/logo.png"
import logoDark from "../../assets/dark-logo.png"
import textLight from "../../assets/header-text.png" 
import textDark from "../../assets/dark-header.png"
import { NavLink } from "../ui/NavLink"
import { MenuIcon, Moon, Sun } from "lucide-react"
import { useContext, useState } from "react"
import { ThemeContext } from "../../context/themeContextValue"
import { routes } from "../../routes"
import { navigateTo } from "../../utils/navigation"

export const Navbar = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const {mode, toggleTheme} = useContext(ThemeContext);

    const logoSrc = mode === 'light' ? logoLight : logoDark;
    const textSrc = mode === 'light' ? textLight : textDark;

    const handleImageLoad = () => {
        setImagesLoaded(true);
    }

    const handleCharactersClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        event.preventDefault();
        navigateTo("/characters");
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
                {routes.map((route) => (
                    <NavLink key={route.path} title={route.label} link={route.path} />
                ))}
            </NavLinks>
            <ButtonWrapper href="/characters" onClick={handleCharactersClick}>
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
