import React, { useState } from "react";
import Star from "./Star";

// 6.1
// export default function StarRating({ totalStars = 5 }) {
//     // return [...Array(totalStars)].map((_, i) => <Star key={i}/>);
//     return [...Array(totalStars)].map((_, i) => <p>{i}</p>);
// }

// 6.1.1
// export default function StarRating({ style = {}, totalStars = 5, ...props }) {
//     const [selectedStars, setSelectedStars] = useState(0);

//     console.log("selectedStars: " + selectedStars);
//     console.log("setSelectedStars: " + setSelectedStars);
//     // selectedStars: 3
//     // StarRating.js:14 setSelectedStars: function () { [native code] }

//     return (
//         <div style={{ padding: 5, ...style }} {...props}>
//         {[...Array(totalStars)].map((n, i) => (
//             <Star
//             key={i}
//             selected={selectedStars > i}
//             onSelect={() => setSelectedStars(i + 1)}
//             />
//         ))}
//         <p>
//             {selectedStars} of {totalStars} stars
//         </p>
//         </div>
//     );
// }

// 6.2
export default function StarRating({
    totalStars = 5,
    selectedStars = 0,
    onRate = f => f,
}) {
    return (
        <>
            {[...Array(totalStars)].map((n, i) => (
                <Star
                key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i+1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>  
    );
}