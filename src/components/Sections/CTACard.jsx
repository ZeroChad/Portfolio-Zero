import Card from "@/components/Card";
import { Briefcase, Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function CTACard() {
    return(
        <Card className="flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-900/20 to-blue-900/20 border-blue-500/30">
              <div className="text-5xl mb-4">👥</div>
              <h2 className="text-2xl font-bold mb-2">Let's Build Something Great Together</h2>
              <p className="text-slate-400 mb-6">
                I help bring ideas to life through clean code, modern UI, and powerful web experiences.
                Let’s make yours stand out.
                </p>
              
              <div className="flex gap-3">
                <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">
                  <Briefcase size={20} />
                </button>

                <a
                    href="https://www.linkedin.com/in/escarda-drake-a9a11137b/" 
                    target ="_blank"
                    rel="noopener noreferrer"          
                    >
                <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">
                <Linkedin size={20}/>
                </button>
                </a>
                
                <a
                    href="https://github.com/ZeroChad"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">
                    <SiGithub size={20} />
                </button>
                </a>

              </div>
              <div className="mt-6 text-xs text-slate-500">
                Made by Drake Escarda
                <br />© 2025 All rights reserved
              </div>
            </Card>
    );  
}