
const Header = ({title,onAdd,showAdd}) => {
    
    return (
        <header className='header'>
           <h1  style={headingStyle}> {title}</h1>
           <button  className='btn'  onClick={onAdd} >{showAdd ? 'Close' : 'Add'}</button>
        </header>
    )
}


const headingStyle={
    textAlign : 'Center',
}

export default Header
