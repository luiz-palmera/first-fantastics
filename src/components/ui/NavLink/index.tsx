import { Link, Underline, Wrapper } from "./styled";

interface NavLinkProps {
    title: string;
    link: string;
    variant?: "primary" | "secondary";
}

export const NavLink = ({title, link, variant}: NavLinkProps) => {
    return (
        <Wrapper>
            <Link href={link}>
                {title}
            </Link>
            <Underline />
        </Wrapper>
    );
}