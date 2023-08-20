import React from "react";
import { FaStar } from "react-icons/fa";

// 6.1
// export default function Star({ selected = false }) {
//     return <FaStar color={selected ? "red" : "grey"} />
// }

// 6.1.1
export default function Star({ selected = false, onSelect = f => f }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}