// State: which filter button is selected
import { useState } from 'react'

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'fullstack',
        categoryLabel: 'Full-Stack',
        description: 'A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.',
        image: 'https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
        id: 2,
        title: 'Weather Dashboard',
        category: 'frontend',
        categoryLabel: 'Frontend',
        description: 'Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.',
        image: 'https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App',
        tags: ['JavaScript', 'CSS3', 'API'],
    },
    {
        id: 3,
        title: 'Task Management App',
        category: 'webapp',
        categoryLabel: 'Web App',
        description: 'Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.',
        image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager',
        tags: ['React', 'TypeScript', 'Firebase'],
    },
    {
        id: 4,
        title: 'Creative Portfolio',
        category: 'design',
        categoryLabel: 'Design',
        description: 'Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.',
        image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site',
        tags: ['HTML5', 'CSS3', 'GSAP'],
    },
]

function Projects() {
    const [activeFilter, setActiveFilter] = useState('all')
    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter)
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2>Featured Projects</h2>

                <div className="filter-buttons">
                    <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All Projects</button>
                    <button className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`} onClick={() => setActiveFilter('frontend')}>Frontend</button>
                    <button className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`} onClick={() => setActiveFilter('fullstack')}>Full-Stack</button>
                    <button className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`} onClick={() => setActiveFilter('design')}>Design</button>
                    <button className={`filter-btn ${activeFilter === 'webapp' ? 'active' : ''}`} onClick={() => setActiveFilter('webapp')}>Web App</button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href="#" className="project-link">
                                            <span>🔗</span> Live Demo
                                        </a>
                                        <a href="#" className="project-link">
                                            <span>💻</span> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-category">{project.categoryLabel}</span>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span className="project-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
