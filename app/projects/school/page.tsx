import { Suspense } from 'react';
import { getProjects } from '@/lib/projects-db';
import ProjectList from '@/components/ProjectList';

async function SchoolProjects() {
    const projects = await getProjects('school');

    return <ProjectList projects={projects} />;
}

export default function SchoolProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">
                School Projects
            </h1>

            <p className="text-lg mb-8">
                Here are the projects I have completed as part of my school assignments.
            </p>

            <Suspense fallback={<p>Loading school projects...</p>}>
                <SchoolProjects />
            </Suspense>
        </main>
    );
}