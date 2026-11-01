import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-blue-900 text-white py-5 shadow-md">
            <nav className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-2xl font-bold">My Portfolio</div>

                <ul className="flex gap-6 font-medium">
                    <li><Link href="/" className="hover:text-blue-200">Home</Link></li>
                    <li><Link href="/about" className="hover:text-blue-200">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}