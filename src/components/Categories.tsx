import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";
import useTopHeadlines from "../hooks/useTopHeadlines";
import NewsCard from "./NewsCard";
import LanguageSwitcher from "./LanguageSwitcher";
import ScrollToTopButton from "./ScrollToTopButton";

const categoryOptions = [
    { key: "general", de: "Allgemein", en: "General" },
    { key: "world", de: "Welt", en: "World" },
    { key: "nation", de: "Nation", en: "Nation" },
    { key: "business", de: "Wirtschaft", en: "Business" },
    { key: "technology", de: "Technologie", en: "Technology" },
    { key: "entertainment", de: "Unterhaltung", en: "Entertainment" },
    { key: "sports", de: "Sport", en: "Sports" },
    { key: "science", de: "Wissenschaft", en: "Science" },
    { key: "health", de: "Gesundheit", en: "Health" }
];

const amountOptions = [1, 2, 5, 10];

function Categories() {
    const { language } = useLanguage();
    const [category, setCategory] = useState("general");
    const [amount, setAmount] = useState(1);

    // API-URL dynamisch bauen
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&max=${amount}&apikey=d38a0ecd16e36dc690cf9855ab719b3a`;

    const { articles, loading } = useTopHeadlines(url);

    return (
        <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, alignItems: "center", display: "flex", flexDirection: "column" }}>
            <LanguageSwitcher />
            <Typography variant="h4" sx={{ mb: 3 , mt: 2}}>
                {language === "de" ? "Kategorien" : "Categories"}
            </Typography>
            <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>
                    {language === "de" ? "Kategorie wählen" : "Select category"}
                </InputLabel>
                <Select
                    value={category}
                    label={language === "de" ? "Kategorie wählen" : "Select category"}
                    onChange={e => setCategory(e.target.value)}
                >
                    {categoryOptions.map(opt => (
                        <MenuItem key={opt.key} value={opt.key}>
                            {language === "de" ? opt.de : opt.en}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>
                    {language === "de" ? "Anzahl wählen" : "Select amount"}
                </InputLabel>
                <Select
                    value={amount}
                    label={language === "de" ? "Anzahl wählen" : "Select amount"}
                    onChange={e => setAmount(Number(e.target.value))}
                >
                    {amountOptions.map(num => (
                        <MenuItem key={num} value={num}>
                            {num}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {loading && <Typography>{language === "de" ? "Lädt..." : "Loading..."}</Typography>}
            {articles.map(article => (
                <NewsCard key={article.id} news={article} />
            ))}
            <ScrollToTopButton />
        </Box>
    );
}

export default Categories;
