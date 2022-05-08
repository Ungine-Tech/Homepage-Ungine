import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Container, CssBaseline, Theme } from "@mui/material";
import Title from "./components/Title";
import Footer from "./components/Footer";

const Background = React.lazy(() => import("./components/Background"));

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: "100vh",
            width: "100vw",
            margin: 0,
            paddingTop: "5%",
            paddingBottom: "5%",
            overflow: "hidden",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
        },
        main: {
            zIndex: 1000,
            height: `calc(100% - ${theme.spacing(4)})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
    })
);

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth={"lg"} className={classes.root}>
            <CssBaseline />
            <main className={classes.main}>
                <Title />
            </main>
            <Footer />
            <React.Suspense fallback={<p>Loading...</p>}>
                <Background />
            </React.Suspense>
        </Container>
    );
};

export default App;
