import { Session } from "inspector";
import Link from "next/link";
import { BsGrid3X3 } from "react-icons/bs";
import { BiGrid, BiHomeAlt, BiMoon, BiSun } from "react-icons/bi"

const Footer = () => {
    return (
        <div className="btm-nav h-16 z-50 text-sm">
            {/* button className = "active" */}
            <Link href={"/Collection"}>
                <button className="">
                    <BiGrid size={24} color={"#ccc"} />
                    {/* <span className="btm-nav-label">Collections</span> */}
                </button>
            </Link>
            <Link href={"/"}>
                <button className="">
                    <BiHomeAlt size={24} color={"#ccc"} />
                    {/* <span className="btm-nav-label">Home</span> */}
                </button>
            </Link>
            <label className="swap swap-rotate">
                <input type="checkbox" />
                <BiMoon className="swap-on" size={24} color={"#ccc"} />
                <BiSun className="swap-off" size={24} color={"#000000"} />
            </label>
        </div>
    );
};

export default Footer;
