import Card from '@/components/Card';
import projects from '@/data/projects';

export default function ProjectsSection() {
  return (
    <div id="projects" className="mt-12 bg-[#05030a]">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-stone-100 mb-3">My Projects</h2>
        <p className="text-stone-400">Showcase of my recent work and creations</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <Card className="overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  draggable="false"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-lg font-bold text-stone-100 mb-2">{project.title}</h3>
              <p className="text-sm text-stone-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}