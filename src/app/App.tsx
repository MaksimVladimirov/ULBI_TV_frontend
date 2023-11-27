import { Navbar } from "widgets/NavBar";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
