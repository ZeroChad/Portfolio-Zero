import TechStackCard from './components/Sections/TechStackCard.jsx';
import ProfileCard from './components/Sections/ProfileCard.jsx';
import ServicesCard from './components/Sections/ServicesCard.jsx';
import ProjectCard from './components/Sections/ProjectCard.jsx';
import CTACard from './components/Sections/CTACard.jsx';
import WorkProcessCard from './components/Sections/WorkProcessCard.jsx';
import ContactCard from './components/Sections/ContactCard.jsx';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#05030a] text-white p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            <ProfileCard />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <ServicesCard />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <ProjectCard />
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-6">
            <TechStackCard />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <CTACard />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            <WorkProcessCard />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <ContactCard />
          </div>

        </div>
      </div>
    </div>
  );
}