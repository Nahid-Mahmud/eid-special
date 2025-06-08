import AnimateStars from "./components/AnimateStars";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* <AnimatedBackground /> */}
      <AnimateStars />
    </div>
  );
}
