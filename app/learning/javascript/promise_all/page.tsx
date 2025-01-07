import React from "react";
import Demo from "./Demo";
import CodeBlock from "@/app/components/CodeBlock";

const CHAPTER_TITLE = `Implementing Promise All Chapter`;
const CHAPTER_CONTENT_1 = `The Promise.all method is a powerful utility in JavaScript that enables you to execute multiple asynchronous operations concurrently while ensuring you can wait for all of them to complete. It’s an essential tool for handling complex workflows efficiently. Reflecting on my youth, I recall playing Cadavre Exquis with friends—a creative and collaborative game where each person's contribution added to the story. So, let's try to create our own 'Cadavre Exquis Machine' and practice our promise-handling skills.`;
const CHAPTER_CONTENT_2 = `Try generating a new one!`;
const CHAPTER_CONTENT_3 = `For this time, we have  created a function to simulate an asynchronous call for retrieving the words from a given set of words. It will pick a random word from the set and return it as a Promise`;
const CHAPTER_CONTENT_4 = `Then, we have implemented a function that will process concurrently all the word sets and use the result to complete the piece.`;
const CHAPTER_CONTENT_5 = `Finally, we can use the function to get the completed piece, the exquisite corpse!`;

const RANDOM_WORD_CODE = `
// Simulate asynchronous word retrieval
const getRandomWordPromise = (
  set: string[],
  setIndex: number
): Promise<string> => {
  return new Promise((resolve) => {
    const index = Math.floor(Math.random() * set.length);
    const randomMilliseconds = Math.floor(Math.random() * 801);
    setTimeout(() => {
      const word = set[index];
      resolve(word);
    }, randomMilliseconds);
  });
};
`.trim();
const PROMISE_ALL_IMPLEMENTATION_CODE = `
  function createCadavreExquisWithCustomPromiseAll<T>(
  sets: (T | Promise<T>)[]
): Promise<T[]> {
  console.time("Concurrent Execution Time");

  return new Promise((resolve, reject) => {
    const promises: T[] = [];
    let counter = 0;

    sets.forEach((set, index) => {
        .then((value) => {
          promises[index] = value;
          counter++;

          if (counter === sets.length) {
            console.timeEnd("Concurrent Execution Time");
            console.log("ALL PROMISES DONE!!");
            resolve(promises);
          }
        })
        .catch((error) => {
          console.timeEnd("Concurrent Execution Time");
          reject(error);
        });
    });
  });
}
`.trim();

const USING_PROMISE_ALL_CODE = `
const generateCadavreExquisWithCustomPromiseAllMethod = async () => {
    setLoading(true);
    try {
      const promises = wordSets.map((set, index) =>
        getRandomWordPromise(set, index)
      );
      const words = await createCadavreExquisWithCustomPromiseAll(promises);
      const result = words.join(" ");

      setOutput(result);
    } catch (error) {
      console.error("Error generating sentence", error);
    } finally {
      setLoading(false);
    }
  };
`.trim();

const ImplementingPromiseAllChapter = () => {
  return (
    <div>
      <h1 className="text-[#686868] text-lg font-semibold mb-6">
        {CHAPTER_TITLE}
      </h1>
      <section>
        <div className="max-w-2xl">
          <p>{CHAPTER_CONTENT_1}</p>
          <p>{CHAPTER_CONTENT_2}</p>
        </div>
      </section>
      <Demo />
      <section>
        <div className="max-w-2xl">
          <p>{CHAPTER_CONTENT_3}</p>
          <CodeBlock language="ts" code={RANDOM_WORD_CODE} />
          <p>{CHAPTER_CONTENT_4}</p>
          <CodeBlock language="ts" code={PROMISE_ALL_IMPLEMENTATION_CODE} />
          <p>{CHAPTER_CONTENT_5}</p>
          <CodeBlock language="ts" code={USING_PROMISE_ALL_CODE} />
        </div>
      </section>
    </div>
  );
};

export default ImplementingPromiseAllChapter;
