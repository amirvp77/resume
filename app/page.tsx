import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
    
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 lg:px-20 py-16">

        <h1 className="text-5xl font-bold">
          I'm <span className="text-green-500">Amir</span>, I'm a Front-End Developer <br />
          passionate about building modern websites.
        </h1>

        <div className="image w-50 h-50 rounded-full overflow-hidden ">

          <img 
            src="/file_0000000041e0722fb1739fc71dc13cf7.png" 
          alt="Profile" 
          className="object-cover"
          />

        </div>

      </div>

      <div className="btn flex j gap-10 ml-30">
        <button className="w-[200] h-[60] bg-black rounded-[46px] text-amber-50 font-bold hover:bg-green-600 transition-all duration-200 hover:text-black">read the blog</button>
        <button className="w-[200] h-[60] bg-gray-200 rounded-[46px] font-bold hover:bg-purple-400 transition-all duration-200 hover:text-amber-50">more about me</button>
        
      </div>

    </main>
    )
}
