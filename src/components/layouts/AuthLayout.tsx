import { Outlet } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

import { useThemeContext } from "../../lib/context/theme/ThemeContext";
import { Theme } from "../../lib/enum/theme";

export default function AuthLayout() {
  const themeCtx = useThemeContext();
  const isLightTheme = themeCtx.theme === Theme.LIGHT;

  return (
    <main 
      className="w-full h-screen flex items-center justify-center bg-[url('/src/assets/img/auth-bg.png')] bg-cover bg-[var(--blue-100)] relative">
      <button className="absolute top-6 right-8 text-white text-2xl"
        onClick={themeCtx.toggleTheme}>
        {isLightTheme 
          ? <FiMoon />
          : <FiSun /> }
      </button>
      <section 
        className={`w-[90%] bg-white dark:bg-[var(--blue-600)] rounded-xl md:rounded-[24px] p-6 md:basis-2/3 md:px-10 md:py-16 lg:py-8 xl:py-16 lg:basis-[500px]`}>
        <Outlet />
      </section>
    </main>
  );
}