import { Button, ButtonWrapper, MenuButton, NavLinks, TitleContainer, TitleLogo, TitleText, Wrapper } from "./styled"
import Logo from "../../assets/logo.png"
import HeaderText from "../../assets/header-text.png" 
import { NavLink } from "../ui/NavLink"
import { MenuIcon } from "lucide-react"

export const Navbar = () => {
    return(
        <Wrapper>
            <TitleContainer>
                <TitleLogo src={Logo} alt="Logo" />
                <TitleText src={HeaderText} alt="Header Text" />
            </TitleContainer>
            <NavLinks>
                <NavLink title="Home" link="/" />
                <NavLink title="Storyboard" link="/" />
                <NavLink title="Characters" link="/" />
            </NavLinks>
            <ButtonWrapper>
                <Button>MEET THE FAMILY</Button>
            </ButtonWrapper>
            <MenuButton>
                <MenuIcon size={24}/>
            </MenuButton>
        </Wrapper>
    )
}