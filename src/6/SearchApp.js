import React, {useState} from "react"

const SearchApp = () => {
    const [input, setInput] = useState("")
    const [hits, setHits] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    const data = ["Hello my name is is",
                    "hello Hello",]

    const handleInputChange = (e) => {
        const inputValue = e.target.value
        setInput(inputValue);
        searchHits(inputValue);
    }

    const searchHits = (query) => {
        let hitsNum = 0;
        data.forEach((text, index) => {
            if (query !== "") {
                hitsNum = hitsNum + [...text.matchAll(query)].length;
            }
        
        //   console.log(...text.matchAll(query))
        //   const matches = [...text.matchAll(query)].map((match) => match.index)
        //   if (matches.length > 0) {
        //     newHits.push({index, matches})
        //   }
        })

        console.log(hitsNum)
        setHits(hitsNum)
        setCurrentIndex(0)
    }

    const highlightText = (text, query) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, "gi"))
        console.log(parts)
        return parts.map((part, index) => 
            part.toLowerCase() === query.toLowerCase() ? (
                <mark key={index}>{part}</mark>
            ) : (
                    part
            )
        )
    }

    return (
        <div style={{textAlign: "center", margin: "50px"}}>
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
