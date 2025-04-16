/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";

const LIMIT = 6;

type Gif = {
  id: string;
  title: string;
  images: {
    downsized: {
      url: string;
    };
  };
};

const GiffsGridChapter = () => {
  const [giffsList, setGiffsList] = useState<Gif[]>([]);
  // const [isSorted, setIsSorted] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("chihuahua");
  const [offset, setOffset] = useState<number>(0);

  async function fetchData(url: string): Promise<void> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Fail fetching");
      }

      const responseData = await response.json();

      if (responseData.data) {
        setGiffsList(responseData.data);
      }
    } catch (error) {
      console.error("Error occured", error);
    }
  }

  // const handleSort = () => {
  //   const sortedGifs = [...giffsList].sort((a, b) =>
  //     isSorted ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title)
  //   );
  //   setGiffsList(sortedGifs);
  //   setIsSorted((prevSorted) => !prevSorted);
  // };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData(
      `https://api.giphy.com/v1/gifs/search?api_key=CFWJ9AVfeN1lLdC3nmKLlsgUaTGR13cC&q=${inputValue}&offset=0&limit=${LIMIT}`
    );
  };

  const handleNext = () => {
    setOffset((prev) => prev + LIMIT);
  };

  const handlePrevious = () => {
    if (offset === 0) return;

    setOffset((prev) => prev - LIMIT);
  };

  useEffect(() => {
    fetchData(
      `https://api.giphy.com/v1/gifs/search?api_key=CFWJ9AVfeN1lLdC3nmKLlsgUaTGR13cC&q=${inputValue}&offset=${offset}&limit=${LIMIT}`
    );
  }, [offset]);

  const currentPage = Math.floor(offset / LIMIT) + 1;

  return (
    <div>
      <section>
        <form onSubmit={handleOnSubmit}>
          <input
            onChange={handleOnChange}
            className="border border-grey p-2"
            type="text"
            value={inputValue}
          />
          <button className="bg-blue-400 text-white font-bold p-2 rounded mx-2">
            Search
          </button>
        </form>
      </section>

      <section>
        <p>Your list</p>

        {/* <button
          onClick={handleSort}
          className="bg-blue-300 p-2 my-1 rounded text-white font-bold"
        >
          Sort the list
        </button> */}
        <br />
        <div>
          <p>Page: {currentPage}</p>
          <button
            onClick={handlePrevious}
            className="bg-blue-300 p-2 my-1 rounded text-white font-bold mr-2"
            disabled={offset === 0}
          >
            Previos page
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-300 p-2 my-1 rounded text-white font-bold"
          >
            Next page
          </button>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
          {giffsList.length &&
            giffsList.map((item) => (
              <li key={item.id} className="bg-gray-100 p-2 rounded shadow">
                <img src={item.images.downsized.url} alt={item.title} />
                <p>{item.title}</p>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default GiffsGridChapter;
