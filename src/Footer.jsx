const Footer = () => {
    return (
        <footer className="w-full text-center py-12 text-sm">
            <p className="mb-2">Made by <a href="https://github.com/samanthacabrera" className="hover:underline">Sam Cabrera</a></p>
            <nav className="flex justify-center space-x-4">
                <a href="mailto:your@email.com" className="hover:underline">Contact</a>
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
            </nav>
            <p className="mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    );
};

export default Footer;
