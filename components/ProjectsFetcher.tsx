'use client';

import { useEffect, useState } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}

export default function ProjectsFetcher({
    endpoint,
}: {
    endpoint: string;
}) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }

                const data: Project[] = await response.json();
                setProjects(data);
            } catch {
                setError('Could not load projects');
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, [endpoint]);

    if (loading) return <p>Loading projects...</p>;

    if (error) return <p>{error}</p>;

    return (
        <main>
            <h1>My Projects</h1>

            {projects.map((project) => (
                <article key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>Type: {project.type}</p>
                    <p>Technologies: {project.technologies.join(', ')}</p>

                    {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer">
                            View project
                        </a>
                    )}
                </article>
            ))}
        </main>
    );
}
