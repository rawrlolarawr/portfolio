import { Container, Title, Desc, Button } from './styles/ProjectStyles.js'

const Project = ({ project }) => {
    return (
        <Container>
            <Title>{project.title}</Title>
            <Desc>{project.description}</Desc>
            <Button href={project.gitLink}>Github</Button>
            {project.blogLink && <Button href={project.blogLink}>Read More...</Button>}
            {project.deploy && <Button href={project.deploy}>Try it out!</Button>}
        </Container>
    )
}

export default Project