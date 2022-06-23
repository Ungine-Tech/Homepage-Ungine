import React from "react";
import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";

const Title: React.FC = () => {
    const theme = useTheme<Theme>();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                zIndex: 1000,
                width: "80%",
                fontWeight: "normal",
                "& *": {
                    color: "#FFFFFF",
                },
            }}
        >
            <Typography
                variant={"h1"}
                component={"h1"}
                sx={{
                    fontSize: "4rem",
                    letterSpacing: "0.4ch",
                    marginBottom: theme.spacing(3),
                }}
            >
                <Typography
                    variant={"h2"}
                    component={"span"}
                    sx={{
                        fontWeight: 400,
                        letterSpacing: "0.04ch",
                        display: isMobile ? "block" : undefined,
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "2.4rem",
                        },
                    }}
                >
                    {"Ungine"}
                </Typography>
                <Typography
                    variant={"h2"}
                    component={"span"}
                    sx={{
                        ml: !isMobile ? 2 : 0,
                        display: isMobile ? "block" : undefined,
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "2.4rem",
                        },
                        letterSpacing: "0.4ch",
                    }}
                >
                    {"云骏时代"}
                </Typography>
            </Typography>
            <Typography
                variant={"h4"}
                component={"h2"}
                sx={{
                    fontWeight: 300,
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "1.2rem",
                    },
                }}
            >
                {"海南云骏时代科技有限责任公司"}
            </Typography>
        </Box>
    );
};

export default Title;
