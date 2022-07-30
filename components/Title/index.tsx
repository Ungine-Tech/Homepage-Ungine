import React from "react";
import classes from "./style.module.scss";

const Title: React.FC = () => (
    <div className={classes.root}>
        <h1 className={classes.title}>
            <span>{"Ungine"}</span>
            <span>{"云骏时代"}</span>
        </h1>
        <h2 className={classes.companyName}>
            {"海南云骏时代科技有限责任公司"}
        </h2>
    </div>
);

export default Title;
