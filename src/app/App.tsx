import { MainPageAsync } from "../Pages/MainPage/MainPage.async";
import { AboutPageAsync } from "../Pages/AboutPage/AboutPage.async";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";

import useTheme from "./providers/ThemeProvider/lib/useTheme";
import "./styles/index.scss";
import { classNames } from "../helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}> Сменить тему</button>
      <Link to={"./"}> Главная</Link>
      <Link to={"/about"}> О сайте</Link>

      <Suspense fallback={<div> LOADING^^^^</div>}>
        <Routes>
          <Route path={"/about"} element={<MainPageAsync />} />
          <Route path={"/home"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
