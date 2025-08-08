import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

const Main = () => {
  return (
    <div className="flex flex-col gap-10 mx-10 mt-10">
      <div className="flex justify-between items-center">
        <Navbar />
        <ThemeToggle />
      </div>

      <div className="flex items-center justify-center text-6xl font-bold mt-20">
        Enter the domain you want to check
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <input
          placeholder="example.com"
          type="text"
          className="w-[90%] md:w-1/3 px-4 py-2 text-black dark:text-white rounded-md border border-gray-300 dark:border-gray-600 ring:1 ring-gray-300 dark:ring-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <button className="w-1/5 ml-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md">
          Check
        </button>
      </div>
    </div>
  );
};

export default Main;
