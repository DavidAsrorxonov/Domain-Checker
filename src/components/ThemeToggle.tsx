import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-red-500 dark:bg-blue-500"
    >
      {theme === "light" ? "🌜" : "🌞"}
    </button>
  );
};

export default ThemeToggle;
