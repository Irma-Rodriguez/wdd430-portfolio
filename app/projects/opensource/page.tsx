import { Suspense } from 'react';
import { getProjects } from '@/lib/projects-db';
import ProjectList from '@/components/ProjectList';

async function OpenSourceProjects() {
    const projects = await getProjects('opensource');

    return <ProjectList projects={projects} />;
}

export default function OpenSourceProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-12">
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