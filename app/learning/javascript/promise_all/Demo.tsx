"use client";

import Section from "@/app/components/Section";
import React, { useCallback, useEffect, useState } from "react";

type WordSets = string[][];
type StrategyInput = Promise<string>[] | (() => Promise<string>)[];

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
    const randomMilliseconds = Math.floor(Math.random() * 2001);
    setTimeout(() => {
      const word = set[index];
      console.log(
        `Picked word/s ->  ${word}, set: ${setIndex} time: ${randomMilliseconds} ms`
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

enum Strategy {
  Recursive = "RECURSIVE",
  Iterative = "ITERATIVE",
  Reducer = "REDUCER",
  BuiltIn = "BUILT-IN",
  Custom = "CUSTOM",
  Sequential = "SEQUENTIAL",
}

const strategies = {
  [Strategy.Recursive]: (inputs: StrategyInput) =>
    promiseAllRecursive(inputs as Promise<string>[]),
  [Strategy.Iterative]: (inputs: StrategyInput) =>
    promiseAllCustomImplementation(inputs as Promise<string>[]),
  [Strategy.Reducer]: (inputs: StrategyInput) =>
    promiseAllReducer(inputs as Promise<string>[]),
  [Strategy.BuiltIn]: (inputs: StrategyInput) =>
    promiseAllBuiltIn(inputs as Promise<string>[]),
  [Strategy.Custom]: (inputs: StrategyInput) =>
    promiseAllIterative(inputs as Promise<string>[]),
  [Strategy.Sequential]: (inputs: StrategyInput) =>
    promiseAllSequential(inputs as (() => Promise<string>)[]),
};

const Demo = () => {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<Strategy>(Strategy.BuiltIn);
  const [hasLoaded, setHasLoaded] = useState(false);

  const generateCadavreExquis = useCallback(async (): Promise<void> => {
    setLoading(true);
    console.time("Cadavre Exquis Generation Execution Time");

    try {
      // Decide input type based on strategy
      const input =
        strategy === Strategy.Sequential
          ? wordSets.map((set, index) => {
              return () => getRandomWordPromise(set, index);
            })
          : wordSets.map((set, index) => {
              return getRandomWordPromise(set, index);
            });

      const result = await strategies[strategy](input as StrategyInput);

      setOutput(result.join(" "));
    } catch (error) {
      console.error("Error generating sentence:", error);
    } finally {
      console.timeEnd("Cadavre Exquis Generation Execution Time");
      setLoading(false);
    }
  }, [strategy]);

  // Generate the initial sentence on mount
  useEffect(() => {
    if (!hasLoaded) {
      generateCadavreExquis();
      setHasLoaded(true);
    }
  }, [generateCadavreExquis, hasLoaded]); // Ensures it runs only once

  return (
    <Section>
      <div className="max-w-4xl min-h-[20em] md:min-h-[15em] my-6 p-6 bg-yellow-50 border-4 border-yellow-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold font-serif text-yellow-900 mb-4 uppercase">
          Cadavre Exquis
        </h2>
        {loading ? (
          <p className="text-yellow-800 text-3xl font-serif leading-relaxed">
            Creating...
          </p>
        ) : (
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
        <select
          className="rounded border border-gray-300 p-2"
          value={strategy}
          onChange={(e) => setStrategy(e.target.value as Strategy)}
          aria-label="Select strategy"
        >
          {Object.values(Strategy).map((strat) => (
            <>
              <option key={strat} value={strat}>
                {strat}
              </option>
            </>
          ))}
        </select>

        <button
          className="rounded bg-blue-500 text-white p-2 active:bg-blue-700 active:shadow-lg "
          onClick={generateCadavreExquis}
          disabled={loading}
        >
          Generate
        </button>
        {/* <button
          className="rounded bg-blue-500 text-white p-2 active:bg-blue-700 active:shadow-lg "
          onClick={() => generateCadavreExquis(Strategy.BuiltIn)}
        >
          Create concurrently
        </button> */}
      </div>
    </Section>
  );
};

export default Demo;
