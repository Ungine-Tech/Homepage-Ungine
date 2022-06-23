import React, { useEffect, useRef, useState } from "react";
import { Box, GlobalStyles } from "@mui/material";
import { StaticImageData } from "next/image";
import Image0 from "~/public/backgroundImages/0.jpg";
import Image1 from "~/public/backgroundImages/1.jpg";
import Image2 from "~/public/backgroundImages/2.jpg";

const animationTime = 20;
const images: Array<StaticImageData> = [Image0, Image1, Image2];

const Background: React.FC = () => {
    const [now, setNow] = useState(0);

    const imgNow = useRef<HTMLImageElement>();
    const imgNext = useRef<HTMLImageElement>();

    useEffect(() => {
        if (
            typeof imgNow.current !== "undefined" &&
            typeof imgNext.current !== "undefined"
        ) {
            imgNow.current.src = images[now].src;
            imgNext.current.src =
                images[now + 1 < images.length ? now + 1 : 0].src;
        }
    }, [imgNow, imgNext]);

    /* setInterval(() => {
        setNow(now + 1 < images.length ? now + 1 : 0);
        console.log("[Background]", "Image has been set to", now);
    }, (animationTime * 2000) / 3); */

    return (
        <>
            <GlobalStyles
                styles={{
                    "--bg-ani-dis": "150px",
                    "--bg-ani-time": animationTime + "s",
                }}
            />
            <Box
                id={"background"}
                sx={{
                    filter: "brightness(30%)",
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
        </>
    );
};

export default Background;
