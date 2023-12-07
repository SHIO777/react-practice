import React, {useState, useRef, useEffect, useMemo, useCallback} from "react"

const SearchApp = () => {
    const [input, setInput] = useState("")
    const [hits, setHits] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef(null);

    const highlightNumRef = useRef(0)

    const data = useMemo(() => [
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
    ], []);



    const searchHits = useCallback((query) => {
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
    }, [data])


    const handleInputChange = useCallback((e) => {
        const inputValue = e.target.value
        setInput(inputValue);
        searchHits(inputValue);
    }, [searchHits])


    var highlightNum = 0;
    var currentHighlightNum = 0;

    const highlightText = (text, query) => {
        if (!query) return text;

        const parts = text.split(new RegExp(`(${query})`, "gi"))
        // let currentHighlightNum;

        return parts.map((part, index) => {
            const isHighlightWord = part.toLowerCase() === query.toLowerCase();
            if (isHighlightWord) {
                currentHighlightNum = highlightNum
                highlightNum += 1;
                // currentHighlightNum = highlightNumRef.current;
                // highlightNumRef.current = highlightNumRef.current + 1;
                // console.log(currentHighlightNum)
            }

            if (isHighlightWord) {
                return (
                    <mark key={index} id={`word-${currentHighlightNum}`} style={{ background: currentHighlightNum === currentIndex ? "orange" : "yellow" }}>
                        {part}
                    </mark >
                )
            } else {
                return part
            }
        })
    }

    const handleArrowClick = useCallback((direction) => {
        if (hits > 1) {
            if (direction === "next") {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % hits);
            } else {
                setCurrentIndex((prevIndex) =>
                    (prevIndex - 1 + hits) % hits
                );
            }
        }
    }, [hits])




    useEffect(() => {
        // コンポーネントがマウントされた後に操作を行う
        if (containerRef.current) {
            const targetWord = containerRef.current.querySelector(`#word-${currentIndex}`);
            if (targetWord) {
                containerRef.current.scrollTo({
                    top: targetWord.offsetTop - containerRef.current.offsetTop,
                    behavior: "smooth",
                });
            }
            console.log(currentIndex);
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
                {data.map((text, index) => (
                <div key={index}>{highlightText(text, input)}</div>
                ))}
            </div>
        </div> 
    )
}

export default SearchApp
