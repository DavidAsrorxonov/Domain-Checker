import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import toast from "react-hot-toast";
import { useTheme } from "../hooks/useTheme";
import { House } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [domain, setDomain] = useState("");
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleCheckDomain = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) {
      toast.error("Plaese enter a domain", {
        style: {
          background: `${theme === "dark" ? "#100c08" : "#fff"}`,
          color: `${theme === "dark" ? "#fff" : "#100c08"}`,
        },
      });
    }

    console.log(domain);
  };

  return (
    <div className="flex flex-col gap-10 mx-10 mt-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <House
            size={40}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />

          <div className="w-0.5 h-12 bg-black dark:bg-white"></div>

          <Navbar />
        </div>
        <ThemeToggle />
      </div>

      <div className="flex items-center justify-center text-6xl font-bold mt-20">
        Enter the domain you want to check
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex w-[90%] md:w-1/3 gap-2">
          <input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="example.com"
            type="text"
            className="flex-1 px-4 py-2 
        text-black dark:text-white 
        bg-white dark:bg-gray-950 
        rounded-md border border-gray-300 dark:border-gray-700 
        focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            onClick={() => setDomain("")}
            className="px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600"
          >
            Clear
          </button>
        </div>

        <button
          className="w-[90%] md:w-1/3 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-lg rounded-md font-bold"
          onClick={handleCheckDomain}
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default Main;
