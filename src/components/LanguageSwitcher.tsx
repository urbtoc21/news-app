import { useLanguage } from "../context/LanguageContext";
import { Button } from "@mui/material";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div>
      <Button
        variant={language === "de" ? "contained" : "outlined"}
        onClick={() => setLanguage("de")}
      >
        Deutsch
      </Button>
      <Button
        variant={language === "en" ? "contained" : "outlined"}
        onClick={() => setLanguage("en")}
        sx={{ ml: 1 }}
      >
        English
      </Button>
    </div>
  );
}

export default LanguageSwitcher;