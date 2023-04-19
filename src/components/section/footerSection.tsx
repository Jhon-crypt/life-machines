import logo from "../../assets/logo.png"

function FooterSection() {

    return (

        <>

            <section className="py-10 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="py-16 px-8 rounded-3xl">
                        <div className="flex flex-col justify-center">

                            <a className="inline-block max-w-max mx-auto mb-5" href="#">
                                <img className="rounded-3xl" src={logo} alt="" width="100px" height="100px" />
                            </a>
                            
                            <ul className="-m-6 mb-7 text-center">
                                <li className="inline-flex p-6"><a className="inline-block text-gray-500 hover:text-accent font-bold" href="#">Features</a></li>
                                <li className="inline-flex p-6"><a className="inline-block text-gray-500 hover:text-accent font-bold" href="#">About Us</a></li>
                                <li className="inline-flex p-6"><a className="inline-block text-gray-500 hover:text-accent font-bold" href="#">Products</a></li>
                                <li className="inline-flex p-6"><a className="inline-block text-gray-500 hover:text-accent font-bold" href="#">How It Works</a></li>
                                <li className="inline-flex p-6"><a className="inline-block text-gray-500 hover:text-accent font-bold" href="#">Contact Us</a></li>
                            </ul>
                            <div className="flex flex-wrap justify-center -m-4 mb-12">
                                <div className="w-auto p-4"><a className="block" href="https://www.instagram.com/lifemachinesng/"><b>Instagram</b></a></div>
                                <div className="w-auto p-4"><a className="block" href="https://twitter.com/lifemachinesng"><b>Twitter</b></a></div>
                                <div className="w-auto p-4"><a className="block" href="https://api.whatsapp.com/send?phone=2348138481715"><b>Whatsapp</b></a></div>
                            </div>
                            <p className="text-center font-bold"><span>Ⓒ Copyright. All rights reserved by </span><a className="text-blue-500 hover:text-blue-600" href="#">LifeMachinesNg</a></p>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}

export default FooterSection