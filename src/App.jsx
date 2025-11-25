import TechStackCard from './components/Sections/TechStackCard.jsx';
import ProfileCard from './components/Sections/ProfileCard.jsx';
import ServicesCard from './components/Sections/ServicesCard.jsx';
import ProjectCard from './components/Sections/ProjectCard.jsx';
import CTACard from './components/Sections/CTACard.jsx';
import WorkProcessCard from './components/Sections/WorkProcessCard.jsx';
import ContactCard from './components/Sections/ContactCard.jsx';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#05030a] text-white">

      <div className="px-3 sm:px-4 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">

          {/* LEFT COLUMN */}
          <div className="space-y-3 sm:space-y-4">
            <ProfileCard />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <ServicesCard />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <ProjectCard />
          </div>

          {/* MIDDLE COLUMN */}
          <div className="space-y-3 sm:space-y-4">
            <TechStackCard />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <CTACard />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-3 sm:space-y-4">
            <WorkProcessCard />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <ContactCard />
          </div>

        </div>
      </div>
    </div>
  </div>
  );
}