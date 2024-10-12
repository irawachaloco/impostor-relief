export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl_ flex flex-col">
        <h1 className="text-[#686868] text-2xl font-bold mb-8">{`Welcome to Impostor Relief!`}</h1>

        <blockquote className="max-w-md flex flex-col self-end relative px-8 py-4 md:px-12 md:py-6 bg-gray-50 border-l-4 border-gray-300 italic text-gray-800">
          <p className="text-xl leading-relaxed font-serif text-gray-900">
            &ldquo;
            {`Why feel like a fake when faking it is the only thing you're
            truly good at?`}
            &rdquo;
          </p>
          <footer className="mt-4 text-right text-sm font-semibold text-gray-700">
            &mdash; The Impostør
          </footer>
        </blockquote>
        <div className="pt-10 max-w-prose">
          <h2 className="text-xl pt-10">
            <p>
              {`Perhaps many of you, like me, may have fallen victim to the
              infamous 'impostor syndrome,' whose cruelty seems to be on a
              contiuously growing.`}
            </p>
            <br />
            <p>
              {`I am a philosopher by education and a chronic artist—or at least,
              that’s how I like to think of myself.`}
            </p>
            <br />
            <p>
              {`As a philosopher and artist patient turned coder, I can tell you,
              coding is hard.`}
            </p>
            <br />
            <p>{`Sometimes you will feel overwhelmed, but such life isn't it?`}</p>
            <br />
            <p>
              {`So, let's embrace the impostor feeling and dive deeper into the
              "real" coding world. This will be my personal scratchpad as I
              learn some real dev skills!`}
            </p>
            <br />
            <p>Cheers, and I hope you enjoy it.</p>
            <br />
          </h2>
        </div>
      </div>
    </div>
  );
}
