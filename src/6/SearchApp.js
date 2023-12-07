import React, { useState } from 'react';

const SearchApp = () => {
  const [input, setInput] = useState('');
  const [hits, setHits] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
    'Hello my name is',
    // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    // 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    // 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ];

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    searchHits(inputValue);
  };

  const searchHits = (query) => {
    const newHits = [];
    data.forEach((text, index) => {
      const matches = [...text.matchAll(query)].map((match) => match.index);
      if (matches.length > 0) {
        newHits.push({ index, matches });
      }
    });
    setHits(newHits);
    setCurrentIndex(0);
  };

  const handleArrowClick = (direction) => {
    if (hits.length > 0) {
      let newIndex;
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % hits.length;
      } else {
        newIndex = (currentIndex - 1 + hits.length) % hits.length;
      }
      setCurrentIndex(newIndex);
    }
  };

  return (
      <div style={{ textAlign: "center", margin: "50px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleInputChange}
      />
      <div>
        <p>Results: {hits.length}</p>
        {hits.length > 0 && (
          <p>
            Hit {currentIndex + 1} of {hits.length}
          </p>
        )}
      </div>
      <div>
        {data.map((text, index) => (
          <div key={index}>
            {hits.map((hit, hitIndex) => (
              <span key={hitIndex}>
                {index === hit.index && (
                  <>
                    {text.slice(
                      hit.matches[currentIndex],
                      hit.matches[currentIndex] + input.length
                    )}
                  </>
                )}
              </span>
            ))}
            {text}
          </div>
        ))}
      </div>
      {hits.length > 1 && (
        <div>
          <button onClick={() => handleArrowClick('prev')}>Previous</button>
          <button onClick={() => handleArrowClick('next')}>Next</button>
        </div>
      )}
    </div>
  );
};

export default SearchApp;
