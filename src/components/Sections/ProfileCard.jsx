import frog from "@/assets/frog.jpg";
import Badge from "@/components/Badge.jsx";
import { 
    Briefcase, 
    MapPin, 
    Clock, 
    Coffee, 
    Globe, 
    BriefcaseBusiness, 
    PersonStanding } from "lucide-react";
import Card from "@/components/Card";

export default function ProfileCard() {
  return (
    <Card>
        <div className="flex items-start gap-4">
                <img 
                  src={frog} 
                  alt="Profile"
                  draggable={false}
                  className="w-16 h-16 rounded-2xl"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl font-bold">Drake Escarda</h2>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full animate-pulse">
                      Available To Work
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm mb-3">I'm a Full Stack Developer</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge><Globe className="text-blue-400 w-4 h-4 animate-bounce"/> English / Tagalog / Bisaya</Badge>
                    <Badge><MapPin className="text-blue-400 w-4 h-4 animate-bounce"/> Philippines</Badge>
                    <Badge><Clock className="text-blue-400 w-4 h-4 animate-bounce"/> UTC+08:00</Badge>
                    <Badge><Coffee className="text-blue-400 w-4 h-4 animate-bounce"/> Boba Tea</Badge>
                    <Badge><BriefcaseBusiness className="text-blue-400 w-4 h-4 animate-bounce"/> Freelancer</Badge>
                    <Badge><PersonStanding className="text-blue-400 w-4 h-4 animate-bounce"/> 23y/o</Badge>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 hover:scale-105">
                      <Briefcase  size={18} />
                      Hire Me
                    </button>
                  </div>
                </div>
              </div>
            </Card>
            );
}