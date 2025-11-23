import Card from "@/components/Card";
import { Settings } from "lucide-react";
import  services  from "@/data/services";

export default function ServicesCard() {
    return(
        <Card>
              <div className="flex items-center gap-2 mb-3">
                <div className="text-2xl"><Settings className="animate-spin"/></div>
                <h3 className="text-lg font-bold">Services</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">My services are tailored to your needs and budget</p>
              
              <div className="flex flex-wrap gap-2">
                {services.map((service, i) => (
                  <span key={i} className="px-3 py-1.5 bg-blue-500/10 text-blue-300 text-sm rounded-lg border border-blue-500/20">
                    {service}
                  </span>
                ))}
              </div>
            </Card>
    );
}   