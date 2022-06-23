import { Box, Container, useTheme } from "@mui/material";
import React from "react";
import Title from "~/components/Title";
import Footer from "~/components/Footer";
import Background from "~/components/Background";
import { NextPage } from "next";

const Home: NextPage = () => {
    const theme = useTheme();

    return (
        <Container
            maxWidth={"lg"}
            sx={{
                height: "100vh",
                width: "100vw",
                margin: 0,
                paddingTop: "5%",
                paddingBottom: "5%",
                overflow: "hidden",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                component={"main"}
                sx={{
                    zIndex: 1000,
                    height: `calc(100% - ${theme.spacing(4)})`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Title />
            </Box>
            <Footer />
            <Background />
        </Container>
    );
};

export default Home;
