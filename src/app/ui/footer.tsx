export default function Footer() {
    return (
        <footer className="bg-gray-200 rounded-lg shadow-sm m-4 dark:bg-gray-700">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    &copy;{" 2025 "}
                    <a href="https://ksu.edu" className="hover:underline">
                        Kansas State University
                    </a>
                </span>
            </div>
        </footer>
    );
}