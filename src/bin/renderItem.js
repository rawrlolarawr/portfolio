import Project from '../components/Project'
import Post from '../components/Post'
import { KeyGen } from '../bin/keygen'

export const renderItem = (items, type) => {
    switch (type) {
        case 'Project':
            return renderProjects(items)
        case 'Post':
            return renderPosts(items)
        default:
            console.log('RenderItems failed: No type')
    }
}

const renderProjects = projects => {
    return projects.map(project => <div className='card'><Project key={KeyGen(project.title)} project={project} getDeployment={getDeployment}/></div>)
}

const renderPosts = posts => {
    return posts.map(post => <div className='card'><Post key={KeyGen(post.title)} post={post} /></div>)
}

const getDeployment = project => {
    if(project.deploy){
        return (<a href={project.deploy}>Try it out!</a>)
    }
}

