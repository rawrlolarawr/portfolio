import { renderMarkdown } from "../bin/renderMarkdown"

const Post = props => {
    return (
        <div className='post'>
            <h3>{props.post.title}</h3>
            <p>{renderMarkdown(props.post.contentPath)}</p>
            <small>{props.post.date}</small>
        </div>
    )
}

export default Post