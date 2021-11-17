import '../styles/Header.css'

const Header = props => {
    return (
        <div className='header'>
            <h1><strong>♥///♥</strong></h1>
            <h1>{props.data.name}</h1>
        </div>
    )
}

export default Header