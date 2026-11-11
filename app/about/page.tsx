import SkillCard from '@/components/SkillCard';

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">

            <section className="mb-10">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">About Me</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    I am a web development student who enjoys learning and creating projects.
                    I am currently developing my skills in HTML, CSS, JavaScript, React, and Next.js.
                    Every project is an opportunity to learn something new and improve my programming skills.
                </p>
            </section>

            <SkillCard
                title="Technologies I am Learning"
                skills={[
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'React',
                    'Next.js',
                    'TypeScript',
                    'Tailwind CSS'
                ]}
            />

        </main>
    );
}