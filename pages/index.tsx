import { Box, Container } from "@mui/material";
import React from "react";
import Title from "~/components/Title";
import Footer from "~/components/Footer";
import Background from "~/components/Background";
import { NextPage } from "next";

const Home: NextPage = () => (
    <Container
        fixed
        maxWidth={"lg"}
        sx={{
            height: "100vh",
            maxHeight: "-webkit-fill-available",
            width: "100vw",
            paddingY: "5%",
            display: "flex",
            flexDirection: "column",
        }}
        className={"container"}
    >
        <Box
            component={"main"}
            sx={{
                zIndex: 1000,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexGrow: 1,
            }}
        >
            <Title />
        </Box>
        <Footer />
        <Background />
    </Container>
);

export default Home;
