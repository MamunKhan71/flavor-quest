const HeroSection = () => {
    return (
        <div className="lexend text-white px-4 lg:px-0">
            <div className="hero h-full lg:h-[600px] rounded-3xl bg-[url('/header.jpeg')]">
                <div className="hero-overlay bg-gradient-to-t opacity-75 brightness-50 from-[#150b2be6] to-[#150b2b00]  rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:px-52 py-8 lg:py-0">
                        <h1 className="mb-5 text-4xl lg:text-5xl font-bold leading-10 lg:leading-[76px] text-white ">Explore Personalized Cooking Classes for Every Taste!</h1>
                        <p className="text-white mb-5 text-center text-lg leading-8">Dive into Tailored Culinary Classes to Uncover Delectable Delights, Nourishing Techniques, and Culinary Creations That Suit Your Palate Perfectly!</p>
                        <div className="flex flex-col-reverse lg:flex-row gap-7 items-center justify-center">
                            <button className="btn w-full lg:w-1/3 rounded-full px-7 bg-transparent border-2 border-white font-semibold text-xl text-white">Our Feedback</button>
                            <button className="btn  w-full lg:w-1/3 rounded-full px-7 bg-[#0be58a] font-semibold text-xl text-[#150B2B] border-none">Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;