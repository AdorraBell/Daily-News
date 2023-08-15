import { useTheme } from "theme/useTheme";
import { FC } from "react";
import { AppHeader } from "components/AppHeader/AppHeader";

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    const {theme, toggleTheme} = useTheme();

    return ( 
        <div className={`app ${theme}`}>
            <AppHeader />
            <button onClick={toggleTheme}>
                Change Theme
            </button>
            {children}
        </div>
    );
}
 
export default MainLayout;