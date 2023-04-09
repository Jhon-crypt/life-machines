import Header from "../../header/header"

function HeaderHero() {

    return (

        <>

            <section className="pt-6 pb-20 overflow-hidden" style={{
                backgroundImage: "url('https://shuffle.dev/zanrly-assets/images/headers/mountain.jpg')", backgroundSize: "cover",
                backgroundPosition: "center", backgroundRepeat: "no-repeat"
            }}>

                <Header />

                <div className="container mx-auto px-4 mt-7">

                    <div className="px-8 py-20 overflow-hidden rounded-3xl"
                        >
                        <div className="md:max-w-2xl text-center mx-auto">
                            <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                                Best caption here
                            </span>
                            <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-white font-black tracking-tight">
                                <span>Build what you </span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary-focus
                                hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primary-focus 
                                hover:to-secondary">imagine</span>
                                <span> without compromise.</span>
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