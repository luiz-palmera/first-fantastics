import { Link, Underline, Wrapper } from "./styled";
import { navigateTo } from "../../../utils/navigation";

interface NavLinkProps {
    title: string;
    link: string;
}

export const NavLink = ({title, link}: NavLinkProps) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        event.preventDefault();
        navigateTo(link);
    };

    return (
        <Wrapper>
            <Link href={link} onClick={handleClick}>
                {title}
            </Link>
            <Underline />
        </Wrapper>
    );
}
