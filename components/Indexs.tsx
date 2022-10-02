import { Session } from "inspector";
import Link from "next/link";
import { BsGrid3X3 } from "react-icons/bs";
import { BiGrid, BiHomeAlt, BiMoon } from "react-icons/bi"
import { Blog } from "../types/blog";
import { Tag } from "../types/tag";
import { client } from "../libs/client";

const Indexs = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 p-2 gap-1">
            <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">新着記事</button>

            <Link href={"/tag/9_l4gq309kso"}>
                <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">解説記事</button>
            </Link>

            <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">Collections</button>

            <Link href={"/tag/f4g2ruh9bb"}>
                <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">はじめての方に</button>
            </Link>
        </div>
    );
};
export default Indexs;
