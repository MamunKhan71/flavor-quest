const HeroSection = () => {
    return (
        <div className="lexend text-white">
            <div className="hero h-[600px] rounded-3xl bg-[url('header.jpeg')]">
                <div className="hero-overlay bg-gradient-to-t opacity-60 from-[#150b2be6] to-[#150b2b00]  rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="px-52">
                        <h1 className="mb-5 text-5xl font-bold leading-[76px] text-white">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5 text-center text-lg leading-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="flex gap-7 items-center justify-center">
                            <button className="btn rounded-full px-7 bg-[#0be58a] font-semibold text-xl text-[#150B2B] border-none">Explore Now</button>
                            <button className="btn rounded-full px-7 bg-transparent border-2 border-white font-semibold text-xl text-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;