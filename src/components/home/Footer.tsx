export const Footer = () => (
    <footer className="bg-gray-900 text-white pl-10 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            {/* About Section */}
            <div>
                <h3 className="text-lg font-semibold mb-4">About Structify</h3>
                <p className="text-sm text-gray-400">
                    Structify simplifies your development workflow by transforming designs into structured folder hierarchies. Build smarter, faster, and cleaner.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li>
                        <a href="/" className="text-gray-400 hover:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/onboarding" className="text-gray-400 hover:text-white">
                            Get Started
                        </a>
                    </li>
                    <li>
                        <a href="/features" className="text-gray-400 hover:text-white">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-400 hover:text-white">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Structify. All rights reserved.
            </p>
            <p className="text-sm text-gray-200 py-3">
                Built with ❤️ by Yogeesh.
            </p>
        </div>
    </footer>
);
