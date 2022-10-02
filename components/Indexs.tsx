
import Link from "next/link"; 

const Indexs = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 p-2 gap-1">

            {/* 新着記事 */}
            <Link href={"/"}>
                <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">新着記事</button>
            </Link>

            {/* 解説記事 */}
            <Link href={"/tag/9_l4gq309kso"}>
                <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">解説記事</button>
            </Link>

            {/* Collection */}
            <Link href={"/Collections"}>
                <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">Collections</button>
            </Link>

            {/* はじめての方に */}
            <Link href={"/tag/f4g2ruh9bb"}>
                <button className="btn btn-outline text-xs rounded-sm h-2 no-animation text-black">はじめての方に</button>
            </Link>
        </div>
    );
};
export default Indexs;
