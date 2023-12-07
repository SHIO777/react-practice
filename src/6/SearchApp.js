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
    var currentHighlightNum = 0;

    const highlightText = (text, query) => {
        if (!query) return text;

        const parts = text.split(new RegExp(`(${query})`, "gi"))

        return parts.map((part, index) => {
            const isHighlightWord = part.toLowerCase() === query.toLowerCase();
            if (isHighlightWord) {
                currentHighlightNum = highlightNum
                highlightNum += 1;
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



    // currentIndexの変更を検知して実行。
    // handleArrowClickにconsole.log(currentIndex, direction, "after")を入れても
    // currentIndexの更新が完了する前に実行されるため、useEffectで実行
    // useEffect(() => {
    //     console.log(currentIndex, "after");
    // }, [currentIndex]);



    useEffect(() => {
        // コンポーネントがマウントされた後に操作を行う
        if (containerRef.current) {
            const targetWord = containerRef.current.querySelector(`#word-${currentIndex}`);
            if (targetWord) {
                console.log(targetWord)
                console.log(containerRef.current.scrollTop + targetWord.offsetTop)
                containerRef.current.scrollTo({
                    // top: containerRef.current.scrollTop + targetWord.offsetTop,
                    top: targetWord.offsetTop - containerRef.current.offsetTop,
                    behavior: "smooth",
                });
            }
            // console.log(containerRef.current)
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
            {/* <div ref={containerRef} style={{ overflowY: "scroll", maxHeight: "500px" }}>
                {highlightText(data, input)}
            </div> */}
        </div> 
    )
}

export default SearchApp
