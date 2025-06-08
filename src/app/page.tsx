import Link from "next/link";
import AnimatedText from "./components/AnimatedText";
import AnimateStars from "./components/AnimateStars";
import { Github, Linkedin, Mail } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* <AnimatedBackground /> */}
      <AnimateStars />
      <AnimatedText />

      <div className="flex gap-4 pt-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
        <Link
          className="text-md group h-12 w-12 rounded-full border flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
          href="https://github.com/Nahid-Mahmud"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-7 w-7 " />
        </Link>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="text-md group h-12 w-12 rounded-full border flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300 animate-bounce "
              href="https://www.linkedin.com/in/md-nahid-mahmud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-7 w-7 " />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Lets connect!</p>
          </TooltipContent>
        </Tooltip>

        <Link
          className="text-md group h-12 w-12 rounded-full border flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
          href="mailto:nahidmahmudn2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="h-7 w-7" />
        </Link>
      </div>
    </div>
  );
}
