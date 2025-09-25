import { makeStyles } from "@mui/styles";

export interface INews {
    id: string,
    title: string,
    description: string,
}

interface NewsCardProps {
    news : INews;
}

function NewsCard({news}: NewsCardProps) {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{news.title}</h2>
            <p className={classes.description}>{news.description}</p>
        </div>
    );
}


const useStyles = makeStyles({
    container: {
        border: '2px solid #1976d2',
        borderRadius: 16,
        padding: 24,
        boxShadow: '0 4px 16px rgba(25, 118, 210, 0.10)',
        background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
        marginBottom: 24,
        maxWidth: 420,
        transition: 'box-shadow 0.3s, transform 0.3s',
        '&:hover': {
            boxShadow: '0 8px 32px rgba(25, 118, 210, 0.18)',
            transform: 'translateY(-4px) scale(1.02)',
        },
    },
    title: {
        margin: '0 0 12px 0',
        fontSize: '1.5rem',
        color: '#1976d2',
        fontWeight: 700,
        letterSpacing: '0.5px',
    },
    description: {
        margin: 0,
        color: '#455a64',
        fontSize: '1.1rem',
        lineHeight: 1.6,
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight: '6.4em', // 4 Zeilen * 1.6em line-height
    },
});

export default NewsCard;