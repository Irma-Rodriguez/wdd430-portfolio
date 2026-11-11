export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'My Portfolio',
        description: 'My personal portfolio developed with Next.js.',
        type: 'school',
        technologies: ['Next.js', 'React', 'TypeScript'],
        link: 'https://github.com/Irma-Rodriguez/wdd430-portfolio',
    },
    {
        id: 2,
        title: 'My First Open Source Contribution',
        description: 'An open source contribution using React.',
        type: 'opensource',
        technologies: ['React', 'JavaScript'],
    },
];

export function getProjects(type?: string | null): Project[] {
    if (type) {
        return projects.filter(p => p.type === type);
    }

    return projects;
}

export function getProjectById(id: number): Project | null {
    return projects.find(p => p.id === id) ?? null;
}