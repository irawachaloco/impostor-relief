const IMPOSTOR_QUOTE = `Why feel like a fake when faking it is the only thing you're
truly good at?`;

const QUOTE_SIGNATURE = `The Impostør`;

const WELCOME_TEXT = `Welcome to Impostor Relief!`;

const CONTENT_TEXT_1 = `Perhaps, if you are like me, you may have fallen victim to the infamous 'impostor syndrome' which seems to strike anyone who dares or simply happens to step outside their comfort zone.`;

const CONTENT_TEXT_2 = `I am a philosopher by education and a chronic artist by the pulse of my soul. Then, I became a programmer.`;

const CONTENT_TEXT_3 = `As a patient of philosophy and art turned into a coder, I can tell you, coding is hard.`;

const CONTENT_TEXT_4 = `Sometimes you will feel overwhelmed, but such is life, isn't it?`;

const CONTENT_TEXT_5 = `So, let's embrace the impostor feeling and dive deeper into the authentic coding world. This will be my personal scratchpad as I explore and learn some genuine dev stuff!`;

const CONTENT_TEXT_6 = `Cheers, and I hope you enjoy it.`;

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl_ flex flex-col">
        <h1 className="text-[#686868] text-2xl font-bold mb-8">
          {WELCOME_TEXT}
        </h1>
        <blockquote className="max-w-md flex flex-col self-end relative px-8 py-4 md:px-12 md:py-6 bg-gray-50 border-l-4 border-gray-300 italic text-gray-800">
          <p className="text-xl leading-relaxed font-serif text-gray-900">
            &ldquo;
            {IMPOSTOR_QUOTE}
            &rdquo;
          </p>
          <footer className="mt-4 text-right text-sm font-semibold text-gray-700">
            &mdash; {QUOTE_SIGNATURE}
          </footer>
        </blockquote>
        <div className="pt-10 max-w-prose">
          <h2 className="text-xl pt-10">
            <p>{CONTENT_TEXT_1}</p>
            <br />
            <p>{CONTENT_TEXT_2}</p>
            <br />
            <p>{CONTENT_TEXT_3}</p>
            <br />
            <p>{CONTENT_TEXT_4}</p>
            <br />
            <p>{CONTENT_TEXT_5}</p>
            <br />
            <p>{CONTENT_TEXT_6}</p>
            <br />
          </h2>
        </div>
      </div>
    </div>
  );
}
