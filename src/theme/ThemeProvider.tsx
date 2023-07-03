import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import { useState, useMemo, FC, useEffect } from "react";

interface ThemeProviderProps {
    children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {

    const [theme, setTheme] = useState<Theme>();

    useEffect(() => {
        const defaulTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
        setTheme(defaulTheme);
    }, [])

    

    const defaultProps = useMemo(() => ({
            theme: theme,
            setTheme: setTheme,
        }), [theme])

    return ( 
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeProvider;