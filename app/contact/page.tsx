export default function ContactPage() {
    return (
        <main className="p-8 text-center">

            <h1 className="text-4xl font-bold text-blue-900 mb-4">
                Contact Me
            </h1>

            <p className="text-gray-600 text-lg mb-6">
                Welcome to my contact page!
            </p>

            <p className="text-gray-700 mb-4">
                If you have any questions or would like to get in touch, feel free to contact me by email.
            </p>

            <a
                href="mailto:valeryrc07@gmail.com"
                className="text-blue-700 font-semibold hover:text-blue-500 underline"
            >
                valeryrc07@gmail.com
            </a>

        </main>
    );
}
