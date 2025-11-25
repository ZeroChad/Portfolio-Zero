import Card from "@/components/Card";
import projects from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-16 bg-[#05030a] py-16">
      {/* Centered container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mb-3">
            My Projects
          </h2>
          <p className="text-stone-400">
            Showcase of my recent work and creations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group h-full">
              <Card className="h-full flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/40 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-blue-500/20 transition-all duration-300">
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable="false"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-stone-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-400 mb-4">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-500/15 text-blue-300 text-xs rounded-md border border-blue-500/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
