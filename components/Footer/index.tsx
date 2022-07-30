import React from "react";
import classes from "./style.module.scss";

const Footer: React.FC = () => (
    <footer className={classes.root}>
        <p className={classes.copyright}>
            {"Copyright © 2021 "}
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

export default Footer;
