const About = () => {
    return (
        <div id="about" className="max-w-6xl mx-auto pt-20">
            <h1 className="text-3xl font-light tracking-wide uppercase my-12">About</h1>
            <p className="leading-loose mb-4">
                Justin Miller is a photographer specializing in nature, wildlife, and snowy landscapes. His work captures natural environments with a focus on unfiltered moments and raw details. Through his lens, he documents the quiet, the untamed, and the transient. 
                Each image is a study in composition, timing, and presence, aiming to highlight perspectives that might otherwise go unnoticed.
            </p>
            <p className="leading-loose">
                Explore the collection. For inquiries regarding collaborations or commissions, reach out at  
                <a href="mailto:justinamiller10123@gmail.com" className="ml-1 text-black underline transition-opacity duration-300 hover:opacity-70">
                    justinamiller10123@gmail.com
                </a>.
            </p>
        </div>
    );
};

export default About;
