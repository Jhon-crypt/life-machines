import Header from "../../header/header"
import bg from "../../../assets/heading.jpg"

function HeaderHero() {

    return (

        <>

            <section className="pt-6 pb-20 overflow-hidden" style={{
                backgroundImage: `url(${bg})`, backgroundSize: "cover",
                backgroundPosition: "center", backgroundRepeat: "no-repeat"
            }}>

                

                    <Header />

                    <div className="container mx-auto px-4 mt-7" >

                        <div className="px-8 py-20 overflow-hidden rounded-3xl" >
                            <div className="md:max-w-2xl text-center mx-auto" 
                            >
                                <span className="inline-block mb-3 text-sm text-primary-focus font-bold uppercase tracking-widest"
                                style={{ 
                                    textShadow: "2px 2px #5AC847"
                                 }}
                                >
                                    Best caption here
                                </span>
                                <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-white-focus font-black tracking-tight">
                                    <span  style={{ 
                                    textShadow: "2px 2px #5AC847"
                                 }}>Build what you </span>
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary-focus
                                hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primary-focus 
                                hover:to-secondary">imagine</span>
                                    <span  style={{ 
                                    textShadow: "2px 2px #5AC847"
                                 }}> without compromise.</span>
                                </h1>
                                <p className="mb-8 text-xl text-gray-400 font-bold">
                                    Thousands of companies trust in our apps, you could be part of our community too.
                                </p>

                            </div>
                        </div>

                    

                </div>

            </section>

        </>

    )

}

export default HeaderHero