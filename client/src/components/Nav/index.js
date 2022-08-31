import Auth from "../../utils/auth.js";
import { Link } from "react-router-dom";
import Cart from '../Cart/index';

const Nav = () => {
    const loggedIn = Auth.loggedIn();

    const logout = (e) => {
        e.preventDefault();
        Auth.logout();
    };

    return (
        <div className="naviBar bg-dark mb-5 p-4">
            <div className="d-flex justify-content-around">
                <div className="m-auto">
                    <h1>
                        <Link to="/" className="title">
                            Import Export
                        </Link>
                    </h1>
                </div>
                <div className="m-auto">
                    {loggedIn ? (
                        <>
                            <Link to="/profile">
                                <span className="material-symbols-outlined profileIcon">account_circle</span>
                            </Link>
                            <a href="/" onClick={logout} className="mx-5">
                                <span className="material-symbols-outlined profileIcon">logout</span>
                            </a>
                            <Cart />
                        </>
                    ) : (
                        <Link to="/login" className="mr-3">
                            <span className="material-symbols-outlined profileIcon">login</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
