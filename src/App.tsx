import { MainPageAsync } from "./Pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./Pages/AboutPage/AboutPage.async";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";

import Counter from "./components/Counter";
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <Link to={"./"}> Главная</Link>
      <Link to={"/about"}> О сайте</Link>

      <Suspense fallback={<div> LOADING^^^^</div>}>
        <Routes>
          <Route path={"/about"} element={<MainPageAsync />} />
          <Route path={"/home"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};

export default App;
