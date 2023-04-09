import Navbar from "./navbar"
import Dropdown from "./dropdown"

function Header() {

    return (

        <>

            <div className="container mx-auto mt-3">

                <div className="navbar bg-neutral rounded-3xl">

                    <Navbar />
                    
                    <Dropdown />
                    
                </div>

            </div>

        </>

    )

}

export default Header