import Link from "next/link";

const Menu = () => {
    return (
        <>
            {/* <div className="h-16 bg-black">
            </div> */}
            <div className="grid grid-cols-2 bg-black md:grid-cols-4 pt-16">
                <Link href={"/"}>
                    <button className="btn btn-block bg-black border-none rounded-none text-xs h-2 no-animation text-white">ホーム</button>
                </Link>
                <Link href={"/お問い合わせ"}>
                    <button className="btn btn-block bg-black border-none rounded-none text-xs h-2 no-animation text-white">お問い合わせ</button>
                </Link>
                <Link href={"/おすすめのサービス"}>
                    <button className="btn btn-block bg-black border-none rounded-none text-xs h-2 no-animation text-white">おすすめのサービス</button>
                </Link>
                <Link href={"/AboutUS"}>
                    <button className="btn btn-block bg-black border-none rounded-none text-xs h-2 no-animation text-white">About US</button>
                </Link>
            </div>
        </>
    );
};

export default Menu;
