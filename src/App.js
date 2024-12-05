import React, { useState } from 'react';
import { Home, Users, Newspaper, BookOpen, UserPlus, Sparkles } from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState('home');

    // Bright color scheme for MIND
    const mindColors = {
        M: '#00ffff', // Bright Cyan
        I: '#ff00ff', // Bright Magenta
        N: '#ffff00', // Bright Yellow
        D: '#00ff00'  // Bright Green
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Bar */}
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold">
                                <span className="tracking-wide">
                                    <span style={{ color: mindColors.M }}>M</span>
                                    <span style={{ color: mindColors.I }}>I</span>
                                    <span style={{ color: mindColors.N }}>N</span>
                                    <span style={{ color: mindColors.D }}>D</span>
                                </span>
                                <span className="text-gray-800"> SIGHT</span>
                            </h1>
                            <span className="ml-2 text-sm text-gray-500">Cognitive Neuroscience Lab</span>
                        </div>
                        <div className="flex space-x-8">
                            <NavButton icon={<Home size={20} />} text="Home" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
                            <NavButton icon={<Users size={20} />} text="People" active={activeTab === 'people'} onClick={() => setActiveTab('people')} />
                            <NavButton icon={<Newspaper size={20} />} text="News" active={activeTab === 'news'} onClick={() => setActiveTab('news')} />
                            <NavButton icon={<BookOpen size={20} />} text="Papers" active={activeTab === 'papers'} onClick={() => setActiveTab('papers')} />
                            <NavButton icon={<UserPlus size={20} />} text="Join Us" active={activeTab === 'join'} onClick={() => setActiveTab('join')} />
                            <NavButton icon={<Sparkles size={20} />} text="Fun" active={activeTab === 'fun'} onClick={() => setActiveTab('fun')} />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section with Background Image */}
            <div
                className="bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: `url('/images/websiteBg.jpg')`,
                    minHeight: '500px'
                }}
            >
                <div className="max-w-7xl mx-auto px-4 py-24 text-center bg-black bg-opacity-50">
                    <h2 className="text-5xl font-bold text-white mb-6 tracking-wider">
                        Welcome to Mind Sight Neuroscience Lab
                    </h2>
                    <p className="text-xl text-white max-w-3xl mx-auto">
                        Exploring the neural mechanisms of visual perception and cognition
                    </p>
                </div>
            </div>

            {/* Main Content Sections */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                {activeTab === 'home' && <HomeSection />}
                {activeTab === 'people' && <PeopleSection />}
                {activeTab === 'news' && <NewsSection />}
                {activeTab === 'papers' && <PapersSection />}
                {activeTab === 'join' && <JoinSection />}
                {activeTab === 'fun' && <FunSection />}
            </main>

            {/* Footer */}
            <footer className="py-8" style={{ backgroundColor: '#004A99' }}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-4 gap-8">
                        <div className="col-span-1">
                            <img
                                src="/images/Runner_bg.jpeg"
                                alt="CSUB Runner"
                                className="w-full h-auto max-w-xs"
                            />
                        </div>
                        <div className="col-span-3 text-white grid grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                                <p>California State University Bakersfield</p>
                                <p>Department of Psychology</p>
                                <p>Email: mmishra@csub.edu</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-gray-300">Lab Resources</a></li>
                                    <li><a href="#" className="hover:text-gray-300">Publications</a></li>
                                    <li><a href="#" className="hover:text-gray-300">Student Opportunities</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="https://twitter.com/MarutiMishra15" className="hover:text-gray-300">Twitter</a>
                                    <a href="https://scholar.google.com/citations?hl=en&user=Jfj19GQAAAAJ&view_op=list_works" className="hover:text-gray-300">Google Scholar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const NavButton = ({ icon, text, active, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${active
                ? 'text-gray-900 bg-gray-100'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            }`}
    >
        {icon}
        <span className="ml-2">{text}</span>
    </button>
);

const HomeSection = () => (
    <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
                Our lab focuses on understanding the neural mechanisms of visual attention, awareness,
                face & emotion perception, and disorders in visual perception. Using cutting-edge
                techniques including EEG/ERP, psychophysics, and diffusion tensor imaging, we explore
                how the human brain processes and perceives visual information.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
                title="Research Focus"
                description="Visual attention & awareness, face & emotion perception, prosopagnosia, ensemble perception"
            />
            <FeatureCard
                title="Methods"
                description="EEG/ERP, Psychophysics, Diffusion tensor imaging"
            />
            <FeatureCard
                title="Collaboration"
                description="Active partnerships with researchers worldwide and opportunities for students"
            />
        </div>
    </div>
);

const PeopleSection = () => (
    <div className="space-y-12">
        <h2 className="text-3xl font-bold">Lab Members</h2>

        {/* Principal Investigator */}
        <div>
            <h3 className="text-2xl font-semibold mb-6">Principal Investigator</h3>
            <div className="grid grid-cols-1 gap-6">
                <PersonCard
                    name="Maruti V. Mishra, Ph.D."
                    title="Principal Investigator"
                    description="Assistant Professor, Department of Psychology, California State University Bakersfield"
                    imageUrl="/images/profiles/Maruti.jpg"
                />
            </div>
        </div>

        {/* Undergraduate Research Assistants */}
        <div>
            <h3 className="text-2xl font-semibold mb-6">Undergraduate Research Assistants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PersonCard
                    name="Research Assistant 1"
                    title="Undergraduate Research Assistant"
                    description="Psychology Major, Class of 2024"
                />
                <PersonCard
                    name="Research Assistant 2"
                    title="Undergraduate Research Assistant"
                    description="Psychology Major, Class of 2025"
                />
            </div>
        </div>

        {/* Undergraduate Teaching Assistants */}
        <div>
            <h3 className="text-2xl font-semibold mb-6">Undergraduate Teaching Assistants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PersonCard
                    name="Teaching Assistant 1"
                    title="Undergraduate Teaching Assistant"
                    description="Psychology Major, Class of 2024"
                />
                <PersonCard
                    name="Teaching Assistant 2"
                    title="Undergraduate Teaching Assistant"
                    description="Psychology Major, Class of 2025"
                />
            </div>
        </div>
    </div>
);

const NewsSection = () => (
    <div className="space-y-8">
        <h2 className="text-3xl font-bold">Latest News</h2>
        <div className="space-y-6">
            <NewsCard
                date="May 2024"
                title="New Publication in Current Biology"
                description="Our latest research on spatial and temporal massive memory in humans has been published."
            />
            <NewsCard
                date="April 2024"
                title="Lab Presentation at VSS 2024"
                description="Our team will be presenting new findings at the Vision Sciences Society annual meeting."
            />
            <NewsCard
                date="March 2024"
                title="New Grant Award"
                description="We received funding to study the neural mechanisms of face perception using EEG/ERP."
            />
        </div>
    </div>
);

const PapersSection = () => (
    <div className="space-y-8">
        <h2 className="text-3xl font-bold">Selected Publications</h2>
        <div className="space-y-4">
            <PaperCard
                title="Perceptual heterogeneity in developmental prosopagnosia is continuous, not categorical"
                authors="DeGutis J, Kirsch L, Evans TC, Fry R, Lee D, Mishra M.V., Campbell A"
                journal="Cortex, 2024"
            />
            <PaperCard
                title="Neural mechanisms of face perception and recognition"
                authors="Mishra M.V., et al."
                journal="Nature Neuroscience Review, 2023"
            />
            <PaperCard
                title="Understanding visual attention through EEG/ERP analysis"
                authors="Mishra M.V., et al."
                journal="Journal of Cognitive Neuroscience, 2023"
            />
        </div>
    </div>
);

const JoinSection = () => (
    <div className="space-y-8">
        <h2 className="text-3xl font-bold">Join Our Lab</h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-lg text-gray-700 mb-6">
                We are always looking for motivated students and researchers to join our team.
                Current opportunities include:
            </p>
            <div className="space-y-4">
                <OpportunityCard
                    title="Undergraduate Research Assistants"
                    description="Gain hands-on experience with EEG/ERP and psychophysics research. Learn about experimental design, data collection, and analysis."
                />
                <OpportunityCard
                    title="Undergraduate Teaching Assistants"
                    description="Help with course preparation, grading, and mentoring students in research methods and statistics."
                />
                <OpportunityCard
                    title="Graduate Students"
                    description="We welcome inquiries from prospective graduate students interested in visual perception and cognitive neuroscience."
                />
            </div>
        </div>
    </div>
);

const FunSection = () => (
    <div className="space-y-8">
        <h2 className="text-3xl font-bold">Lab Life</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Lab Events</h3>
                <p className="text-gray-600">Check out our lab celebrations, outings, and conference adventures!</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                    {/* Placeholder for event images */}
                    <div className="aspect-square bg-gray-200 rounded"></div>
                    <div className="aspect-square bg-gray-200 rounded"></div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Visual Illusions</h3>
                <p className="text-gray-600">Explore interesting visual phenomena and illusions related to our research.</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                    {/* Placeholder for illusion images */}
                    <div className="aspect-square bg-gray-200 rounded"></div>
                    <div className="aspect-square bg-gray-200 rounded"></div>
                </div>
            </div>
        </div>
    </div>
);

const PersonCard = ({ name, title, description, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
            {imageUrl ? (
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full bg-gray-200" /> // Placeholder
            )}
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
        <h4 className="text-gray-600 text-center mb-2">{title}</h4>
        <p className="text-gray-500 text-center">{description}</p>
    </div>
);

const FeatureCard = ({ title, description }) => (
    <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const NewsCard = ({ date, title, description }) => (
    <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const PaperCard = ({ title, authors, journal }) => (
    <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{authors}</p>
        <p className="text-gray-500">{journal}</p>
    </div>
);

const OpportunityCard = ({ title, description }) => (
    <div className="border rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default App;