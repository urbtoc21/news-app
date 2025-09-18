//https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=d38a0ecd16e36dc690cf9855ab719b3a

function useTopHeadlines(url: string) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, [url]);

    return { data, loading };

}

export default useTopHeadlines;