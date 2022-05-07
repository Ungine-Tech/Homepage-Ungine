import React, { createRef, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import "./animation.css";
import { wait } from "@testing-library/user-event/dist/utils";

const animationTime = 20;
const images = ["/static/img/0.jpg", "/static/img/1.jpg", "/static/img/2.jpg"];

const Background: React.FC = () => {
    const [now, setNow] = useState(0);

    const imgNow = useRef<HTMLImageElement>();
    const imgNext = useRef<HTMLImageElement>();

    useEffect(() => {
        if (
            typeof imgNow.current !== "undefined" &&
            typeof imgNext.current !== "undefined"
        ) {
            imgNow.current.src = images[now];
            imgNext.current.src = images[now + 1 < images.length ? now + 1 : 0];
        }
    }, [imgNow, imgNext]);

    /* setInterval(() => {
        setNow(now + 1 < images.length ? now + 1 : 0);
        console.log("[Background]", "Image has been set to", now);
    }, (animationTime * 2000) / 3); */

    return (
        <Box
            id={"background"}
            sx={{
                filter: "brightness(30%)",
                "--bg-ani-dis": "150px",
                "--bg-ani-time": "20s",
            }}
            top={0}
            left={0}
            position={"absolute"}
            width={"100%"}
            height={"100%"}
            overflow={"hidden"}
            zIndex={-1}
        >
            <Box
                component={"img"}
                ref={imgNow}
                alt={"image-1"}
                width={"calc(100vw + var(--bg-ani-dis))"}
                height={"100%"}
                margin={0}
                position={"absolute"}
                left={"calc(-1 * var(--bg-ani-dis))"}
                zIndex={-20}
                sx={{
                    objectFit: "fill",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% auto",
                    opacity: 0,
                    animation:
                        "Move var(--bg-ani-time) infinite linear, Opacity var(--bg-ani-time) infinite ease-in",
                    WebkitAnimation:
                        "Move var(--bg-ani-time) infinite linear, Opacity var(--bg-ani-time) infinite ease-in",
                }}
            />
            <Box
                component={"img"}
                ref={imgNext}
                alt={"image-2"}
                width={"calc(100vw + var(--bg-ani-dis))"}
                height={"100%"}
                margin={"0"}
                position={"absolute"}
                left={"calc(-1 / 6 * var(--bg-ani-dis))"}
                zIndex={-25}
                sx={{
                    objectFit: "fill",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% auto",
                    animation:
                        "MoveB var(--bg-ani-time) infinite linear, Appearence-B var(--bg-ani-time) 1",
                    WebkitAnimation:
                        "MoveB var(--bg-ani-time) infinite linear, AppearenceB var(--bg-ani-time) 1",
                }}
            />
        </Box>
    );
};

export default Background;
