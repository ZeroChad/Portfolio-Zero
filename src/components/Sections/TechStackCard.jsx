import Card from "@/components/Card";
import { Cpu } from "lucide-react";
import techStack from "@/data/techStack";

export default function TechStackCard() {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-2">
        <Cpu className="text-2xl" />
        <h3 className="text-lg font-bold">My Tech Stack</h3>
      </div>
      <p className="text-sm text-slate-400 mb-4">
        My tech stack I use on my projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-colors 
            transition-transform hover:rotate-10 hover:-translate-x-1"
          >
            <span className="text-2xl">{tech.icon}</span>
            <div>
              <div className="font-medium text-sm">{tech.name}</div>
              {tech.version && (
                <div className="text-xs text-slate-400">{tech.version}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
