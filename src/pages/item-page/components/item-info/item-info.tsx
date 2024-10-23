import { data } from '../../../../constants/data';

export const ItemInfo: React.FC = () => {
    const date = new Date(data.time).toDateString();
    return (
        <div>
            <p>{`https://hacker-news.firebaseio.com/v0/item/${data.id}.json`}</p>
            <div>
                <h3>{data.title}</h3>
                <span>{data.descendants}</span>
            </div>
            <div>
                <span>{data.by}</span>
                <span>{date}</span>
            </div>
        </div>
    )
}