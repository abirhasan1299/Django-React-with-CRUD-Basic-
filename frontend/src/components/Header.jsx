
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
           <div className='row header'>
                <ul>
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/add-product'}>Add-Product</Link> </li>
                </ul>
           </div>
        </>
    );
}

export default Header;