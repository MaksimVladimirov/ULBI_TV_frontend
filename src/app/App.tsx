import { Suspense, useEffect } from 'react';

import { Navbar } from 'widgets/NavBar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/SideBar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
