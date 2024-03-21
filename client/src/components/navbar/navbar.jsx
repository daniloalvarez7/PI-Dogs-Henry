import './navbar.css';

function Navbar({handleChange, handleSubmit}) {
  return (
    <div className='search-box'>
        <form onChange = {handleChange} >
            <input placeholder='Find your Dog' type='search' />
            <button type='submit' onClick = {handleSubmit} >Search</button>
        </form>
    </div>
  );
}

export default Navbar;