import { MainPage } from "Pages/MainPage";
import { AboutPage } from "Pages/AboutPage";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}> Сменить тему</button>
      <Link to={"./"}> Главная</Link>
      <Link to={"/about"}> О сайте</Link>

      <Suspense fallback={<div> LOADING^^^^</div>}>
        <Routes>
          <Route path={"/about"} element={<MainPage />} />
          <Route path={"/home"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
