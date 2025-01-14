export default function Header() {
    return (
        <>
            <header className="bg-slate-900 text-white flex justify-around py-4">
                <div className="name">KU</div>
                <nav>
                    <ul className="flex gap-6">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        {/* <li>Skills</li> */}
                        <li>Projects</li>
                        {/* <li>Blog</li> */}
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
