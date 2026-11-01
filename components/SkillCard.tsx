interface SkillCardProps {
    title: string;
    skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
    return (
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
            <ul className="flex flex-wrap gap-3">
                {skills.map((skill) => (<li key={skill}className="bg-gray-100 text-gray-800 px-3 py-2 rounded-md text-sm">{skill}</li>
                ))}
            </ul>
        </section>
    );
}