import '../styles/Project.css'

const Project = (props) => {
    return (
        <div className='project'>
            <h3>{props.project.title}</h3>
            <p>{props.project.description}</p>
            <a href={props.project.gitLink}>Github</a>
            {props.getDeployment(props.project)}
        </div>
    )
}

export default Project