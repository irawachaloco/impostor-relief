"use client";

import Section from "@/app/components/Section";
import React, { useEffect, useState } from "react";

type WordSets = string[][];

const wordSets: WordSets = [
  // First set of subjects
  [
    "The cursed",
    "A doomed",
    "An unfortunate",
    "The unholy",
    "A forsaken",
    "The reckless",
    "An oblivious",
    "The naive",
    "A vengeful",
    "The fearless",
    "A guilt-ridden",
    "The arrogant",
    "A desperate",
    "The ever-smiling",
    "An overly confident",
    "A self-proclaimed",
    "The blissfully unaware",
    "A chronically unlucky",
    "The heartbroken",
    "A lovesick",
    "An obsessed",
    "The jealous",
    "A vengeful",
  ],

  // Second set of roles or characters
  [
    "widow",
    "priest",
    "orphan",
    "jester",
    "undertaker",
    "clown",
    "necromancer",
    "butcher",
    "poet",
    "executioner",
    "explorer",
    "philosopher",
    "gambler",
    "villain",
    "prophet",
    "chef",
    "doctor",
    "scientist",
    "artist",
    "hero",
    "lover",
    "spouse",
    "exorcist",
    "vampire",
    "detective",
    "bambi",
    "baby",
  ],

  // Third set of actions
  [
    "wandered into",
    "was devoured by",
    "accidentally invoked",
    "sacrificed their soul to",
    "was betrayed by",
    "danced on",
    "feasted upon",
    "mocked",
    "whispered to",
    "set fire to",
    "tampered with",
    "summoned",
    "was consumed by",
    "lost everything to",
    "accidentally unleashed",
    "burned down",
    "accidentally poisoned",
    "was dissected by",
    "blew up",
    "became the victim of",
    "betrayed",
    "cursed",
    "stabbed",
    "haunted",
    "was consumed by",
  ],

  // Fourth set of objects, settings, or entities
  [
    "a haunted asylum",
    "the abyss",
    "a bloodthirsty cult",
    "a ravenous beast",
    "their own shadow",
    "a ticking bomb",
    "a graveyard of despair",
    "an ancient curse",
    "their own reflection",
    "the fabric of reality",
    "a forbidden artifact",
    "the wrath of the gods",
    "an army of skeletons",
    "a black hole",
    "the apocalypse",
    "their own creation",
    "a sentient toaster",
    "a misplaced scalpel",
    "an ironic twist of fate",
    "their ultimate masterpiece",
    "their only friend",
    "a ghostly apparition",
    "the very person they loved",
    "a deadly secret",
    "their eternal rival",
  ],

  // Fifth set of endings or consequences
  [
    "to find solace",
    "in search of redemption",
    "and met their demise",
    "without any witnesses",
    "as fate had planned",
    "while laughing hysterically",
    "in complete ignorance",
    "knowing the end was near",
    "as chaos consumed all",
    "for no apparent reason",
    "without understanding the consequences",
    "for a fleeting moment of glory",
    "despite all warnings",
    "in a moment of madness",
    "just to prove a point",
    "in poetic justice",
    "just as they achieved greatness",
    "without realizing their mistake",
    "leaving everyone speechless",
    "as the universe laughed",
    "in a fit of rage",
    "out of misguided love",
    "knowing it was all futile",
    "with no one left to mourn them",
    "as the world moved on",
  ],
];

// Simulate asynchronous word retrieval
const getRandomWordPromise = (
  set: string[],
  setIndex: number
): Promise<string> => {
  return new Promise((resolve) => {
    const index = Math.floor(Math.random() * set.length);
    const randomMilliseconds = Math.floor(Math.random() * 3001);
    setTimeout(() => {
      const word = set[index];
      console.log(
        `Word created ->  ${word}, set: ${setIndex} in: ${randomMilliseconds}`
      );
      resolve(word);
    }, randomMilliseconds);
  });
};

// ***** Promise all implementations *****

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

function promiseAllBuiltIn<T>(values: (T | Promise<T>)[]): Promise<T[]> {
  return Promise.all(values);
}

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

async function promiseAllSequential<T>(
  promises: (() => Promise<T>)[]
): Promise<T[]> {
  const results: T[] = [];
  for (const promiseFactory of promises) {
    const result = await promiseFactory();
    results.push(result);
  }
  return results;
}

// ===============================================================================
// End of list

function createCadavreExquisWithCustomPromiseAll<T>(
  promises: (T | Promise<T>)[]
): Promise<T[]> {
  console.time("Concurrent Execution Time");

  return new Promise((resolve, reject) => {
    const resolvedValues: T[] = [];
    let counter = 0;

    promises.forEach((currentPromise, index) => {
      console.time(`Task ${index} Execution Time`);

      // Promise.resolve(currentPromise) // Convert the value in Promise
      Promise.resolve(currentPromise) // Convert the value in Promise

        // if currentPromise !== Promise make it Promise
        //  currentPromise = new Promise((resolve, reject)=>{ resolve(currentPromise)})

        // currentPromise = Promise.resolve(currentPromise)

        // currentPromise.then(result => console.log(result))
        // currentPromise.then...

        .then((value) => {
          console.timeEnd(`Task ${index} Execution Time`);
          resolvedValues[index] = value;
          counter++;

          if (counter === promises.length) {
            console.timeEnd("Concurrent Execution Time");
            console.log("ALL PROMISES DONE!!");
            resolve(resolvedValues);
          }
        })
        .catch((error) => {
          console.timeEnd(`Task ${index} Execution Time`);
          console.timeEnd("Concurrent Execution Time");
          reject(error);
        });
    });
  });
}

async function createCadavreExquisWithPromiseAll<T>(
  sets: (T | Promise<T>)[]
): Promise<T[]> {
  console.time("Promise.all Exection Time");

  try {
    const results = await Promise.all(sets);
    console.log("PROMISE.ALL PROMISES DONE");
    console.timeEnd("Promise.all Exection Time");
    return results;
  } catch (error) {
    console.error("Error creating sentence: ", error);
    throw error;
  }
}

async function createCadavreExquisSequentially<T>(
  sets: (T | Promise<T>)[]
): Promise<T[]> {
  console.time("Sequential Execution Time");
  const results: T[] = [];
  for (let i = 0; i < sets.length; i++) {
    try {
      const randomTime = Math.floor(Math.random() * 2001 + 1000);
      const set = sets[i];
      console.time(`Task ${i} Execution Time`);
      // const result = await Promise.resolve(set);
      const result = await new Promise<T>((resolve) => {
        setTimeout(async () => {
          resolve(await Promise.resolve(set));
        }, randomTime);
        // Promise
      });
      console.timeEnd(`Task ${i} Execution Time`);
      results.push(result);
    } catch (error) {
      console.error("Error processing set: ", error);
      throw error;
    }
  }

  console.log("ALL PROMISES RESOLVED SEQUENTIALLY!!");
  console.timeEnd("Sequential Execution Time");
  return results;
}

enum Strategy {
  Recursive = "RECURSIVE",
  Iterative = "ITERATIVE",
  Reducer = "REDUCER",
  BuiltIn = "BUILT-IN",
  Sequential = "SEQUENTIAL",
  Custom = "CUSTOM",
}

type StrategyInput = Promise<string>[] | (() => Promise<string>)[];

const strategies: Record<
  Strategy,
  (input: StrategyInput) => Promise<string[]>
> = {
  [Strategy.Recursive]: (promises) =>
    promiseAllRecursive(promises as Promise<string>[]),
  [Strategy.Iterative]: (promises) =>
    promiseAllCustomImplementation(promises as Promise<string>[]),
  [Strategy.Reducer]: (promises) =>
    promiseAllReducer(promises as Promise<string>[]),
  [Strategy.BuiltIn]: (promises) =>
    promiseAllBuiltIn(promises as Promise<string>[]),
  [Strategy.Custom]: (promises) =>
    promiseAllIterative(promises as Promise<string>[]),
  [Strategy.Sequential]: (promiseFactories) =>
    promiseAllSequential(promiseFactories as (() => Promise<string>)[]),
};

const Demo = () => {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

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

      // const promises = wordSets.map((set, index) => {
      //   // return () => getRandomWordPromise(set, index);
      //   return getRandomWordPromise(set, index);
      // });

      if (!strategies[selectedStrategy]) {
        throw new Error(`Invalid strategy selected ${selectedStrategy}`);
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

  const generateCadavreExquisWithPromiseAll = async () => {
    setLoading(true);
    try {
      const promises = wordSets.map((set, index) =>
        getRandomWordPromise(set, index)
      );
      const words = await createCadavreExquisWithPromiseAll(promises);
      const result = words.join(" ");
      setOutput(result);
    } catch (error) {
      console.error("Error generating sentence");
    } finally {
      setLoading(false);
    }
  };

  const generateCadavreExquisSequentially = async () => {
    setLoading(true);
    try {
      const promises = wordSets.map((set, index) =>
        getRandomWordPromise(set, index)
      );

      const words = await createCadavreExquisSequentially(promises);

      const result = words.join(" ");

      setOutput(result);
    } catch (error) {
      console.error("Error generating sentence", error);
    } finally {
      setLoading(false);
    }
  };

  // Generate the initial sentence on mount
  useEffect(() => {
    generateCadavreExquisWithPromiseAll();
  }, []); // Ensures it runs only once

  return (
    <Section>
      <div className="max-w-4xl min-h-[20em] md:min-h-[15em] my-6 p-6 bg-yellow-50 border-4 border-yellow-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold font-serif text-yellow-900 mb-4 uppercase">
          Cadavre Exquis
        </h2>
        {loading && (
          <p className="text-yellow-800 text-3xl font-serif leading-relaxed">
            Creating...
          </p>
        )}
        {output && !loading && (
          <p className="text-yellow-800 text-3xl font-serif leading-relaxed">
            <span className="text-3xl text-yellow-900 font-bold mr-2">
              &ldquo;
            </span>
            {output}
            <span className="text-4xl text-yellow-900 font-bold ml-2">
              &rdquo;
            </span>
          </p>
        )}
        <div className="absolute inset-0 rounded-lg border-dotted border-yellow-700 border-2 pointer-events-none"></div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 space-y-4">
        <button
          className="rounded bg-blue-500 text-white p-2 active:bg-blue-700 active:shadow-lg "
          onClick={generateCadavreExquisSequentially}
        >
          Create new sequential
        </button>
        <button
          className="rounded bg-blue-500 text-white p-2 active:bg-blue-700 active:shadow-lg "
          onClick={generateCadavreExquisWithCustomPromiseAllMethod}
        >
          Create new concurrently
        </button>
        <button
          className="rounded bg-blue-500 text-white p-2 active:bg-blue-700 active:shadow-lg "
          onClick={generateCadavreExquisWithPromiseAll}
        >
          Create new Promise.all
        </button>
        <button
          className="rounded bg-blue-500 text-white p-2 active:bg-blue-700 active:shadow-lg "
          onClick={() => generateCadavreExquis(Strategy.Sequential)}
        >
          Create new One
        </button>
      </div>
    </Section>
  );
};

export default Demo;
