import Auth from '../../utils/auth.js'

const Nav = () => {
    const loggedIn = Auth.loggedIn();

    return (
        <div className="bg-dark">
            <div className="d-flex justify-content-around">
                <div className="m-auto">
                    <h1>
                        <a href="/" className="">Import Export</a>
                    </h1>
                </div>
                <div className="m-auto">
                    {loggedIn ? (
                        <span class="material-symbols-outlined">account_circle</span>    
                    ) : (
                    <a href="/login" className="mr-3">
                        <span class="material-symbols-outlined">login</span>
                    </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Nav;