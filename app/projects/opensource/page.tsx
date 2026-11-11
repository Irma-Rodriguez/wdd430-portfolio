import { Suspense } from 'react';
import type { Project } from '@/lib/projects-db';

async function OpenSourceProjects() {
    const response = await fetch(
        'http://localhost:3000/api/projects?type=opensource',
        { cache: 'no-store' }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch open source projects');
    }

    const projects: Project[] = await response.json();

    return (
        <div>
            {projects.map((project) => (
                <article
                    key={project.id}
                    className="border rounded-lg p-6 mb-4"
                >
                    <h2 className="text-2xl font-bold">
                        {project.title}
                    </h2>

                    <p>{project.description}</p>

                    <p>
                        <strong>Technologies:</strong>{' '}
                        {project.technologies.join(', ')}
                    </p>
                </article>
            ))}
        </div>
    );
}

export default function OpenSourcePage() {
    return (
        <main className="p-8">
            <h1 className="text-4xl font-bold mb-4">
                Open Source Projects
            </h1>

            <p className="text-lg mb-8">
                Here are my open source projects.
            </p>

            <Suspense fallback={<p>Loading open source projects...</p>}>
                <OpenSourceProjects />
            </Suspense>
        </main>
    );
}