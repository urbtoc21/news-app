import { makeStyles } from '@mui/styles'
import { NavLink } from "react-router";
import { Button } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";

function Header() {
    const classes = useStyles();
    const { language } = useLanguage();

    return (
        <>
            <div className={classes.header}>
                <div className={"container"}>
                    <Button>
                        <NavLink to={"/"} className={classes.header__title}>
                            {language === "de" ? "News App" : "News App"}
                        </NavLink>
                    </Button>
                </div>
                <div className={"container"}>
                    <Button>
                        <NavLink
                            to={"/"}
                            className={classes.header__link}
                            style={({ isActive }) => ({
                                color: isActive ? "black" : "white"
                            })}
                        >
                            {language === "de" ? "Nachrichten" : "News"}
                        </NavLink>
                    </Button>
                    <Button>
                        <NavLink
                            to={"/categories"}
                            className={classes.header__link}
                            style={({ isActive }) => ({
                                color: isActive ? "black" : "white"
                            })}
                        >
                            {language === "de" ? "Kategorien" : "Categories"}
                        </NavLink>
                    </Button>
                </div>
            </div>
        </>
    );
}

const useStyles = makeStyles({
    header: {
        paddingTop: 15,
        paddingBottom: 15,
        width: '100%',
        backgroundColor: "#d39d5e",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        height: 60,
        paddingLeft: 30,
        paddingRight: 30,
    },
    header__title: {
        color: "white",
        fontSize: 24,
        marginLeft: 20,
        textDecoration: "none",
    },
    header__link: {
        color: "white",
        fontSize: 18,
        marginRight: 20,
        textDecoration: "none",
    }
});

export default Header;