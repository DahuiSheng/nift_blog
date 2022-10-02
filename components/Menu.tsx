
const Menu = () => {
    return (
        <>
            <div className="h-16 bg-black">
            </div>
            <div className="grid grid-cols-2 bg-black md:grid-cols-4">
                <button className="btn btn-block bg-black border-none rounded-none text-xs h-2 no-animation text-white">ホーム</button>
                <button className="btn btn-block bg-black border-none rounded-none text-xs h-2 no-animation text-white">お問い合わせ</button>
                <button className="btn btn-block bg-black border-none rounded-none text-xs h-2 no-animation text-white">おすすめのサービス</button>
                <button className="btn btn-block bg-black border-none rounded-none text-xs h-2 no-animation text-white">About US</button>
            </div>
        </>
    );
};

export default Menu;
