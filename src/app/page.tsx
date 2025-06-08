import AnimatedText from "./components/AnimatedText";
import AnimateStars from "./components/AnimateStars";
import Moon from "./components/Moon";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* <AnimatedBackground /> */}
      <AnimateStars />
      <AnimatedText />
      <Moon />
    </div>
  );
}
