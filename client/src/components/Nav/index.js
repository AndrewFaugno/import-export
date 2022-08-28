import Auth from '../../utils/auth.js'
import { Link } from 'react-router-dom';

const Nav = () => {
    const loggedIn = Auth.loggedIn();

    return (
        <div className="bg-dark mb-5 p-4">
            <div className="d-flex justify-content-around">
                <div className="m-auto">
                    <h1>
                        <Link to="/" className="">Import Export</Link>
                    </h1>
                </div>
                <div className="m-auto">
                    {loggedIn ? (
                        <Link to="/profile">
                            <span className="material-symbols-outlined profileIcon">account_circle</span>    
                        </Link>
                    ) : (
                    <Link to="/login" className="mr-3">
                        <span className="material-symbols-outlined">login</span>
                    </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Nav;