import Card from "@/components/Card";
import { Briefcase, Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function CTACard() {
  return (
    <Card className="flex flex-col items-center text-center gap-4 bg-gradient-to-br from-blue-900/20 to-blue-900/20 border-blue-500/30">
      <div className="text-4xl sm:text-5xl">👥</div>
      <h2 className="text-xl sm:text-2xl font-bold">
        Let's Build Something Great Together
      </h2>
      <p className="text-sm sm:text-base text-slate-400 max-w-xl">
        I help bring ideas to life through clean code, modern UI, and powerful web experiences. Let’s make yours stand out.
      </p>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full">
        <button className="flex-1 min-w-[140px] sm:flex-none px-4 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
          <Briefcase size={18} />
          <span>Hire Me</span>
        </button>

        <a
          href="https://www.linkedin.com/in/escarda-drake-a9a11137b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[120px] sm:flex-none"
        >
          <button className="w-full px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </button>
        </a>

        <a
          href="https://github.com/ZeroChad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[120px] sm:flex-none"
        >
          <button className="w-full px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2">
            <SiGithub size={18} />
            <span>GitHub</span>
          </button>
        </a>
      </div>

      <div className="pt-2 text-xs text-slate-500">
        Made by Drake Escarda
        <br />
        © 2025 All rights reserved
      </div>
    </Card>
  );  
}    