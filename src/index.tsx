import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./app";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

const theme = createTheme({
    typography: {
        fontFamily: '"Roboto", "Noto Sans SC", sans-serif',
    },
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.Suspense>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
