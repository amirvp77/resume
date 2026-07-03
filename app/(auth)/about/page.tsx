import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen px-6 py-10">

            {/* پروفایل */}
            
            <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-purple-500 rounded-full overflow-hidden mx-auto">
                <Image
                    src="/file_0000000041e0722fb1739fc71dc13cf7.png"
                    alt="Profile"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* عنوان */}

            <div className="text-center mt-8">
                <h2 className="text-lg md:text-xl">
                    Hey there I'm
                </h2>

                <h1 className="text-3xl md:text-5xl font-bold mt-2">
                    Amir Reza Valipour
                </h1>

                <p className="mt-3 text-gray-600 text-lg">
                    Front-End Developer
                </p>
            </div>

            {/* درباره من */}

            <div className="max-w-4xl mx-auto mt-10">
                <p className="text-gray-700 leading-8 text-center text-base md:text-lg">
                    من امیر هستم، دانشجوی علوم کامپیوتر و علاقه‌مند به توسعه فرانت‌اند.
                    از زمانی که وارد دنیای برنامه‌نویسی شدم، همیشه از ساخت رابط‌های کاربری
                    زیبا، سریع و کاربردی لذت برده‌ام. در حال حاضر روی یادگیری
                    <span className="text-green-600 font-bold">
                        {" "}
                        HTML، CSS، Tailwind CSS، JavaScript، React و Next.js{" "}
                    </span>
                    تمرکز کرده‌ام و تلاش می‌کنم با انجام پروژه‌های واقعی، مهارت‌های خودم را
                    هر روز بهتر کنم. هدف من طراحی وب‌سایت‌های مدرن، ریسپانسیو و با تجربه
                    کاربری مناسب است.
                </p>
            </div>

            {/* دوره ها */}

            <h1 className="text-center text-2xl p-4 font-bold "> ~ probation ~  </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                <div className="border-4 border-blue-600 rounded-3xl shadow-xl p-6 text-center hover:scale-105 transition duration-300">
                    <h3 className="text-xl font-bold mb-4">
                        Web Design 1
                    </h3>

                    <p>طول دوره: ۵۰ ساعت</p>

                    <div className="flex justify-between mt-8">
                        <span>1404</span>
                        <span className="font-semibold">
                            مجتمع فنی تهران
                        </span>
                    </div>
                </div>

                <div className="border-4 border-green-600 rounded-3xl shadow-xl p-6 text-center hover:scale-105 transition duration-300">
                    <h3 className="text-xl font-bold mb-4">
                        Web Design 2
                    </h3>

                    <p>طول دوره: ۵۰ ساعت</p>

                    <div className="flex justify-between mt-8">
                        <span>1404</span>
                        <span className="font-semibold">
                            مجتمع فنی تهران
                        </span>
                    </div>
                </div>

                <div className="border-4 border-purple-600 rounded-3xl shadow-xl p-6 text-center hover:scale-105 transition duration-300">
                    <h3 className="text-xl font-bold mb-4">
                        Web Design 3
                    </h3>

                    <p>طول دوره: ۵۰ ساعت</p>

                    <div className="flex justify-between mt-8">
                        <span>1404</span>
                        <span className="font-semibold">
                            مجتمع فنی تهران
                        </span>
                    </div>
                </div>

            </div>

        </main>
    );
}