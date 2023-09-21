import React, { useRef, useState } from "react";
import { useInput } from "./hooks";

// export default function AddColorForm({ onNewColor = f => f }) {
//     const [title, setTitle] = useState("");
//     const [color, setColor] = useState("#000000");

    // const txtTitle = useRef();
    // const hexColor = useRef();

    // const submit = e => {
    //     e.precentDefault();
    //     const title = txtTitle.current.value;
    //     const color = hexColor.current.value;
    //     onNewColor(title, color);
    //     txtTitle.current.value = "";
    //     hexColor.current.value = "";
    // };

    // 6.3.2
    // const submit = e => {
    //     e.preventDefault();
    //     onNewColor(title, color);
    //     setTitle("");
    //     setColor("");
    // };

    // return (
    //     <form onSubmit={submit}>
    //         <input
    //             value={title}
    //             onChange={event => setTitle(event.target.value)}
    //             type="text"
    //             placeholder="color title..."
    //             required
    //         />
    //         <input
    //             value={color}
    //             onChange={event => setColor(event.target.value)}
    //             type="color"
    //             required
    //         />
    //         <button>ADD</button>
    //     </form>
    // );
// }


// 6.3.3 and 6.3.4
export default function AddColorForm({ onNewColor = f => f }) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = e => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input {...colorProps} type="color" required />
            <button>ADD</button>
        </form>
    );
}


