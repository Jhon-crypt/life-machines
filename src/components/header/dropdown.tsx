function Dropdown() {

    return (

        <>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="hover:text-secondary"><a>Features</a></li>
                    <li className="hover:text-secondary"><a>Products</a></li>
                    <li className="hover:text-secondary"><a>How it works</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-sm rounded-3xl bg-secondary text-primary-focus hover:bg-primary hover:text-secondary"><b>Start now</b></a>
            </div>

        </>

    )

}

export default Dropdown