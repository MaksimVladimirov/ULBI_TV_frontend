import { Navbar } from "widgets/NavBar";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      {/* <AppRouter /> */}
      <button onClick={toggleTheme}> Сменить тему</button>
    </div>
  );
};

export default App;
