import ReactMarkdown from 'react-markdown'

export const renderMarkdown = path => {
    const md = import(path)

    return (
        <>
            {console.log(path)}
            <ReactMarkdown source={md} />
        </>
    )
}