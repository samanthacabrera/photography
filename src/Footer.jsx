const Footer = () => {
    return (
        <footer className="w-full text-center py-12 text-sm opacity-50">
            <p className="mb-2">Made by <a href="https://github.com/samanthacabrera" className="hover:underline">Sam Cabrera</a></p>
            <p className="mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    );
};

export default Footer;
