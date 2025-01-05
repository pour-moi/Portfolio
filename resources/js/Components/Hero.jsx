export default function Hero() {
    return (
        <>
            <div className="hero_container flex justify-around items-center bg-slate-900 text-white">
                <div className="hero_pages w-1/3 flex flex-col justify-around gap-2 pl-24">
                    <p className="font-bold text-xl">Hello, my name is</p>
                    <h2 className="font-bold text-5xl">Biruk Mekonnen</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tempore, eligendi aut laborum distinctio tenetur
                        perferendis libero quidem !
                    </p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2">
                        Contact Me
                    </button>
                </div>
                <div className="w-1/3">
                    <img src="/animoji/IMG_0135.PNG" alt="" />
                </div>
            </div>
        </>
    );
}
