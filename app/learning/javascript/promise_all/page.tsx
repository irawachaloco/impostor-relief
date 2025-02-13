import React from "react";
import Demo from "./Demo";
import CodeBlock from "@/app/components/CodeBlock";

const CHAPTER_TITLE = `Implementing Promise All`;
const CHAPTER_CONTENT_1 = `The Promise.all method is a powerful utility in JavaScript that enables you to execute multiple asynchronous operations concurrently while ensuring you can wait for all of them to complete. It’s an essential tool for handling complex workflows efficiently. Reflecting on my youth, I recall playing Cadavre Exquis with friends—a creative and collaborative game where each person's contribution added to the story. So, let's try to create our own 'Cadavre Exquis Machine' and practice our promise-handling skills.`;
const CHAPTER_CONTENT_2 = `For this exercise, I have curated several sets of words to generate a meaningful sentence by the end. Additionally, for educational purposes, I have implemented a sequential method to execute all the promises. This allows us to clearly observe the significant difference in the time required to complete a series of tasks when done sequentially versus concurrently.
To simulate asynchronous behavior, I’ve added a random delay between 0 and 2 seconds for each word selection from the sets. As a result, in the concurrent process, the operation could take approximately 2 seconds at most. However, in the sequential process, it could take up to 10 seconds, as the total time will be the sum of the delays for all five sets of words before the sentence is fully formed.
Now, please give it a try and generate a new one!`;

const CHAPTER_CONTENT_3 = `To retrieve a random word from each set and simulate an asynchronous behavior, the following function has been created.`;

const CHAPTER_CONTENT_4 = `Next, the goal is to emulate the native Promise.all method to handle a group of promises, similar to how the built-in method works. For practice, this will be implemented using different approaches while also utilizing the built-in method for comparison.`;

const CHAPTER_CONTENT_5 = `Finally, any of the functions can be used to complete the sentence. Check the developer tools console to see the exact execution time for each process, logged using console time markers. Notice the significant difference between a concurrent process and a sequential one`;

const RANDOM_WORD_CODE = `
// Simulate asynchronous word retrieval
const getRandomWordPromise = (
  set: string[],
  setIndex: number
): Promise<string> => {
  return new Promise((resolve) => {
    const index = Math.floor(Math.random() * set.length);
    const randomMilliseconds = Math.floor(Math.random() * 2001);
    setTimeout(() => {
      const word = set[index];
      resolve(word);
    }, randomMilliseconds);
  });
};
`.trim();
const PROMISE_ALL_SEQUENTIAL_CODE = `async function promiseAllSequential<T>(
  promises: (() => Promise<T>)[]
): Promise<T[]> {
  const results: T[] = [];
  for (const promiseFactory of promises) {
    const result = await promiseFactory();
    results.push(result);
  }
  return results;
}
`.trim();
const PROMISE_ALL_IMPLEMENTATION_CODE = `
// ***** Promise all implementations *****

// * Recursive
async function promiseAllRecursive<T>(
  values: (T | Promise<T>)[]
): Promise<T[]> {
  if (values.length === 0) {
    return Promise.resolve([]);
  }

  const [first, ...rest] = values;

  return await Promise.resolve(first).then((firstResult) => {
    return promiseAllRecursive(rest).then((restResults) => {
      return [firstResult, ...restResults];
    });
  });
}

// * Iterative
function promiseAllIterative<T>(values: (T | Promise<T>)[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const resololvedValues: T[] = [];
    let counter = 0;

    if (values.length === 0) {
      resolve([]);
    }

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          resololvedValues[index] = result;
          counter++;

          if (counter === values.length) {
            resolve(resololvedValues);
          }
        })
        .catch((error) => reject(error));
    });
  });
}

// * Reducer
function promiseAllReducer<T>(values: (T | Promise<T>)[]): Promise<T[]> {
  // ojo types aquí
  const resolvedValues = values.reduce<Promise<T[]>>((acc, value) => {
    return acc.then((results) => {
      return Promise.resolve(value).then((result) => {
        return [...results, result];
      });
    });
  }, Promise.resolve([]));
  return resolvedValues;
}

// * Built-in
function promiseAllBuiltIn<T>(values: (T | Promise<T>)[]): Promise<T[]> {
  return Promise.all(values);
}

// * Custom implementation
function promiseAllCustomImplementation<T>(
  values: (T | Promise<T>)[]
): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const resolvedValues: T[] = [];
    let counter = 0;

    if (values.length === 0) {
      resolve([]);
    }

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          resolvedValues[index] = result;
          counter++;

          if (counter === values.length) {
            resolve(resolvedValues);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
`.trim();

const USING_PROMISE_ALL_CODE = `
const generateCadavreExquis = async (
    selectedStrategy: Strategy
  ): Promise<void> => {
    setLoading(true);
    console.time("generateCadavreExquis Execution Time");
    try {
      // Decide input type based on strategy
      const isSequential = selectedStrategy === Strategy.Sequential;

      const input = isSequential
        ? wordSets.map((set, index) => {
            return () => getRandomWordPromise(set, index);
          })
        : wordSets.map((set, index) => {
            return getRandomWordPromise(set, index);
          });

      if (!strategies[selectedStrategy]) {
        throw new Error("Invalid strategy selected");
      }

      // OJO aquí
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const wordArray = await strategies[selectedStrategy](input as any);

      const result = wordArray.join(" ");

      setOutput(result);
    } catch (error) {
      console.error("Somenting wennt wrong on promises:", error);
    } finally {
      console.timeEnd("generateCadavreExquis Execution Time");
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
        </div>
        <div className="max-w-prose">
          <CodeBlock language="ts" code={RANDOM_WORD_CODE} />
        </div>
        <div className="max-w-2xl">
          <p>{CHAPTER_CONTENT_4}</p>
        </div>
        <div className="max-w-prose">
          <CodeBlock language="ts" code={PROMISE_ALL_IMPLEMENTATION_CODE} />
        </div>
        <div className="max-w-2xl">
          <p>
            This is the sequential one, the trick here is to await for each
            promise.
          </p>
        </div>
        <div className="max-w-prose">
          <CodeBlock language="ts" code={PROMISE_ALL_SEQUENTIAL_CODE} />
        </div>
        <div className="max-w-2xl">
          <p>{CHAPTER_CONTENT_5}</p>
        </div>
        <div className="max-w-prose">
          <CodeBlock language="ts" code={USING_PROMISE_ALL_CODE} />
        </div>
      </section>
    </div>
  );
};

export default ImplementingPromiseAllChapter;
