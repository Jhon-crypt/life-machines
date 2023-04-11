function ContactForm() {

    return (

        <>

            <div className="w-full md:w-1/2 p-4">
                <form className="p-10 bg-base-100 rounded-3xl">
                    <div className="flex flex-wrap -m-3 mb-3">
                        <div className="w-full p-3">
                            <label className="block mb-2 text-sm text-gray-500 font-bold" htmlFor="contactLightReverseInput4-1">Full Name</label>
                            <input className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightReverseInput4-1" type="text" placeholder="Enter your name" />
                        </div>
                        <div className="w-full p-3">
                            <label className="block mb-2 text-sm text-gray-500 font-bold" htmlFor="contactLightReverseInput4-2">Emaill address</label>
                            <input className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightReverseInput4-2" type="text" placeholder="Email address" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-3 mb-3">
                        <div className="w-full p-3">
                            <label className="block mb-2 text-sm text-gray-500 font-bold" htmlFor="contactLightReverseInput4-3">Phone</label>
                            <input className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightReverseInput4-3" type="text" placeholder="Enter your phone number" />
                        </div>
                        <div className="w-full p-3">
                            <label className="block mb-2 text-sm text-gray-500 font-bold" htmlFor="contactLightReverseInput4-4">Subject</label>
                            <input className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightReverseInput4-4" type="text" placeholder="Type your subject" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-3.5">
                        <div className="w-full p-3.5">
                            <label className="block mb-2 text-sm text-gray-500 font-bold" htmlFor="contactLightReverseInput4-5">Message</label>
                            <textarea className="appearance-none px-6 py-5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-3xl" id="contactLightReverseInput4-5" rows={8} placeholder="Enter your message"></textarea>
                        </div>
                        <div className="w-full p-3.5">
                            <div className="flex flex-wrap items-center -m-3">
                                <div className="w-full p-3">
                                    <div className="flex">
                                        <input className="opacity-0 absolute h-5 w-5" id="contactLightReverseCheckbox4-1" type="checkbox" />
                                        <div className="flex flex-shrink-0 justify-center items-center w-6 h-6 mr-4 text-transparent bg-white border border-gray-200 rounded-md">
                                            <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.603516 3.77075L2.68685 5.85409L7.89518 0.645752" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                        <label className="text-sm text-gray-500 font-bold" htmlFor="contactLightReverseCheckbox4-1">I’d llike to occasionally receive other communication from Zanrly, such as content and product news.</label>
                                    </div>
                                </div>
                                <div className="w-full p-3">
                                    <div className="flex flex-wrap md:justify-end -m-2">
                                        <div className="w-full p-2"><a className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">Send Message</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )

}

export default ContactForm