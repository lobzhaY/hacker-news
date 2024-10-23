type ItemNewsProps = {
    news: {
        by: string,
        descendants: number,
        id: number,
        kids: number[],
        score: number,
        text: string,
        time: number,
        title: string,
        type: string,
      };
}
export const ItemNews: React.FC<ItemNewsProps> = ({news}) => {
    const date = new Date(news.time).toDateString();
    return (
        <div>
            <h3>{news.title}</h3>
            <div>
                <span>{news.score}</span>
                <span>{news.by}</span>
                <span>{date}</span>
            </div>
        </div>
    )
}