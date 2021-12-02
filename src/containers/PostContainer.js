import { renderItem } from '../bin/renderItem'

const PostContainer = props => {
    return (
        <>
            <h2>Posts</h2>
            <ol>
                {renderItem(props.posts, 'Post')}
            </ol>
        </>
    )
}

export default PostContainer