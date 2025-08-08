import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="relative w-full">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <Navbar />
        </div>
        <div className="absolute top-4 right-6">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex flex-1 items-center px-10">
        <div className="text-left">
          <div className="text-6xl md:text-9xl font-extrabold text-gray-900 dark:text-white">
            Welcome!
          </div>
          <div className="text-3xl md:text-7xl font-bold text-gray-700 dark:text-gray-300 mt-4">
            This is a domain checker website
          </div>
          <p className="text-base md:text-3xl mt-6 max-w-4xl text-gray-600 dark:text-gray-400">
            You can use this website to check if a domain is available or not.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
