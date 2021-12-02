import '../styles/ProjectContainer.css'

import { renderItem } from '../bin/renderItem'

const ProjectContainer = props => {
    

    return (
        <>
            <h2>Projects</h2>
            <ol>
                {renderItem(props.projects, 'Project')}
            </ol>
        </>
    )
}

export default ProjectContainer