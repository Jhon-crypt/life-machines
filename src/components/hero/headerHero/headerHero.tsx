import Header from "../../header/header"

function HeaderHero() {

    return (

        <>

            <section className="pt-6 pb-20 overflow-hidden" style={{
                backgroundImage: "url('https://res.cloudinary.com/db7wwc9ex/image/upload/v1681922143/heading_tlcoxh.jpg')", backgroundSize: "cover",
                backgroundPosition: "center", backgroundRepeat: "no-repeat"
            }}>

                

                    <Header />

                    <div className="container mx-auto px-4 mt-7" >

                        <div className="px-8 py-20 overflow-hidden rounded-3xl" >
                            <div className="md:max-w-2xl text-center mx-auto" 
                            >
                                <span className="inline-block mb-3 text-sm text-primary-focus font-bold uppercase tracking-widest"
                                style={{ 
                                    textShadow: "2px 2px black"
                                 }}
                                >
                                    Powerful Custom Solutions
                                </span>
                                <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-white-focus font-black tracking-tight">
                                    <span  style={{ 
                                    textShadow: "2px 2px #5AC847"
                                 }}>Custom Rigs And </span>
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary-focus
                                hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primary-focus 
                                hover:to-secondary">High</span>
                                    <span  style={{ 
                                    textShadow: "2px 2px #5AC847"
                                 }}> Performance Pcs.</span>
                                </h1>
                                <p className="mb-8 text-xl text-gray-400 font-bold" style={{ 
                                    textShadow: "2px 2px black"
                                 }}>
                                    Professionally built Custom-Pcs & mobile workstations for African digital creators.
                                </p>

                            </div>
                        </div>

                    

                </div>

            </section>

        </>

    )

}

export default HeaderHero