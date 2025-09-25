import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollToTopButton() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <Fab
            color="primary"
            aria-label="Nach oben"
            title="Nach oben"
            onClick={scrollToTop}
            sx={{
                display: "block",
                margin: "40px auto 40px auto",
                width: 56,
                height: 56,
                boxShadow: 3
            }}
        >
            <KeyboardArrowUpIcon sx={{ fontSize: 32 }} />
        </Fab>
    );
}

export default ScrollToTopButton;
