import type { Project } from '@/lib/projects-db';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </section>
    );
}