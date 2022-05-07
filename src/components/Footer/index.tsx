import React from "react";
import { Box, Link, Theme, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

const Footer: React.FC = () => {
    const theme = useTheme<Theme>();

    return (
        <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            flexWrap={"nowrap"}
            sx={{
                "& *": {
                    marginTop: theme.spacing(1),
                    marginBottom: theme.spacing(1),
                },
            }}
        >
            <Typography
                variant={"body2"}
                component={"span"}
                color={"#999"}
                fontSize={".6rem"}
                marginRight={4}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
                maxWidth={"100%"}
            >
                {"Copyright © 2021 "}
                <Link
                    href="/"
                    rel="self"
                    color={"inherit"}
                    underline={"hover"}
                    target={"_self"}
                >
                    {"Hainan Ungine Times Technology Co.,Ltd."}
                </Link>
                {" All Right Reserved."}
            </Typography>
            <Typography
                variant={"body2"}
                component={"span"}
                color={"#999"}
                fontSize={".6rem"}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
                maxWidth={"100%"}
            >
                <Link
                    href="//beian.miit.gov.cn"
                    rel="noreferrer"
                    color={"inherit"}
                    underline={"hover"}
                    target={"_blank"}
                >
                    {"琼ICP备2021006880号-2"}
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
