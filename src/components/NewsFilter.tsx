import { useState } from "react";
import { Box,  TextField, InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NewsCard, { type INews } from "./NewsCard";
import { useLanguage } from "../context/LanguageContext";


type NewsFilterProps = {
articles: INews[];
};

function NewsFilter({ articles }: NewsFilterProps) {
const [search, setSearch] = useState("");
const { language } = useLanguage();

const filteredArticles = articles.filter(
  a =>
    (a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase()))
);

return (
  <Box sx={{ width: "100%", maxWidth: 500 }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
      <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
        {language === "de" ? "Suche:" : "Search:"}
      </Typography>
      <TextField
        size="small"
        placeholder={language === "de" ? "Suche" : "Search"}
        value={search}
        onChange={e => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
    <Typography variant="subtitle1" sx={{ mb: 1 }}>
      {language === "de"
        ? `Anzahl Artikel: ${filteredArticles.length}`
        : `Article Count: ${filteredArticles.length}`}
    </Typography>
    {filteredArticles.map((article) => (
      <NewsCard key={article.id} news={article} />
    ))}
  </Box>
);
}

export default NewsFilter;