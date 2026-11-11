import type { Project } from '@/lib/projects-db';

export const instant = false;

export default async function ProjectsPage() {
    const response = await fetch('http://localhost:3000/api/projects', {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }

    const projects: Project[] = await response.json();

    return (
        <main className="min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-4">
                Projects Overview
            </h1>

            <p className="text-lg mb-8">
                Here you can explore my open source and school projects.
            </p>

            <div className="grid gap-6">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="border rounded-lg p-6 shadow-sm"
                    >
                        <h2 className="text-2xl font-bold mb-2">
                            {project.title}
                        </h2>

                        <p>{project.description}</p>

                        <p className="mt-2">
                            <strong>Type:</strong> {project.type}
                        </p>

                        <p>
                            <strong>Technologies:</strong>{' '}
                            {project.technologies.join(', ')}
                        </p>

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline mt-2 inline-block"
                            >
                                View Project
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </main>
    );
}