import { ReactNode } from "react";
import Footer from "./Footer";
import Indexs from "./Indexs";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Seo from "./_common/Seo";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Seo />
            <Navbar />
            <Menu />
            <Indexs/>
            <main className="p-4">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
