import React from "react";
import Color from "./Color";


// 6.2.1
// export default function colorList({ colors = [] }) {
//     if (!colors.length) return <div>No Colors Listed.</div>;
//     return (
//         <div>
//             {
//                 colors.map(color => <Color key={color.id} {...color} />)
//             }
//         </div>
//     );
// }

// 6.2.2
export default function colorList({
    colors = [],
    onRemoveColor = f => f,
    onRateColor = f => f
}) {
    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
    return (
        <div className="color-list">
            {
                colors.map(color =>
                    <Color
                        // key={color.id}
                        {...color}
                        onRemove={onRemoveColor}
                        onRate={onRateColor}
                    />
                )
            }
        </div>
    );
}