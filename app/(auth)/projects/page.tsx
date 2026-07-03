import Link from "next/link";

export default function Projects() {
    return (
        <main className="min-h-screen px-6 py-16">

            {/* Title */}
            <h1 className="text-4xl font-bold text-center">
                My Projects
            </h1>

            <p className="text-center text-gray-500 mt-3">
                برخی از پروژه‌هایی که روی آن‌ها کار کرده‌ام
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">

                {/* Project Card */}
                <div className="border rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

                    <h2 className="text-xl font-bold">Portfolio Website</h2>

                    <p className="text-gray-600 mt-2">
                         سایت دیجی کالا با Html و  CSS و JavaScript
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://github.com/yourusername/portfolio"
                            target="_blank"
                            className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
                        >
                            View on GitHub
                        </Link>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="border rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

                    <h2 className="text-xl font-bold">Counter</h2>

                    <p className="text-gray-600 mt-2">
                       اضافه کردن محصول با react
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://github.com/yourusername/todo-app"
                            target="_blank"
                            className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
                        >
                            View on GitHub
                        </Link>
                    </div>

                </div>

                {/* Project 3 */}
                <div className="border rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

                    <h2 className="text-xl font-bold">Weather App</h2>

                    <p className="text-gray-600 mt-2">
                        نمایش وضعیت آب و هوا با API
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://github.com/yourusername/weather-app"
                            target="_blank"
                            className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
                        >
                            View on GitHub
                        </Link>
                    </div>

                </div>

                {/* Project 4 */}
                <div className="border rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

                    <h2 className="text-xl font-bold">Rose Company </h2>

                    <p className="text-gray-600 mt-2">
                       سایت با Html , Css
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://github.com/yourusername/weather-app"
                            target="_blank"
                            className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
                        >
                            View on GitHub
                        </Link>
                    </div>

                </div>

                {/* Project 5 */}
                <div className="border rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

                    <h2 className="text-xl font-bold">Timer</h2>

                    <p className="text-gray-600 mt-2">
                       تایمر با استفاده از JavaScript
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://github.com/yourusername/weather-app"
                            target="_blank"
                            className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
                        >
                            View on GitHub
                        </Link>
                    </div>

                </div>

                {/* Project 6 */}
                <div className="border rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

                    <h2 className="text-xl font-bold">Game Site</h2>

                    <p className="text-gray-600 mt-2">
                        سایت معرفی بازی با استفاده از Html , Css
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://github.com/yourusername/weather-app"
                            target="_blank"
                            className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
                        >
                            View on GitHub
                        </Link>
                    </div>

                </div>

            </div>

        </main>
    );
}