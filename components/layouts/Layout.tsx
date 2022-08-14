import { ReactNode } from "react";
import FooterB from "../footer/Footer";
import Navbar from "../navbar/Navbar";


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <FooterB />
        </>
    )
}

export default Layout;