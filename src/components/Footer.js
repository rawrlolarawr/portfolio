import '../styles/Footer.css'

const Footer = props => {
    return (
        <div className='footer'>
            <ul>
                <li><strong>RawrLolaRawr</strong></li>
                <li><a href={'mailto:' + props.data.email} target="_blank" rel="noreferrer">Send Email</a></li>
                <li><a href={props.data.github} target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
        </div>
    )
}

export default Footer