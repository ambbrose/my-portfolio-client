"use client";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-y-auto flex-grow">
            <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
                <div>
                    <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                        Hi, I&apos;am <span className="text-[#915eff]">Ambrose</span>
                    </h1>

                    <p className="text-[#b8b5c4] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
                        Am a fullstack developer, I develop web <br className="sm:block hidden" /> and mobile applications
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
