import {Link} from "react-router-dom";

interface LinkWrapperProps {
    navigateType: "in" | "out";
    navigate: string;
    lang?: string;
    children: React.ReactNode;
}

const LinkWrapper = ({navigateType, navigate, lang, children}: LinkWrapperProps) => {
    if (navigateType === "out") {
        return (
            <a href={navigate} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }


    const path = lang ? `/${lang}${navigate}` : navigate;

    return <Link to={path}>{children}</Link>;
};

export default LinkWrapper;
