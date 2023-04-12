function Dropdown() {

    return (

        <>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-white-focus hover:text-secondary"><a><b>Features</b></a></li>
                    <li className="text-white-focus hover:text-secondary"><a><b>Products</b></a></li>
                    <li className="text-white-focus hover:text-secondary"><a><b>How it works</b></a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-sm rounded-3xl bg-secondary text-primary-focus hover:bg-primary hover:text-secondary"><b>Start now</b></a>
            </div>

        </>

    )

}

export default Dropdown