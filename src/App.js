import React from "react";
// import StartRating from "./6/StarRating";
import { useState } from "react";
import ColorList from "./6/ColorList";
import colorData from "./6/color-data.json";

// 6.1
// export default function App() {
//   return (
//     <StartRating
//       style={{ backgroundColor: "lightblue" }}
//       totalStars={5}
//       onDoubleClick={e => alert("double click")}
//     />
//   );
// }

// 6.2.1
// export default function App() {
//     const [colors] = useState(colorData);
//     return <ColorList colors={colors} />;
// }

// 6.2.2
export default function App() {
    const [colors, setColors] = useState(colorData);
  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors = colors.map(color =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newColors);
      }}
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
    />
  );
}