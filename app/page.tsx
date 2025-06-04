const IMPOSTOR_QUOTE = `Why feel like a fake when faking it is the only thing you're
truly good at?`;

const QUOTE_SIGNATURE = `The Impostør`;

const WELCOME_TEXT = `Welcome to Impostor Relief!`;

const CONTENT_TEXT_1 = `If you're like me, you may have fallen victim to the infamous 'impostor syndrome' which seems to strike anyone who dares to step outside their comfort zone or simply happens to.`;

const CONTENT_TEXT_2 = `I am a philosopher by education and a chronic artist by the pulse of my soul. Then, against all odds, I became a programmer.`;

const CONTENT_TEXT_3 = `As a long-suffering patient of philosophy and art who somehow ended up in the coding ward, I can assure you—coding is hard. Side effects may include—aside from certain unspeakable horrors I’d rather not name— an ever-growing collection of half-finished side projects, and the uncontrollable urge to rewrite everything from scratch.`;

const CONTENT_TEXT_4 = `Sometimes you will feel overwhelmed. But such is life, isn't it?`;

const CONTENT_TEXT_5 = `So, let's embrace the impostor feeling and dive deeper into the world of authentic coding. This space will be my personal scratchpad as I explore, break things, fix them (hopefully), and document some genuine dev insights along the way.`;

const CONTENT_TEXT_6 = `Cheers, and I hope you enjoy the journey!`;

const CONTENT_TEXT_7 = `— Omar Ponce Bañuelos`;

export default function Home() {
  return (
    <div className="flex flex-col items-center_">
      <div className="max-w-xl_ flex flex-col max-w-2xl">
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
        <div className="max-w-prose text-xl pt-10 space-y-4">
          <p>{CONTENT_TEXT_1}</p>
          <p>{CONTENT_TEXT_2}</p>
          <p>{CONTENT_TEXT_3}</p>
          <p>{CONTENT_TEXT_4}</p>
          <p>{CONTENT_TEXT_5}</p>
          <p>{CONTENT_TEXT_6}</p>
          <p className="italic pt-4">{CONTENT_TEXT_7}</p>
        </div>
      </div>
    </div>
  );
}
