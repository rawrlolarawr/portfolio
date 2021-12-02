import '../styles/ProjectContainer.css'
import Project from '../components/Project'
import { KeyGen } from '../lib/keygen'

const ProjectContainer = props => {
    const renderItem = (items) => {
        return items.map(project => <div className='card'><Project key={KeyGen(project.title)} project={project} getDeployment={getDeployment}/></div>)
    }
    
    const getDeployment = project => {
        if(project.deploy){
            return (<a href={project.deploy}>Try it out!</a>)
        }
    }    

    return (
        <>
            <h2>Projects</h2>
            <ol>
                {renderItem(props.projects)}
            </ol>
        </>
    )
}

export default ProjectContainer