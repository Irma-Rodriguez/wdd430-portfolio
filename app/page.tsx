import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Solar System Expedition',
    description: 'A responsive web application that displays information about the planets in our solar system using data fetched from two APIs.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    link: 'https://solar-system-expedition.onrender.com/'
  },
  {
    title: 'My Next.js Portfolio',
    description: 'A personal portfolio website built with Next.js to showcase my projects and demonstrate my learning of modern web development.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/Irma-Rodriguez/wdd430-portfolio'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">My Portfolio</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        I'm a web development student learning new technologies and improving my programming skills. I'm currently exploring Next.js, React and JavaScript. I'm still learning, and I'm excited become a better developer every day. Here are some of the projects I've worked on:
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}