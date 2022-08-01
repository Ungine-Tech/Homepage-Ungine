import React from "react";
import classes from "./style.module.scss";
import dayjs from "dayjs";

const Footer: React.FC = () => {
    const copyrightYear = ((start: number) => {
        if (dayjs().year() > start) {
            return `${start} - ${dayjs().year()}`;
        }

        return start.toString();
    })(2021);

    return (
        <footer className={classes.root}>
            <p className={classes.copyright}>
                {`Copyright © ${copyrightYear} `}
                <a href="/" rel="self" color={"inherit"} target={"_self"}>
                    {"Hainan Ungine Times Technology Co.,Ltd."}
                </a>
                {" All Right Reserved."}
            </p>
            <p className={classes.beian}>
                <a
                    href="//beian.miit.gov.cn"
                    rel="noreferrer"
                    color={"inherit"}
                    target={"_blank"}
                >
                    {"琼ICP备2021006880号-2"}
                </a>
            </p>
        </footer>
    );
};

export default Footer;
