import ContactForm from "./contactForm/contactForm"
import ContactDetails from "./contactDetails/contactDetails"

function ContactSection() {

    return (

        <>

            <section className="py-10 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="py-16 px-8 bg-neutral overflow-hidden rounded-3xl">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-wrap -m-4">

                                <ContactDetails />
                                
                                <ContactForm />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}

export default ContactSection