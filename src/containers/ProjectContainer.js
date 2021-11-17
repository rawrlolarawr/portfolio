import '../styles/ProjectContainer.css'
import Project from '../components/Project'

const ProjectContainer = props => {
    const keyGen = (input) => {
        return `${Date.now() * Math.floor(Math.random() * 100)}-${input.replace(/\s/g, '')}`
    }

    const renderProjects = projects => {
        return projects.map(project => <div className='card'><Project key={keyGen(project.name)} project={project}/></div>)
    }

    return (
        <>
            <h2>Projects</h2>
            <ol>
                {renderProjects(props.projects)}
            </ol>
        </>
    )
}

export default ProjectContainer