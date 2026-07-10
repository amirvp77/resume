export default function Contact() {
    return (
        <main className="min-h-screen px-6 py-16">

            <h1 className="text-4xl font-bold text-center">
                Contact Me
            </h1>

            <p className="text-center text-gray-500 mt-3">
                اگر دوست دارید با من در ارتباط باشید، از راه‌های زیر می‌توانید تماس بگیرید.
            </p>

            <div className="w-[600] mt-14 max-w-5xl mx-auto">

                {/* اطلاعات تماس */}
                <div className="bg-white shadow-xl rounded-3xl p-8">

                    <h2 className="text-2xl text-center font-bold mb-6">
                        اطلاعات تماس
                    </h2>

                    <div className="space-y-5">

                        <p>
                            📧 <span className="font-semibold">Email:</span><br />
                            amirvalipour743@gmail.com
                        </p>

                        <p >
                            📞 <span  className="font-semibold ">Phone: </span><br />
                            +98 922 401 9745
                        </p>

                        <p>
                            💻 <span className="font-semibold">GitHub:</span><br />
                            github.com/amirvp77
                        </p>

                        <p>
                            📱 <span className="font-semibold">telgeram:</span><br />
                            telgeram.com/in/amirvp77
                        </p>

                        <p>
                            📍 <span className="font-semibold">Location:</span><br />
                            Tehran, Iran
                        </p>

                        

                    </div>

                </div>

                {/* فرم تماس */}
                {/* <div className="bg-white shadow-xl rounded-3xl p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Send Message
                    </h2>

                    <form className="space-y-5">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border rounded-xl p-3 outline-none focus:border-green-500"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border rounded-xl p-3 outline-none focus:border-green-500"
                        />

                        <textarea
                            rows={5}
                            placeholder="Your Message"
                            className="w-full border rounded-xl p-3 outline-none focus:border-green-500"
                        />

                        <button
                            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
                        >
                            Send Message
                        </button>

                    </form>

                </div> */}

            </div>

        </main>
    );
}