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
                        Built a Counter App using React, JavaScript, HTML, CSS, and Tailwind CSS with increment and decrement functionality.
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://gitlab.com/personal3623527/resume"
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
                        Counter App Using React, JavaScript, HTML, and CSS
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://gitlab.com/personal3623527/counter"
                            target="_blank"
                            className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
                        >
                            View on GitHub
                        </Link>
                    </div>

                </div>

                {/* Project 3 */}
                <div className="border rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

                    <h2 className="text-xl font-bold">Fetch API</h2>

                    <p className="text-gray-600 mt-2">
                        Fetching and Displaying Products Using an API
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://gitlab.com/personal3623527/api-products"
                            target="_blank"
                            className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
                        >
                            View on GitHub
                        </Link>
                    </div>

                </div>

                {/* Project 4 */}
                <div className="border rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

                    <h2 className="text-xl font-bold">Captcha</h2>

                    <p className="text-gray-600 mt-2">
                        Built a CAPTCHA Generator using JavaScript, HTML, and CSS with random code generation and user input validation.
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://gitlab.com/personal3623527/captcha"
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
                    Built a Timer App using JavaScript, HTML, and CSS with start, pause, and reset functionality.                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://gitlab.com/personal3623527/timer"
                            target="_blank"
                            className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
                        >
                            View on GitHub
                        </Link>
                    </div>

                </div>

                {/* Project 6 */}
                <div className="border rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

                    <h2 className="text-xl font-bold">Rezome</h2>

                    <p className="text-gray-600 mt-2">
                        Personal Portfolio Website Using HTML, CSS, and JavaScript
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://gitlab.com/personal3623527/personal-site"
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