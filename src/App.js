import React from "react";
// import StartRating from "./6/StarRating";
import { useState } from "react";
import ColorList from "./6/ColorList";
import colorData from "./6/color-data.json";
import AddColorForm from "./6/AddColorForm";
import { v4 } from "uuid";
import SearchApp from "./6/SearchApp";

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
// export default function App() {
//   const [colors, setColors] = useState(colorData);
//   return (
//     <ColorList
//       colors={colors}
//       onRateColor={(id, rating) => {
//         const newColors = colors.map(color =>
//           color.id === id ? { ...color, rating } : color
//         );
//         setColors(newColors);
//       }}
//       onRemoveColor={id => {
//         const newColors = colors.filter(color => color.id !== id);
//         setColors(newColors);
//       }}
//     />
//   );
// }

// 6.3

// export default function App() {
//   const [colors, setColors] = useState(colorData);

//   const removeColor = id => {
//     const newColors = colors.filter(color => color.id !== id);
//     setColors(newColors);
//   };

//   const rateColor = (id, rating) => {
//     const newColors = colors.map(color =>
//       color.id === id ? { ...color, rating } : color
//     );
//     setColors(newColors);
//   };

//   return (
//     <>
//       <AddColorForm
//         onNewColor={(title, color) => alert(`TODO: Create ${title} - ${color}`)}
//       />
//       <ColorList
//         colors={colors}
//         onRemoveColor={removeColor}
//         onRateColor={rateColor}
//       />
//     </>
//   );
// }

// 6.3.4
export default function App() {
  const [colors, setColors] = useState(colorData);

  const removeColor = id => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  };

  const rateColor = (id, rating) => {
    const newColors = colors.map(color =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const createColor = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color
      }
    ];
    setColors(newColors);
  };

  // function UpdateButton() {
  //   const [state, setState] = useState(false);

  //   return (
  //     <button onClick={() => setState((prevState) => !prevState)}>
  //       {state ? 'update' : '!!!update'}
  //     </button>
  //   )
  // }

  const [state, setState] = useState(false);
  const buttonText = state ? 'update' : 'not update';
  const toggleUpdate = () => {
    setState((prevState) => !prevState);
  };
  
  
  return (
    <>
      {/* <UpdateButton/> */}
      {/* <button onClick={toggleUpdate}>
        {buttonText}
      </button>
      
      <AddColorForm onNewColor={createColor} />
      <ColorList
        colors={colors}
        onRemoveColor={removeColor}
        onRateColor={rateColor}
      /> */}
      <SearchApp/>
    </>
  );
}