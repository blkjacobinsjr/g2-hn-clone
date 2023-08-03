import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function ListPage() {
    let { type } = useParams();
    const navigate = useNavigate();

    if (!type) type = "news";
    const { loading, error, data } = useFetch(type, null);

    if (error) {
        return <div>Something went wrong!</div>
    }

    if (loading) {
        return <div>Loading</div>
    }

    if (data) {
        document.title = type.toUpperCase();
        return <div>
            <div className='list-type'>{type}</div>
            <ol>
                {data.map((item, index) => (
                <li key={item.id} className="item">
<div className="item-top">
    <div className="item-title" onClick={() => navigate(`/item/${item.id}`)}>{item.title}</div>
    <div className="item-info">
        <div className="item-author">{item.author}</div>
        <div className="item-points">{item.points} points</div>
        <div className="item-time">{new Date(item.created_at_i * 1000).toLocaleString()} |</div>
        <dvi className="hide-button">Hide | </dvi>
        <div className="item-comments">{item.num_comments} comments</div>
    </div>
</div>
                </li>))}
            </ol>
        </div>
    }
}