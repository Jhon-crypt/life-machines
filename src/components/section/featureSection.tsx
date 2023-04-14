import FeatureImage4 from "../../assets/feature4.jpg"
import FeatureImage5 from "../../assets/feature5.jpg"
import FeatureImage6 from "../../assets/feature6.jpg"

function FeatureSection() {

    return (

        <>

            <section className="pt-28 pb-36 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="mb-20 flex flex-wrap items-end -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <h2 className="text-6xl text-accent md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-xl">Advertise impressive product performance.</h2>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <p className="text-lg text-accent font-medium leading-relaxed md:max-w-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full md:w-1/3 p-3">
                            <a className="flex justify-center md:block h-full" href="#">
                                <div className="relative h-full rounded-3xl overflow-hidden">
                                    <img className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000" src={FeatureImage4} alt=""/>
                                        
                                </div>
                            </a>
                        </div>
                        <div className="w-full md:w-1/3 p-3">
                            <a className="flex justify-center md:block h-full" href="#">
                                <div className="relative h-full rounded-3xl overflow-hidden">
                                    <img className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000" src={FeatureImage5} alt=""/>
                                        
                                </div>
                            </a>
                        </div>
                        <div className="w-full md:w-1/3 p-3">
                            <a className="flex justify-center md:block h-full" href="#">
                                <div className="relative h-full rounded-3xl overflow-hidden">
                                    <img className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000" src={FeatureImage6} alt=""/>
                                        
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