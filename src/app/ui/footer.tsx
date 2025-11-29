import DisclaimerLink from "@/app/ui/disclaimer";

export default function Footer() {
    return (
        <footer className="bg-(--bg2) rounded-lg shadow-sm m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-700 sm:text-center">
                    &copy;{" 2025 "}
                    <a href="https://ksu.edu" className="hover:underline">
                        Kansas State University
                    </a>
                </span>
                <span>
                    <DisclaimerLink
                        text='Disclaimer'
                        disclaimer='The information on this webpage was created for educational purposes only.'
                    />
                </span>
            </div>
        </footer>
    );
}