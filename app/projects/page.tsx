import { Suspense } from 'react';
import { getProjects } from '@/lib/projects-db';
import ProjectList from '@/components/ProjectList';

async function AllProjects() {
    const projects = await getProjects();

    return <ProjectList projects={projects} />;
}

export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">
                Projects Overview
            </h1>

            <p className="text-lg mb-8">
                Here you can explore my open source and school projects.
            </p>

            <Suspense fallback={<p>Loading projects...</p>}>
                <AllProjects />
            </Suspense>
        </main>
    );
}