import Card from "@/components/Card";
import { PhoneCall, MailCheck, Smartphone } from "lucide-react";

export default function ContactCard() {
    return(
        <Card>
              <div className="flex items-center gap-2 mb-3">
                <div className="text-2xl"><PhoneCall /></div>
                <h3 className="text-lg font-bold">Contact</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">Feel free to reach out to me anytime</p>
              
              <div className="space-y-4">
                {/* Email */}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('drakeescarda13@gmail.com');
                    alert('Email copied to clipboard!');
                  }}
                  className="w-full flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:bg-slate-800/80 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-300 group-hover:bg-blue-600/30 transition-colors">
                    <MailCheck />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-xs text-slate-500 mb-0.5">Email</div>
                    <div className="text-sm font-medium text-slate-200 break-all">drakeescarda13@gmail.com</div>
                  </div>
                  <div className="text-xs text-slate-500">Click to copy</div>
                </button>

                {/* Phone */}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('09543828548');
                    alert('Phone number copied to clipboard!');
                  }}
                  className="w-full flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:bg-slate-800/80 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-300 group-hover:bg-blue-600/30 transition-colors">
                    <Smartphone />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-xs text-slate-500 mb-0.5">Phone</div>
                    <div className="text-sm font-medium text-slate-200">+63 954 382 8548</div>
                  </div>
                  <div className="text-xs text-slate-500">Click to copy</div>
                </button>
              </div>
            </Card>
    );
}