import axios from "axios";
import { useEffect, useState } from "react";
import type { INews } from "../components/NewsCard";

function useTopHeadlines(url: string) {

    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState<INews[]>([]);

    useEffect(() => {
        setLoading(true);
        axios.get(url)
                .then((res) => {
                    console.log(res.data);
                    setArticles(res.data.articles);
                    setLoading(false);
                });
    }, [url]);

    return { articles, loading };

}

export default useTopHeadlines;