import { Link, Underline, Wrapper } from "./styled";

interface NavLinkProps {
    title: string;
    link: string;
}

export const NavLink = ({title, link}: NavLinkProps) => {
    return (
        <Wrapper>
            <Link href={link}>
                {title}
            </Link>
            <Underline />
        </Wrapper>
    );
}
