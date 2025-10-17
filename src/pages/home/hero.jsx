const Hero = () => {
  return (
    <div className="bg-blue-900 text-white">
      <div className="container mx-auto py-10 md:pt-[100px] md:pb-[120px] grid md:grid-cols-2 gap-5 items-center">
        
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="text-3xl md:text-4xl font-bold">COVID-19 LIVE TRACKING</h1>
          <p className="text-gray-300">
            COVID-19 is an infectious disease caused by the severe acute respiratory
            syndrome coronavirus. The first case was identified in Wuhan, Hubei Province,
            China, in November 2019.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="hero-btn hover:brightness-75">
              How to Protect Yourself?
            </button>
            <button className="hero-btn bg-transparent border border-white hover:bg-white hover:text-black">
              Find Doctor
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img src="/hero.png" alt="Hero" className="w-[300px] md:w-[400px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
