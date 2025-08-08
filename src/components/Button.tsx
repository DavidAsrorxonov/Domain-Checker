import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power4.out",
        delay: 1.5,
      }
    );
  });

  return (
    <div
      className="w-52 flex items-center font-bold justify-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md mb-24 text-xl cursor-pointer"
      ref={buttonRef}
      onClick={() => navigate("/main")}
    >
      Get Started
    </div>
  );
};

export default Button;
