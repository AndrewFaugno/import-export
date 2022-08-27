const Nav = () => {
    return (
        <div className="bg-dark">
            <div className="d-flex justify-content-around">
                <div className="m-auto">
                    <h1>
                        <a href="/" className="">Shop Name</a>
                    </h1>
                </div>
                <div className="m-auto">
                    <a href="/login" className="">Login</a>
                    <a href="/signup">Signup</a>
                </div>
            </div>
        </div>
    )
}

export default Nav;