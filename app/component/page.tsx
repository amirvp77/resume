import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <header className="w-full ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                    <Image
                        src="/file_0000000041e0722fb1739fc71dc13cf7.png"
                        alt="Profile"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Navigation */}
                <nav className="flex flex-wrap justify-center gap-6 md:gap-10 font-bold mt-6 md:mt-0">
                    <Link
                        href="/"
                        className="border-b-2 border-transparent hover:border-green-600 transition"
                    >
                        صفحه اصلی
                    </Link>

                    <Link
                        href="/about"
                        className="border-b-2 border-transparent hover:border-green-600 transition"
                    >
                        درباره من
                    </Link>

                    <Link
                        href="/projects"
                        className="border-b-2 border-transparent hover:border-green-600 transition"
                    >
                        پروژه‌ها
                    </Link>

                    <Link
                        href="/info"
                        className="border-b-2 border-transparent hover:border-green-600 transition"
                    >
                        ارتباط
                    </Link>
                </nav>

            </div>
        </header>
    );
}