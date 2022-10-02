import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar fixed z-50 bg-white h-18 opacity-98">

            {/* タイトル：　NiFT_Blog */}
            <div className="flex-1">
                <Link href={"/"}>
                    <a className="btn btn-ghost normal-case text-xl text-black">NiFT_Blog</a>
                </Link>
            </div>

            {/* ハンバーガーメニュー */}
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>
    )
};

export default Navbar;