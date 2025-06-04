import AnimatedBackground from "./components/AnimatedBackground";
import SVGTextMask from "./components/SVGTextMask";

export default function NorFounf() {
  return (
    <div>
      <section className="rounded-xl  border-2_ border-gray-200_ mb-6">
        <div className="relative">
          <SVGTextMask
            text1="404"
            text2="NOT FOUND"
            fontSize={80}
            description="SVG mask displaying an error message"
          />
          <AnimatedBackground />
        </div>
      </section>
    </div>
  );
}
