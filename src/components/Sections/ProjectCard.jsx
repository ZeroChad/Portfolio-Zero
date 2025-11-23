import Card from "@/components/Card";
import Capstone from "@/assets/Capstone.jpg";;
import MGBDashboard from "@/assets/MGBDashboard.png";;
import { FolderGit2, Helicopter } from "lucide-react";

export default function ProjectCard() {
    return(
   <Card className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-2xl"><FolderGit2 /></div>
                <h3 className="text-lg font-bold">Projects</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">Here are some of the projects I have worked on</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-xl border border-blue-500/20">
                <img
                src={MGBDashboard}
                draggable="false"
                >
                </img>
                </div>
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/20">
                <img
                src={Capstone}
                draggable="false"
                >
                </img>
                </div>
              </div>
              <a href="#projects">
              <button 
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
                }}
                  className="w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 border border-blue-500/30"
                  >
                <Helicopter /> View All Projects
                </button>
              </a>  
            </Card>
    );
}