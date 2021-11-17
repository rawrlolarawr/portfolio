import '../styles/Project.css'

const Project = (props) => {
    return (
        <div className='project'>
            <h3>{props.project.name}</h3>
            <p>{props.project.description}</p>
            <a href={props.project.gitLink}>Github</a>
        </div>
    )
}

export default Project