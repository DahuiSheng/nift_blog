import { Session } from "inspector";
import Link from "next/link";
import { BsGrid3X3 } from "react-icons/bs";
import { BiGrid, BiHomeAlt, BiMoon } from "react-icons/bi"

const Indexs = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 p-2 gap-1">
            <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">新着記事</button>
            <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">解説記事</button>
            <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">Collections</button>
            <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">始めての方に</button>
        </div>
    );
};

export default Indexs;
