import { Session } from "inspector";
import Link from "next/link";
import { BsGrid3X3 } from "react-icons/bs";
import { BiGrid, BiHomeAlt, BiMoon } from "react-icons/bi"

const Footer = () => {
    return (
        <div className="btm-nav h-16 z-50 text-sm">
            {/* button className = "active" */}
            <button className="">
                <BiGrid size={24} color={"#ccc"} />
                {/* <span className="btm-nav-label">Collections</span> */}
            </button>
            <button className="">
                <BiHomeAlt size={24} color={"#ccc"} />
                {/* <span className="btm-nav-label">Home</span> */}
            </button>
            <button className="">
                <BiMoon size={24} color={"#ccc"}/>
                {/* <span className="btm-nav-label">Mode</span> */}
            </button>
        </div>
    );
};

export default Footer;
