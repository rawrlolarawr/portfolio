import '../styles/ProjectContainer.css'
import Project from '../components/Project'
import { KeyGen } from '../lib/keygen'

const ProjectContainer = ({ projects }) => {
    const buildProject = project => {
        return {
            title,
            description,
            gitLink,
            blogLink,
            deploy
        }
    }
    const renderItem = (items) => {
        return items.map(project => <div className='card'><Project key={KeyGen(project.title)} project={project}/></div>)
    }

    return (
        <>
            <h2>Projects</h2>
            <ol>
                {renderItem(projects)}
            </ol>
        </>
    )
}

export default ProjectContainer