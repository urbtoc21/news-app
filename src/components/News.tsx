
function News() {

const [data, loading] = useTopHeadlines('https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=d38a0ecd16e36dc690cf9855ab719b3a');

    return (
        <>
            <h1>News</h1>

            (loading && return <p>Lädt...</p>;)

            <ul>
                {data.slice(0, 5).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}

export default News;