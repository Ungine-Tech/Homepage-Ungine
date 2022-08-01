import React, { createRef, useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import classes from "./bgimage.module.scss";
import Images from "~/source/backgroundImages";

const animationTime = 20;
const images: Array<StaticImageData> = Images;

const Background: React.FC = () => {
    const [now, setNow] = useState(0);

    const imgNow = createRef<HTMLImageElement>();
    const imgNext = createRef<HTMLImageElement>();

    useEffect(() => {
        if (imgNow.current !== null && imgNext.current !== null) {
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
        <div id={"background"} className={classes.root}>
            <img ref={imgNow} alt={"image-1"} />
            <img ref={imgNext} alt={"image-2"} />
        </div>
    );
};

export default Background;
