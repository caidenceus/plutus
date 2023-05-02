import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// GLobal light and dark theme
export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            blue: {
                100: "#d4dadd",
                200: "#a8b5ba",
                300: "#7d9098",
                400: "#516b75",
                500: "#264653",
                600: "#1e3842",
                700: "#172a32",
                800: "#0f1c21",
                900: "#080e11"
            },
            teal: {
                100: "#d4ebe9",
                200: "#aad8d2",
                300: "#7fc4bc",
                400: "#55b1a5",
                500: "#2a9d8f",
                600: "#227e72",
                700: "#195e56",
                800: "#113f39",
                900: "#081f1d"
            },
            yellow: {
                100: "#fbf3e1",
                200: "#f6e7c3",
                300: "#f2dca6",
                400: "#edd088",
                500: "#e9c46a",
                600: "#ba9d55",
                700: "#8c7640",
                800: "#5d4e2a",
                900: "#2f2715"
            },
            orange: {
                100: "#fdecdf",
                200: "#fbdac0",
                300: "#f8c7a0",
                400: "#f6b581",
                500: "#f4a261",
                600: "#c3824e",
                700: "#92613a",
                800: "#624127",
                900: "#312013"
            },
            red: {
                100: "#fae2dc",
                200: "#f5c5b9",
                300: "#f1a997",
                400: "#ec8c74",
                500: "#e76f51",
                600: "#b95941",
                700: "#8b4331",
                800: "#5c2c20",
                900: "#2e1610"
            },
        } : {
            blue: {
                100: "#080e11",
                200: "#0f1c21",
                300: "#172a32",
                400: "#1e3842",
                500: "#264653",
                600: "#516b75",
                700: "#7d9098",
                800: "#a8b5ba",
                900: "#d4dadd",
            },
            teal: {
                100: "#081f1d",
                200: "#113f39",
                300: "#195e56",
                400: "#227e72",
                500: "#2a9d8f",
                600: "#55b1a5",
                700: "#7fc4bc",
                800: "#aad8d2",
                900: "#d4ebe9",
            },
            yellow: {
                100: "#2f2715",
                200: "#5d4e2a",
                300: "#8c7640",
                400: "#ba9d55",
                500: "#e9c46a",
                600: "#edd088",
                700: "#f2dca6",
                800: "#f6e7c3",
                900: "#fbf3e1",
            },
            orange: {
                100: "#312013",
                200: "#624127",
                300: "#92613a",
                400: "#c3824e",
                500: "#f4a261",
                600: "#f6b581",
                700: "#f8c7a0",
                800: "#fbdac0",
                900: "#fdecdf",
            },
            red: {
                100: "#2e1610",
                200: "#5c2c20",
                300: "#8b4331",
                400: "#b95941",
                500: "#e76f51",
                600: "#ec8c74",
                700: "#f1a997",
                800: "#f5c5b9",
                900: "#fae2dc",
            },
        }
    )
});

// MUI theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ? {
                primary: {
                    main: colors.blue[500],
                },
                background: {
                    default: colors.blue[900]
                }
            } : {
                primary: {
                    main: colors.blue[500],
                },
                background: {
                    default: '#fcfcfc'
                }
            })
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        }
    };
};

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState('dark');
    const colorMode = useMemo(() => ({
        toggleColorMode: () =>
            setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }), []);

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
}