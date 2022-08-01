import React from "react";
import Title from "~/components/Title";
import Footer from "~/components/Footer";
import Background from "~/components/Background";
import { NextPage } from "next";

const Home: NextPage = () => (
    <div
        className={
            "container max-w-screen-xl px-6 sm:px-12 py-8 mx-auto h-screen w-screen flex flex-col"
        }
    >
        <main className={"z-auto flex flex-col justify-center flex-grow"}>
            <Title />
        </main>
        <Footer />
        <Background />
    </div>
);

export default Home;
