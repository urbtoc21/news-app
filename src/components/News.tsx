import useTopHeadlines from "../hooks/useTopHeadlines";
import NewsFilter from "./NewsFilter";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import ScrollToTopButton from "./ScrollToTopButton";
import { Typography } from "@mui/material";

function News() {
        const { articles, loading } = useTopHeadlines('https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=d38a0ecd16e36dc690cf9855ab719b3a');

    const { language } = useLanguage();

        if (loading) return <p>Lädt...</p>;

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
            <LanguageSwitcher />
            <Typography variant="h4" sx={{mt: 3, mb: 3}}>{language === "de" ? "Nachrichten" : "News"}</Typography>
                <NewsFilter articles={articles} />
              <ScrollToTopButton />
          </div>
        );
}

export default News;