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
    <Card className="mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:gap-5 w-full">
                <img 
                  src={frog} 
                  alt="Profile"
                  draggable={false}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-4xl flex-shrink-0 shadow-lg mx-auto sm:mx-0"
                />
                
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h2 className="text-xl font-bold">Drake Escarda</h2>
                    <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30 mb-2">
                      Available To Work
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

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2 hover:-transalte-y-0.5">
                      <Briefcase  size={18} />
                      Hire Me
                    </button>
                </div>
              </div>
            </Card>
            );
}