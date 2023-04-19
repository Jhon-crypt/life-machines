
function FeatureSection() {

    return (

        <>

            <section className="pt-28 pb-36 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="mb-20 flex flex-wrap items-end -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <h2 className="text-6xl text-accent md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-xl">Elevate Your Workstation Experience.</h2>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <p className="text-lg text-accent font-medium leading-relaxed md:max-w-lg">
                            Our custom-built high-performance PCs deliver unmatched processing power, graphics capabilities and 
                            speed, with unbeatable configurability to meet your unique needs.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full md:w-1/3 p-3">
                            <a className="flex justify-center md:block h-full" href="#">
                                <div className="relative h-full rounded-3xl overflow-hidden">
                                    <img className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000" src="https://res.cloudinary.com/db7wwc9ex/image/upload/v1681922141/feature4_ub4azt.jpg" alt=""/>
                                        
                                </div>
                            </a>
                        </div>
                        <div className="w-full md:w-1/3 p-3">
                            <a className="flex justify-center md:block h-full" href="#">
                                <div className="relative h-full rounded-3xl overflow-hidden">
                                    <img className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000" src="https://res.cloudinary.com/db7wwc9ex/image/upload/v1681922141/feature5_kpaf54.jpg" alt=""/>
                                        
                                </div>
                            </a>
                        </div>
                        <div className="w-full md:w-1/3 p-3">
                            <a className="flex justify-center md:block h-full" href="#">
                                <div className="relative h-full rounded-3xl overflow-hidden">
                                    <img className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000" src="https://res.cloudinary.com/db7wwc9ex/image/upload/v1681922142/feature6_dzbplq.jpg" alt=""/>
                                        
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}

export default FeatureSection