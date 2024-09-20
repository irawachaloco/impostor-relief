import CodeBlock from "./components/CodeBlock";

export default function Home() {
  return (
    <div className="">
      <h1 className="font-bold text-xl pb-4">
        Why feel like a &quot;fraudulent professional&quot; when you can embrace
        your inner imposter? Let&apos;s get impostorie.
      </h1>
      <h2>
        This will be a scratch book for practicing while learning some real
        developer stuff.
      </h2>

      <div>
        <CodeBlock
          language="javascript"
          code="console.log('Hello, impostor!');"
        />
      </div>
    </div>
  );
}
