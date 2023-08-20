import Star from "./Star";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";


// 6.2.1
// export default function Color({ title, color, rating }) {
//     return (
//         <section>
//             <h1>{title}</h1>
//             <div style={{ height: 50, backgroundColor: color }} />
//             <StarRating selectedStars={rating} />
//         </section>
//     );
// }

// 6.2.2
export default function Color({
    id,
    title,
    color,
    rating,
    onRemove = f => f,
    onRate = f => f
}) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash/>
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={rating => onRate(id, rating)}
            />
        </section>
    );
}