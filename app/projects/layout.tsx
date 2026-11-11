import Link from "next/link";

export const instant = false;

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-screen p-8">

            <nav className="mb-8 flex gap-6 border-b pb-4">
                <Link
                    href="/projects"
                    className="text-blue-900 hover:text-blue-600 font-semibold"
                >
                    Overview
                </Link>

                <Link
                    href="/projects/opensource"
                    className="text-blue-900 hover:text-blue-600 font-semibold"
                >
                    Open Source
                </Link>

                <Link
                    href="/projects/school"
                    className="text-blue-900 hover:text-blue-600 font-semibold"
                >
                    School
                </Link>
            </nav>

            {children}

        </section>
    );
}