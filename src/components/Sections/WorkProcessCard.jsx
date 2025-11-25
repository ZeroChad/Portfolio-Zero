import Card from "@/components/Card";
import { Cog } from "lucide-react";
import workProcess from "@/data/wpc";

export default function WorkProcessCard() {
  return (
    <Card className="min-h-[360px] sm:min-h-[520px] lg:min-h-[680px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="text-2xl">
          <Cog className="animate-spin" />
        </div>
        <h3 className="text-lg font-bold">Work Process</h3>
      </div>

      <p className="text-sm text-slate-400 mb-4">
        The work process explained in 7 simple steps
      </p>

      <div className="space-y-4">
        {workProcess.map((item, index) => (
          <div
            key={item.step}
            className="flex gap-3 animate-[wave-down_3.5s_ease-in-out_infinite]"
            style={{ animationDelay: `${index * 0.35}s` }} // 👈 wave effect
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-300 font-bold text-sm shrink-0">
                {item.step}
              </div>
            </div>

            <div className="flex-1">
              <div className="font-medium mb-1">{item.title}</div>
              <div className="text-sm text-slate-400">{item.desc}</div>
            </div>

            <div className="text-slate-600 text-sm">#{item.step}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
