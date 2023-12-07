import React, {useState, useRef, useEffect} from "react"

const SearchApp = () => {
    const [input, setInput] = useState("")
    const [hits, setHits] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef(null);

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

    // const data = [
    //     "Hello my name is is",
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //     'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //     'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //     'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //     'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //     'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    //     'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //     "a",
    //     "b",
    //     "c",
    //     "hello Hello",
    // ];

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
    }



    var highlightNum = 0;

    const highlightText = (text, query) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, "gi"))

        return parts.map((part, index) => {
            const isHighlightWord = part.toLowerCase() === query.toLowerCase();
            if (isHighlightWord) {
                highlightNum += 1;
            }

            if (isHighlightWord && highlightNum - 1 === currentIndex) {
                // スクロール
                // containerRef.current &&
                // containerRef.current.scrollTo({
                //     top: containerRef.current.scrollTop + containerRef.current.querySelector(`#word-${index}`).offsetTop,
                //     behavior: "smooth",
                // });
                if (containerRef.current) {
                    const targetWord = containerRef.current.querySelector(`#word-${currentIndex}`);
                    if (targetWord) {
                        containerRef.current.scrollTo({
                            top: containerRef.current.scrollTop + targetWord.offsetTop,
                            behavior: "smooth",
                        });
                    }
                }
            }

            return isHighlightWord ? (
                <mark key={index} id={`word-${index}`} style={{ background: (highlightNum-1) === currentIndex ? "orange" : "yellow" }}>
                {/* {currentIndex},
                {highlightNum} */}
                {part}
            </mark>
            ) : (
            part
            );
        });
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

    useEffect(() => {
        // コンポーネントがマウントされた後に操作を行う
        if (containerRef.current) {
            const targetWord = containerRef.current.querySelector(`#word-${currentIndex}`);
            if (targetWord) {
                containerRef.current.scrollTo({
                    top: containerRef.current.scrollTop + targetWord.offsetTop,
                    behavior: "smooth",
                });
            }
        }
    }, [currentIndex]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <input
                type="text"
                placeholder="Search..."
                value={input}
                onChange={handleInputChange}
            />
            <div style={{ marginBottom: "50px" }}>
                <button onClick={() => handleArrowClick("prev")}>Previous</button>
                <button onClick={() => handleArrowClick("next")}>Next</button>
            </div>
            <div>
                {hits > 0 && (
                <p>
                    Hits: {currentIndex + 1}/{hits}
                </p>
                )}
            </div>
            <div ref={containerRef} style={{ overflowY: "scroll", maxHeight: "500px" }}>
            {/* <div ref={containerRef} style={{ overflowY: "scroll" }}> */}
                {data.map((text, index) => (
                <div key={index}>{highlightText(text, input)}</div>
                ))}
            </div>
            {/* <div>
                {data.map((text, index) => (
                <div key={index}>{highlightText(text, input)}</div>
                ))}
            </div> */}
        </div> 
    )
}

export default SearchApp
