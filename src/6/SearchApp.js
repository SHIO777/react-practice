import React, {useState} from "react"

const SearchApp = () => {
    const [input, setInput] = useState("")
    const [hits, setHits] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [highlightIndex, setHighlightIndex] = useState(0)

    const data = [
        "Hello my name is is",
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        "a",
        "b",
        "c",
        "hello Hello",
    ];

    const handleInputChange = (e) => {
        const inputValue = e.target.value
        setInput(inputValue);
        searchHits(inputValue);
    }

    const searchHits = (query) => {
        let hitsNum = 0;

        if (!query) return setHits(0);

        data.forEach((text, index) => {
            const lowercaseQuery = query.toLowerCase()
            const parts = text.split(new RegExp(`(${query})`, "gi"))
            parts.forEach((part, index2)  => {
                if (part.toLowerCase() === lowercaseQuery) {
                    hitsNum = hitsNum + 1
                }
            })
        })
        setHits(hitsNum)
        // setCurrentIndex(0)
    }

    const highlightText = (text, query) => {
        let highlightNum = 0;
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, "gi"))
        console.log(parts)

        return parts.map((part, index) => {
            const isHighlightWord = part.toLowerCase() === query.toLowerCase();
            const highlight = highlightIndex

            if (isHighlightWord) {
                setHighlightIndex(highlightIndex+1)
            }

            return isHighlightWord ? (
                <mark key={index} style={{ background: (highlight) === currentIndex ? "orange" : "yellow" }}>
                {part}
            </mark>
            ) : (
            part
            );
        });


    // const highlightText = (text, query) => {
    //     let highlightNum = 0;
    //     if (!query) return text;
    //     const parts = text.split(new RegExp(`(${query})`, "gi"))
    //     console.log(parts)

    //     return parts.map((part, index) => {
    //         const isHighlightWord = part.toLowerCase() === query.toLowerCase();
    //         const highlight = highlightIndex

    //         if (isHighlightWord) {
    //             highlightNum += 1;
    //             // setHighlightIndex(highlightIndex+1)
    //         }

    //         return isHighlightWord ? (
    //             // <mark key={index} style={{ background: (highlight) === currentIndex ? "orange" : "yellow" }}>
    //             <mark key={index} style={{ background: (highlightNum) === currentIndex ? "orange" : "yellow" }}>
    //             {/* {(highlight)} */}
    //             {part}
    //         </mark>
    //         ) : (
    //         part
    //         );
    //     });


        // return parts.map((part, index) =>
        //     part.toLowerCase() === query.toLowerCase() ? (
        //         // <mark key={index}>{part}</mark>
        //         // <mark key={index} style={{ color: index === currentIndex ? "orange" : "inherit" }}>
        //         <mark key={index} style={{ background: index === currentIndex ? "orange" : "yellow" }}>
        //             {part}
        //         </mark>
        //     ) : (
        //             part
        //     )
        // )
    }

    const handleArrowClick = (direction) => {
        if (hits > 1) {
            if (direction === "next") {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % hits);
            } else {
                setCurrentIndex((prevIndex) =>
                    (prevIndex - 1 + hits) % hits
                );
            }
        }
    }

    return (
        <div style={{ textAlign: "center", margin: "50px" }}>
            {/* {hits > 1 && ( */}
            <div style={{ margin: "50px" }}>
                    <button onClick={() => handleArrowClick("prev")}>Previous</button>
                    <button onClick={() => handleArrowClick("next")}>Next</button>
                </div>
            {/* )} */}
            <input
                type="text"
                placeholder="Search..."
                value={input}
                onChange={handleInputChange}
            />
            <div>
                {/* <p>Results: {hits}</p> */}
                {hits > 0 && (
                <p>
                    Hits: {currentIndex + 1}/{hits}
                </p>
                )}
            </div>
            <div>
                {data.map((text, index) => (
                <div key={index}>{highlightText(text, input)}</div>
                ))}
            </div>
        </div> 
    )
}

export default SearchApp
